import AppError from '../utils/appError';
import { BehaviorType } from '../types';
import { client } from '../utils/credentialHandler';
import createResponse from '../utils/createResponse';
import Source from '../models/sourceModel';
import { transformResponse } from '../utils/responseHelper';

export const added = async (data: BehaviorType): Promise<void> => {
  // 1. If found duplicate, don't save.
  const source = await Source.findOne({
    sourceId: data.sourceId,
    sourceType: data.sourceType,
  });

  if (!source) {
    await Source.create({
      sourceId: data.sourceId,
      sourceType: data.sourceType,
    });
  }

  // 2. Send response.
  const message = transformResponse('added', []);
  const response = createResponse(message);

  await client.replyMessage(data.replyToken, response);
};

export const help = async ({ replyToken }: BehaviorType): Promise<void> => {
  // 1. Simply send a help message.
  const message = transformResponse('help', []);
  const response = createResponse(message);

  await client.replyMessage(replyToken, response);
};

export const join = async (data: BehaviorType): Promise<void> => {
  // 1. If found duplicate, don't save.
  const source = await Source.findOne({
    sourceId: data.sourceId,
    sourceType: data.sourceType,
  });

  if (!source) {
    await Source.create({
      sourceId: data.sourceId,
      sourceType: data.sourceType,
    });
  }

  // 2. Send a greeting message.
  const message = transformResponse('join', []);
  const response = createResponse(message);

  await client.replyMessage(data.replyToken, response);
};

export const anzuSpeaks = async ({
  replyToken,
}: BehaviorType): Promise<void> => {
  const message = transformResponse('anzuSpeaks', []);
  const response = createResponse(message);

  await client.replyMessage(replyToken, response);
};

export const leave = async ({
  sourceId,
  sourceType,
  replyToken,
}: BehaviorType): Promise<void> => {
  if (sourceType !== 'room' && sourceType !== 'group') {
    throw new AppError(
      'Sorry, but you cannot kick me out from personal chats.',
      400,
      replyToken
    );
  }

  const message = transformResponse('leave', []);
  const response = createResponse(message);

  await client.replyMessage(replyToken, response);

  // If Anzu is located in a room or a group, leave.
  if (sourceType === 'room') {
    return await client.leaveRoom(sourceId);
  }

  await client.leaveGroup(sourceId);
};
