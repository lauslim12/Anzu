import type { ClientConfig, MiddlewareConfig } from '@line/bot-sdk';
import { Client, middleware } from '@line/bot-sdk';

import environments from '../config/environments';

/**
 * Creates a configuration for LINE Client.
 */
const LINEClientConfig: ClientConfig = {
  channelAccessToken: environments.line.channelAccess,
  channelSecret: environments.line.channelSecret,
};

/**
 * Creates a configuration for LINE Middleware.
 */
const LINEMiddlewareConfig: MiddlewareConfig = {
  channelAccessToken: environments.line.channelAccess,
  channelSecret: environments.line.channelSecret,
};

/**
 * Creates a LINE Client for usage.
 */
export const LINEClient = new Client(LINEClientConfig);

/**
 * Creates a specialized LINE middleware to process webhook events.
 */
export const LINEMiddleware = middleware(LINEMiddlewareConfig);
