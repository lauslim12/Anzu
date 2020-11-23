module.exports = (event) => {
  let sourceId;
  const type = event.source.type || 'user';

  // 1. Parse the source object.
  if (event.source.type === 'group') {
    sourceId = event.source.groupId;
  } else if (event.source.type === 'room') {
    sourceId = event.source.roomId;
  } else {
    sourceId = event.source.userId;
  }

  return {
    sourceId,
    type,
  };
};
