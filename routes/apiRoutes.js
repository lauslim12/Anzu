const adminFunctions = require('../functions/adminFunctions');
const behaviorFunctions = require('../functions/behaviorFunctions');
const { client } = require('../utils/credentialHandler');
const errorFunctions = require('../functions/errorFunctions');
const taskFunctions = require('../functions/taskFunctions');

const featureGuard = async (event) => {
  if (event.source.userId !== process.env.ADMIN_USER_ID) {
    const response = {
      type: 'text',
      text:
        'Sorry, Anzu does not accept data manipulation orders from anyone other than Nicholas Dwiarto. Please ask him instead.',
    };

    await client.replyMessage(event.replyToken, response);

    throw new Error('Unauthorized user!');
  }
};

const apiCall = async (event) => {
  const { text } = event.message;

  // 0. Check if invalid input, Anzu does not need to respond.
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  try {
    if (text.startsWith('/schedule')) {
      await featureGuard(event);
      await taskFunctions.scheduleTask(event);
    }

    if (text.startsWith('/tasks')) {
      await taskFunctions.getScheduledTasks(event);
    }

    if (text.startsWith('/delete')) {
      await featureGuard(event);
      await taskFunctions.deleteScheduledTask(event);
    }

    if (text.startsWith('/help')) {
      await taskFunctions.help(event);
    }

    if (text.startsWith('/leave')) {
      await featureGuard(event);
      await taskFunctions.leave(event);
    }

    if (text.includes('Anzu') || text.includes('anzu')) {
      await behaviorFunctions.anzuSpeaks();
    }

    if (text.startsWith('System Call: Purge')) {
      await featureGuard(event);
      await adminFunctions.purge(event);
    }
  } catch (err) {
    await errorFunctions(err);

    /* eslint-disable no-console */
    console.error(err.message);
    /* eslint-enable no-console */
  }

  return Promise.resolve(null);
};

module.exports = apiCall;
