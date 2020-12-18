import { WebhookEvent } from '@line/bot-sdk';
import featureGuard from '../utils/featureGuard';
import getSourceId from '../utils/getSourceId';

const adminFunctions = require('../functions/adminFunctions');
const behaviorFunctions = require('../functions/behaviorFunctions');
const errorFunctions = require('../functions/errorFunctions');
const taskFunctions = require('../functions/taskFunctions');

type DataToBeProcessed = {
  sourceId: string;
  sourceType: string;
  command: string;
  scheduler: string;
  replyToken: string;
};

const apiCall = async (event: WebhookEvent): Promise<null | void> => {
  // 1. Our 'event handler' that will catch any events other than 'message' events.
  if (event.type === 'join') {
    await behaviorFunctions.join(event);
  }

  if (event.type === 'follow') {
    await behaviorFunctions.added(event);
  }

  // 2. Check if invalid input or invalid event type, Anzu does not need to respond.
  // Resolve the promise and exit the asynchronous map function.
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  // 3. Access our routes.
  if (event.type === 'message') {
    // Prepare our variables to be processed in the subfunctions.
    const { text } = event.message;
    const { sourceId, sourceType } = getSourceId(event.source);
    const dataToBeProcessed: DataToBeProcessed = {
      sourceId,
      sourceType,
      command: text,
      scheduler: event.source.userId || '',
      replyToken: event.replyToken,
    };

    try {
      // 4. Feature guard: if below routes match, apply filter guard first.
      if (
        text.startsWith('System Call: Purge') ||
        text.startsWith('System Call: Administrator') ||
        text.startsWith('System Call: Delete Expired') ||
        text.startsWith('System Call: Local Deletion')
      ) {
        featureGuard({
          userId: event.source.userId,
          replyToken: event.replyToken,
        });
      }

      if (
        (text.startsWith('/schedule') ||
          text.startsWith('/delete') ||
          text.startsWith('/leave') ||
          text.startsWith('/reschedule') ||
          text.startsWith('/finish')) &&
        process.argv[2] !== '--disable-administrator'
      ) {
        featureGuard({
          userId: event.source.userId,
          replyToken: event.replyToken,
        });
      }

      if (text.startsWith('/schedule')) {
        await taskFunctions.scheduleTask(dataToBeProcessed);
      }

      if (text.startsWith('/tasks')) {
        await taskFunctions.getScheduledTasks(dataToBeProcessed);
      }

      if (text.startsWith('/delete')) {
        await taskFunctions.deleteScheduledTask(dataToBeProcessed);
      }

      if (text.startsWith('/reschedule')) {
        await taskFunctions.rescheduleTask(dataToBeProcessed);
      }

      if (text.startsWith('/finish')) {
        await taskFunctions.finishTask(dataToBeProcessed);
      }

      if (text.startsWith('/help')) {
        await behaviorFunctions.help(event);
      }

      if (text.startsWith('/leave')) {
        await behaviorFunctions.leave(event);
      }

      if (text.includes('Anzu') || text.includes('anzu')) {
        await behaviorFunctions.anzuSpeaks(event);
      }

      if (text.startsWith('System Call: Purge')) {
        await adminFunctions.purge(event);
      }

      if (text.startsWith('System Call: Administrator')) {
        await adminFunctions.administrator(event);
      }

      if (text.startsWith('System Call: Delete Expired')) {
        await adminFunctions.cleanExpired(event);
      }

      if (text.startsWith('System Call: Local Deletion')) {
        await adminFunctions.cleanLocally(event);
      }
    } catch (err) {
      await errorFunctions(err);

      /* eslint-disable no-console */
      console.error(err.message);
      /* eslint-enable no-console */
    }

    return Promise.resolve(null);
  }
};

export default apiCall;
