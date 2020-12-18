// Intentional to prevent runtime errors after compiling the TypeScript.
import {
  Client,
  middleware,
  ClientConfig,
  MiddlewareConfig,
} from '@line/bot-sdk';

const config: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET,
};

export const client = new Client(config);

const configurations: MiddlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET || '',
};

export const lineMiddleware = middleware(configurations);
