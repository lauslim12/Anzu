import type { WebhookEvent } from '@line/bot-sdk';

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

export default handleListener;
