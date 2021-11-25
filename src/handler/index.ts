import type { WebhookEvent } from '@line/bot-sdk';
import { Client } from '@line/bot-sdk';

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
const userTaskCommands = [
  '/delete',
  '/finish',
  '/schedule',
  '/reschedule',
  '/tasks',
];

/**
 * All user commands to ask for help / stateless commands.
 */
const userHelpCommands = ['/help', 'anzu'];

/**
 * All user commands to ask the bot to do behavioral instructions (leaving, etc.).
 */
const userBehaviorCommands = ['/leave'];

/**
 * Handles all admin commands.
 *
 * @param message - Text message
 */
const handleAdmin = async (message: string) => {
  // handle...
};

/**
 * Handles all behavioral commands.
 *
 * @param message - Text message
 */
const handleBehavior = async (message: string) => {
  // handle...
};

/**
 * Handles all stateless commands.
 *
 * @param message - Text message
 */
const handleChat = async (message: string) => {
  // handle...
};

/**
 * Handles all 'listener' / 'pub/sub' events (joining, following, etc.).
 *
 * @param type - Event type from webhook event
 */
const handleListener = async (type: WebhookEvent['type']) => {
  if (type === 'follow') {
    // greet after follow...
  }

  if (type === 'join') {
    // greet after join...
  }
};

/**
 * Handles all tasks commands.
 *
 * @param message - Text message
 */
const handleTask = async (message: string) => {
  // handle...
};

/**
 * Main event handler / webhook for our Anzu.
 *
 * @param event - Webhook event
 */
const handler = async (client: Client, event: WebhookEvent) => {
  if (event.type === 'follow' || event.type === 'join') {
    handleListener(event.type);

    await client.replyMessage(event.replyToken, { type: 'text', text: '...' });
  }

  if (event.type === 'message' && event.message.type === 'text') {
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
      handleTask(text);
    }

    await client.replyMessage(event.replyToken, { type: 'text', text: '...' });
  }

  Promise.resolve(null);
};

export default handler;
