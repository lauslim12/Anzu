// Global Imports.
import {
  JSONParseError,
  HTTPError,
  ReadError,
  RequestError,
  WebhookEvent,
} from '@line/bot-sdk';
import compression from 'compression';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';

// Personal Functions.
import apiRoutes from './routes/apiRoutes';
import { getAllResponsesInApplication } from './utils/responseHelper';
import { lineMiddleware } from './utils/credentialHandler';

// Top level code, fetch all the responses synchronously for easier handling (load-balancing).
getAllResponsesInApplication();

// Application Setup.
const app: Application = express();

// Middleware Setup.
app.use(cors());
app.use(helmet());
app.use(compression());

// Routes.
app.get(
  '/',
  async (_: Request, res: Response): Promise<Response> => {
    return res.status(200).json({
      status: 'success',
      message: 'Connected successfully!',
    });
  }
);

/**
 * Because we are going to process each event asynchronously, there are some things to keep in mind:
 * - We are not returning anything from the routes themselves, as LINE Bot SDK returns an empty object.
 * - We just want the assurance that our events are processed and will not stop even if one process fails.
 *
 * The 'catch' promise handler here is used for:
 * - Asynchronous error handling.
 * - To ensure that the 'map' function does not end when one process fails.
 * - To handle all unexpected client errors.
 * - Alternatively, using 'Promise.allSettled' is also possible (ES2020).
 */
app.post(
  '/anzu',
  lineMiddleware,
  async (req: Request, res: Response): Promise<Response> => {
    const requestEvents: WebhookEvent[] = req.body.events;
    let isAPIClientError: boolean = false;

    await Promise.all(
      requestEvents.map(
        async (event: WebhookEvent) =>
          await apiRoutes(event).catch((err: unknown) => {
            /* eslint-disable no-console */
            if (
              err instanceof RequestError ||
              err instanceof ReadError ||
              err instanceof HTTPError ||
              err instanceof JSONParseError
            ) {
              console.error(err.message);
              console.error(err.name);
              console.error(err.stack);

              if (err instanceof HTTPError) {
                console.error(err.statusCode, err.statusMessage);
              }
            } else {
              console.error(`Unknown error: ${err}`);
            }

            // We set this flag to return a 500 response.
            isAPIClientError = true;
            /* eslint-enable no-console */
          })
      )
    );

    // Prepare to return a 500 response if there are any of 'fatal' errors.
    if (isAPIClientError) {
      return res.status(500).json({
        status: 'error',
      });
    }

    // Return a 200 if the process had run successfully.
    return res.status(200).json({
      status: 'success',
    });
  }
);

export default app;
