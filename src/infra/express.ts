import type { WebhookEvent } from '@line/bot-sdk';
import { Client } from '@line/bot-sdk';
import { Middleware } from '@line/bot-sdk/dist/middleware';
import compression from 'compression';
import type { Application, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';

import TaskRepository from '../task/repository';
import TaskModel from '../task/schema';
import TaskService from '../task/service';
import webhookHandler from '../webhook';

/**
 * Loads a new Express application with all middlewares for usage.
 *
 * @param app - Express application
 * @param client - LINE Client
 * @param middleware - LINE Middleware
 * @param taskModel - Mongoose's model for 'Task' entity
 * @returns Loaded Express application
 */
const loadExpress = (
  app: Application,
  client: Client,
  middleware: Middleware,
  taskModel: typeof TaskModel
) => {
  // Load middlewares.
  app.use(helmet());
  app.use(hpp());
  app.use(compression());

  // Set up loggers for safety.
  app.use(morgan('combined'));

  // Prevent XST atttacks by filtering allowed methods.
  app.use((req: Request, res: Response, next: NextFunction) => {
    const allowedMethods = ['OPTIONS', 'HEAD', 'CONNECT', 'GET', 'POST'];
    if (!allowedMethods.includes(req.method)) {
      res.status(405).json({
        status: 'fail',
        message: `Method '${req.method}' is not allowed!`,
      });

      return;
    }

    next();
  });

  // Define repositories.
  const taskRepository = new TaskRepository(taskModel);

  // Define services.
  const taskService = new TaskService(taskRepository);

  // Define route for connection tests.
  app.get('/', (_: Request, res: Response) => {
    res.status(200).json({
      status: 'success',
      message: "Successfully connected to Anzu's API!",
      results: null,
    });
  });

  // Define route to process commands.
  app.post('/', middleware, async (req: Request, res: Response) => {
    const { events }: { events: WebhookEvent[] } = req.body;

    try {
      const results = await Promise.all(
        events.map((event) => webhookHandler(client, event, taskService))
      );

      res.status(200).json({
        status: 'success',
        message: 'Successfully processed all events!',
        results,
      });
    } catch {
      res.status(503).json({
        status: 'error',
        message: 'Failed to process all events due to an internal error!',
      });
    }
  });

  // Define 404 route.
  app.all('*', (req: Request, res: Response) => {
    res.status(404).json({
      status: 'fail',
      message: `Cannot find ${req.originalUrl} on this server!`,
    });
  });

  // Return application.
  return app;
};

export default loadExpress;
