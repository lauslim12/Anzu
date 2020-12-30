// Global Imports.
import compression from 'compression';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import { WebhookEvent } from '@line/bot-sdk';

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

app.post(
  '/anzu',
  lineMiddleware,
  async (req: Request, res: Response): Promise<Response> => {
    const requestEvents: WebhookEvent[] = req.body.events;

    // The 'try-catch' block here is used for asynchronous error handling,
    // and to ensure that the 'map' function does not end when one process fails.
    try {
      const result = await Promise.all(
        requestEvents.map(async (event: WebhookEvent) => {
          try {
            return await apiRoutes(event);
          } catch (err) {
            /* eslint-disable no-console */
            console.error(err);
            /* eslint-enable no-console */
          }
        })
      );

      return res.status(200).json({
        status: 'success',
        result,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'success',
        error,
      });
    }
  }
);

export default app;
