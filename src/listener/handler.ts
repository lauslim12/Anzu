import type { WebhookEvent } from '@line/bot-sdk';

import responses from './responses';

/**
 * Handles all 'listener' / 'pub/sub' events (joining, following, etc.).
 *
 * @param type - Event type from webhook event
 * @returns A message as Anzu's response.
 */
const handleListener = async (type: WebhookEvent['type']) => {
  if (type === 'follow') {
    return responses.added();
  }

  if (type === 'join') {
    return responses.join();
  }

  return '';
};

export default handleListener;
