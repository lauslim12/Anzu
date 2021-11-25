/* eslint-disable no-console */
/* eslint-disable no-process-exit */
import express from 'express';

import environments from './config/environments';
import loadExpress from './infra/express';
import { loadLINEClient, loadLINEMiddleware } from './infra/line';
import loadMongoDB from './infra/mongodb';
import SourceModel from './source/schema';
import TaskModel from './task/schema';

/**
 * Starts the whole application.
 */
async function startApp() {
  /**
   * Load database.
   */
  await loadMongoDB();

  /**
   * Load application.
   */
  const app = loadExpress(
    express(),
    loadLINEClient,
    loadLINEMiddleware,
    TaskModel,
    SourceModel
  );

  /**
   * Handles uncaught exceptions to prevent app error before starting.
   */
  process.on('uncaughtException', (err) => {
    console.log('Unhandled exception 💥! Application shutting down!');
    console.log(err.name, err.message);
    process.exit(1);
  });

  /**
   * Run application on port that is suited for the environment.
   */
  const server = app.listen(environments.port, () => {
    console.log(`Express API is now listening on port ${environments.port}!`);
  });

  /**
   * Handles unhandled rejections, and shut down gracefully.
   */
  process.on('unhandledRejection', (err) => {
    console.error('Unhandled rejection 💥! Application shutting down!');
    console.error(err);

    // Finish all requests that are still pending, the shutdown gracefully.
    server.close(() => {
      process.exit(1);
    });
  });

  /**
   * Handles 'SIGQUIT' signal.
   */
  process.on('SIGQUIT', () => {
    console.log('Receiving signal to shut down. Shutting down gracefully...');

    server.close(() => {
      console.log('Server closed successfully!');
      process.exit(0);
    });
  });

  /**
   * Handles 'SIGTERM' signal.
   */
  process.on('SIGTERM', () => {
    console.log('Receiving signal to terminate. Shutting down gracefully...');

    server.close(() => {
      console.log('Server closed successfully!');
      process.exit(0);
    });
  });

  /**
   * Handles 'SIGINT' signal.
   */
  process.on('SIGINT', () => {
    console.log('Receiving signal to interrupt. Shutting down gracefully...');

    server.close(() => {
      console.log('Server closed successfully!');
      process.exit(0);
    });
  });
}

/**
 * Simulates 'function main' on most programming languages.
 */
if (require.main === module) {
  startApp().catch((err) => console.error(err));
}
