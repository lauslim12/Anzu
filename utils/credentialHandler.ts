import line, { ClientConfig, MiddlewareConfig } from '@line/bot-sdk';

export const config: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET,
};

export const client = new line.Client(config);

export const configurations: MiddlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET || '',
};

export const lineMiddleware = line.middleware(configurations);
