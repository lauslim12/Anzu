import { client } from '../utils/credentialHandler';
import createResponse from '../utils/createResponse';
import Task from '../models/taskModel';
import { transformResponse } from '../utils/responseHelper';

type DataToBeProcessed = {
  sourceId: string;
  sourceType: string;
  command: string;
  scheduler: string;
  replyToken: string;
};

// exports.disable = async (event) => {};

export const purge = async ({
  replyToken,
}: DataToBeProcessed): Promise<void> => {
  // 1. After the administrator says 'System Call: Purge', clean all the database.
  await Task.deleteMany({});

  // 2. Notify the administrator.
  const message = transformResponse('purge', []);
  const response = createResponse(message);

  await client.replyMessage(replyToken, response);
};

export const cleanExpired = async ({
  replyToken,
}: DataToBeProcessed): Promise<void> => {
  // 1. Clean all expired tasks, manually.
  const currentDate = new Date(Date.now());
  await Task.deleteMany({ deadline: { $lt: currentDate } });

  // 2. Send response.
  const message = transformResponse('cleanExpired', []);
  const response = createResponse(message);

  await client.replyMessage(replyToken, response);
};

export const cleanLocally = async ({
  sourceId,
  replyToken,
}: DataToBeProcessed): Promise<void> => {
  // 1. Clean all tasks in an envionment, manually.
  await Task.deleteMany({ sourceId: sourceId });

  // 2. Send response.
  const message = transformResponse('cleanLocally', []);
  const response = createResponse(message);

  await client.replyMessage(replyToken, response);
};

// exports.leave = async (event) => {};

export const administrator = async ({
  replyToken,
}: DataToBeProcessed): Promise<void> => {
  // 1. If a user is an administrator, accept and send response.
  const message = transformResponse('administrator', []);
  const response = createResponse(message);

  await client.replyMessage(replyToken, response);
};
