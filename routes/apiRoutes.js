const adminFunctions = require('../functions/adminFunctions');
const behaviorFunctions = require('../functions/behaviorFunctions');
const errorFunctions = require('../functions/errorFunctions');
const featureGuard = require('../utils/featureGuard');
const taskFunctions = require('../functions/taskFunctions');

const apiCall = async (event) => {
  // Add an error handling if null.
  const { text } = event.message || {};

  // 1. Our 'event handler' that will catch any events other than 'message' events.
  if (event.type === 'join') {
    await behaviorFunctions.join(event);
  }

  // 2. Check if invalid input or invalid event type, Anzu does not need to respond.
  // Resolve the promise and exit the asynchronous map function.
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  // 3. Feature guard: if below routes match, apply filter guard first.
  if (
    text.startsWith('/schedule') ||
    text.startsWith('/delete') ||
    text.startsWith('/leave') ||
    text.startsWith('System Call: Purge') ||
    text.startsWith('System Call: Administrator')
  ) {
    featureGuard(event);
  }

  // 4. Access our routes.
  try {
    if (text.startsWith('/schedule')) {
      await taskFunctions.scheduleTask(event);
    }

    if (text.startsWith('/tasks')) {
      await taskFunctions.getScheduledTasks(event);
    }

    if (text.startsWith('/delete')) {
      await taskFunctions.deleteScheduledTask(event);
    }

    if (text.startsWith('/help')) {
      await behaviorFunctions.help(event);
    }

    if (text.startsWith('/leave')) {
      await behaviorFunctions.leave(event);
    }

    if (text.includes('Anzu') || text.includes('anzu')) {
      await behaviorFunctions.anzuSpeaks(event);
    }

    if (text.startsWith('System Call: Purge')) {
      await adminFunctions.purge(event);
    }

    if (text.startsWith('System Call: Administrator')) {
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
