import { ClientConfig, MiddlewareConfig } from '@line/bot-sdk';

const line = require('@line/bot-sdk');

const config: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET,
};

export const client = new line.Client(config);

const configurations: MiddlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET || '',
};

export const lineMiddleware = line.middleware(configurations);
