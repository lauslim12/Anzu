import type { EventSource, WebhookEvent } from '@line/bot-sdk';

import SourceService from '../source/service';
import getEventMetadata from '../utils/getEventMetadata';
import responses from './responses';

/**
 * Handles all 'listener' / 'pub/sub' events (joining, following, etc.).
 *
 * @param type - Event type from webhook event
 * @param source - Event source
 * @param sourceService - Source service
 * @returns A message as Anzu's response.
 */
const handleListener = async (
  type: WebhookEvent['type'],
  source: EventSource,
  sourceService: SourceService
) => {
  const { sourceId, sourceType } = getEventMetadata(source);

  if (type === 'follow') {
    if (await sourceService.getSource(sourceId)) {
      await sourceService.createSource({
        sourceId,
        sourceType,
        dateAdded: Date.now(),
      });
    }

    return responses.added();
  }

  if (type === 'join') {
    if (await sourceService.getSource(sourceId)) {
      await sourceService.createSource({
        sourceId,
        sourceType,
        dateAdded: Date.now(),
      });
    }

    return responses.join();
  }

  return '';
};

export default handleListener;
