import type { EventSource } from '@line/bot-sdk';

/**
 * Fetches the event metadata of an Event.
 * Metadata: UserID, SourceID (Scheduler), and SourceType.
 *
 * @param event - Event source
 * @returns UserID, SourceID, and SourceType of an event.
 */
const getEventMetadata = (event: EventSource) => {
  const userId =
    event.userId ||
    'The user who scheduled this event has not yet been registered in LINE.';
  const sourceType = event.type;

  if (event.type === 'group') {
    return {
      userId,
      sourceId: event.groupId,
      sourceType,
    };
  }

  if (event.type === 'room') {
    return {
      userId,
      sourceId: event.roomId,
      sourceType,
    };
  }

  if (event.type === 'user') {
    return {
      userId,
      sourceId: event.userId,
      sourceType,
    };
  }

  return {
    userId,
    sourceId: '',
    sourceType,
  };
};

export default getEventMetadata;
