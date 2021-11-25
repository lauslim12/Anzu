import type { EventSource } from '@line/bot-sdk';
import { Client } from '@line/bot-sdk';

import responses from './responses';

/**
 * Handles all behavioral commands.
 *
 * @param client - LINE client
 * @param message - Text message
 */
const handleBehavior = async (
  client: Client,
  source: EventSource,
  message: string
) => {
  if (message.startsWith('/leave')) {
    if (source.type === 'group') {
      await client.leaveGroup(source.groupId);

      return responses.leave();
    }

    if (source.type === 'room') {
      await client.leaveRoom(source.roomId);

      return responses.leave();
    }

    return 'Sorry, but you cannot kick me out from personal chats.';
  }

  return '';
};

export default handleBehavior;
