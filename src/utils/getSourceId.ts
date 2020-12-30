import { EventSource } from '@line/bot-sdk';
import { SourceIdAndType } from '../types';

const getSourceId = (event: EventSource): SourceIdAndType => {
  let sourceId;
  const sourceType = event.type || '';

  // 1. Parse the source object.
  if (event.type === 'group') {
    sourceId = event.groupId;
  } else if (event.type === 'room') {
    sourceId = event.roomId;
  } else {
    sourceId = event.userId;
  }

  return {
    sourceId,
    sourceType,
  };
};

export default getSourceId;
