import type { WebhookEvent } from '@line/bot-sdk';
import { Client } from '@line/bot-sdk';

import handleAdmin from '../admin/handler';
import handleBehavior from '../behavior/handler';
import handleChat from '../chat/handler';
import handleListener from '../listener/handler';
import type { TaskCommands } from '../task/domain';
import handleTask from '../task/handler';
import TaskService from '../task/service';

/**
 * All administrator commands.
 */
const adminCommands = [
  'System Call: Administrator',
  'System Call: Delete Expired',
  'System Call: Local Deletion',
  'System Call: Purge',
];

/**
 * All user commands to manage their tasks.
 */
const userTaskCommands = ['/finish', '/schedule', '/reschedule', '/tasks'];

/**
 * All user commands to ask for help / stateless commands.
 */
const userHelpCommands = ['/help', 'anzu'];

/**
 * All user commands to ask the bot to do behavioral instructions (leaving, etc.).
 */
const userBehaviorCommands = ['/leave'];

/**
 * Sends back response to the user after doing the commands.
 *
 * @param message - Message to be sent back to the client
 * @param client - A LINE instance
 * @param token - A reply token
 */
const sendResponse = async (message: string, client: Client, token: string) => {
  await client.replyMessage(token, { type: 'text', text: message });
};

/**
 * Main event handler / webhook for our Anzu.
 *
 * @param event - Webhook event
 */
const webhookHandler = async (
  client: Client,
  event: WebhookEvent,
  taskService: TaskService
) => {
  if (event.type === 'follow' || event.type === 'join') {
    const res = await handleListener(event.type);

    await sendResponse(res, client, event.replyToken);
  }

  if (event.type === 'message' && event.message.type === 'text') {
    const { source, replyToken } = event;
    const { text } = event.message;

    if (adminCommands.includes(text)) {
      handleAdmin(text);
    }

    if (userHelpCommands.includes(text.toLowerCase())) {
      handleChat(text);
    }

    if (userBehaviorCommands.includes(text)) {
      handleBehavior(text);
    }

    if (userTaskCommands.includes(text)) {
      const res = await handleTask(text as TaskCommands, source, taskService);

      await sendResponse(res, client, replyToken);
    }
  }

  Promise.resolve(null);
};

export default webhookHandler;
