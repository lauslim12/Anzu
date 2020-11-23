const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const getSourceId = require('../utils/getSourceId');

exports.help = async (event) => {
  // 1. Simply send a help message.
  const message =
    'Anzu is available for the following commands:\n1. (/schedule <deadline> <job_name>) to schedule your tasks\n2. (/tasks) to show all available tasks\n3. (/delete <job_name>) to delete available tasks in this room\n4. (/help) to spawn the help menu\n5. (/leave) to make me leave (if on a group or multi-chat environment)';

  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};

exports.anzuSpeaks = async (event) => {
  const response = createResponse(
    "Did you call me? I am Anzu, an open source scheduler chatbot created by Nicholas Dwiarto. My creator probably hasn't open sourced me yet, but I believe he will in a while.\n\nHave fun using me and please let me know if you need anything!\n\nUse '/help' (without parentheses) to get started!"
  );

  await client.replyMessage(event.replyToken, response);
};

exports.leave = async (event) => {
  const { sourceId, type } = getSourceId(event);

  if (type !== 'room' && type !== 'group') {
    const message = 'Sorry, but you cannot kick me out from personal chats.';
    const response = createResponse(message);

    return await client.replyMessage(event.replyToken, response);
  }

  const message =
    'Thank you for using me! I will be taking my leave now. Bye-bye!';
  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);

  // If Anzu is located in a room or a group, leave.
  if (type === 'room') {
    return await client.leaveRoom(sourceId);
  }

  await client.leaveGroup(sourceId);
};
