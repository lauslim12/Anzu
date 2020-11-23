const adminFunctions = require('../functions/adminFunctions');
const behaviorFunctions = require('../functions/behaviorFunctions');
const errorFunctions = require('../functions/errorFunctions');
const featureGuard = require('../utils/featureGuard');
const taskFunctions = require('../functions/taskFunctions');

const apiCall = async (event) => {
  const { text } = event.message;

  // 0. Check if invalid input, Anzu does not need to respond.
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  try {
    if (text.startsWith('/schedule')) {
      featureGuard(event);
      await taskFunctions.scheduleTask(event);
    }

    if (text.startsWith('/tasks')) {
      await taskFunctions.getScheduledTasks(event);
    }

    if (text.startsWith('/delete')) {
      featureGuard(event);
      await taskFunctions.deleteScheduledTask(event);
    }

    if (text.startsWith('/help')) {
      await taskFunctions.help(event);
    }

    if (text.startsWith('/leave')) {
      featureGuard(event);
      await behaviorFunctions.leave(event);
    }

    if (text.includes('Anzu') || text.includes('anzu')) {
      await behaviorFunctions.anzuSpeaks(event);
    }

    if (text.startsWith('System Call: Purge')) {
      featureGuard(event);
      await adminFunctions.purge(event);
    }

    if (text.startsWith('System Call: Administrator')) {
      featureGuard(event);
      await adminFunctions.administrator(event);
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
