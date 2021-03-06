import { WebhookEvent } from '@line/bot-sdk';
import * as adminFunctions from '../functions/adminFunctions';
import AppError from '../utils/appError';
import { BehaviorType, ScheduleType } from '../types';
import * as behaviorFunctions from '../functions/behaviorFunctions';
import featureGuard from '../utils/featureGuard';
import getSourceId from '../utils/getSourceId';
import operationalErrorHandler from '../functions/errorFunctions';
import personalAnzuConfigurations from '../constants';
import * as taskFunctions from '../functions/taskFunctions';

const apiCall = async (event: WebhookEvent): Promise<boolean> => {
  // Prepare initial variables for 'JoinEvent' and 'FollowEvent'.
  const { sourceId, sourceType } = getSourceId(event.source);

  try {
    // 1. Our 'event handler' that will catch any events other than 'message' events.
    if (event.type === 'join' || event.type === 'follow') {
      // Prepare our variables.
      const { replyToken } = event;

      // Encapsulate them on an object for easier data processing.
      const behaviorDataToBeProcessed: BehaviorType = {
        sourceId,
        sourceType,
        replyToken,
      };

      if (event.type === 'join') {
        await behaviorFunctions.join(behaviorDataToBeProcessed);
      } else if (event.type === 'follow') {
        await behaviorFunctions.added(behaviorDataToBeProcessed);
      }
    }

    // 2. Check if invalid input or invalid event type, Anzu does not need to respond.
    // Resolve the promise and exit the asynchronous map function.
    if (event.type !== 'message' || event.message.type !== 'text') {
      return await Promise.resolve(true);
    }

    // 3. Access our routes.
    if (event.type === 'message') {
      // Prepare our variables to be processed in the subfunctions.
      const { text } = event.message;
      const { replyToken } = event;
      const { userId } = event.source || '';

      // Encapsulate our data to an object for better handling.
      const dataToBeProcessed: ScheduleType = {
        sourceId,
        sourceType,
        command: text,
        scheduler: userId,
        replyToken,
      };

      // 4. Feature guard: if below routes match, apply filter guard first.
      if (
        text.startsWith('System Call: Purge') ||
        text.startsWith('System Call: Administrator') ||
        text.startsWith('System Call: Delete Expired') ||
        text.startsWith('System Call: Local Deletion')
      ) {
        featureGuard({
          userId,
          replyToken,
        });
      }

      if (
        (text.startsWith('/schedule') ||
          text.startsWith('/delete') ||
          text.startsWith('/leave') ||
          text.startsWith('/reschedule') ||
          text.startsWith('/finish')) &&
        personalAnzuConfigurations.disableAdministrator
      ) {
        featureGuard({
          userId,
          replyToken,
        });
      }

      // Entering routes for schedules.
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

      // Entering routes for behavior functions.
      const behaviorDataToBeProcessed: BehaviorType = {
        sourceId,
        sourceType,
        replyToken,
      };

      if (text.startsWith('/help')) {
        await behaviorFunctions.help(behaviorDataToBeProcessed);
      }

      if (text.startsWith('/leave')) {
        await behaviorFunctions.leave(behaviorDataToBeProcessed);
      }

      if (text.includes('Anzu') || text.includes('anzu')) {
        await behaviorFunctions.anzuSpeaks(behaviorDataToBeProcessed);
      }

      // Entering routes for administrator functions.
      if (text.startsWith('System Call: Purge')) {
        await adminFunctions.purge(dataToBeProcessed);
      }

      if (text.startsWith('System Call: Administrator')) {
        await adminFunctions.administrator(dataToBeProcessed);
      }

      if (text.startsWith('System Call: Delete Expired')) {
        await adminFunctions.cleanExpired(dataToBeProcessed);
      }

      if (text.startsWith('System Call: Local Deletion')) {
        await adminFunctions.cleanLocally(dataToBeProcessed);
      }
    }
  } catch (err: unknown) {
    /* Operational errors are intentional errors made by the user's wrong usage. */
    if (err instanceof AppError) {
      await operationalErrorHandler(err);
    }

    /* The below errors are not intentional errors. */
    if (!(err instanceof AppError)) {
      throw err;
    }
  }

  return Promise.resolve(true);
};

export default apiCall;
