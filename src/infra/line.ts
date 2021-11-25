import { Client, middleware } from '@line/bot-sdk';

import environments from '../config/environments';

/**
 * Creates a configuration for LINE SDK.
 */
const LINEConfig = {
  channelAccessToken: environments.line.channelAccess,
  channelSecret: environments.line.channelSecret,
};

/**
 * Creates a LINE Client for usage.
 */
export const loadLINEClient = new Client(LINEConfig);

/**
 * Creates a specialized LINE middleware to process webhook events.
 */
export const loadLINEMiddleware = middleware(LINEConfig);
