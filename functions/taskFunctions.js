const adminFunctions = require('../functions/adminFunctions');
const { client } = require('../utils/credentialHandler');
const createResponse = require('../utils/createResponse');
const parseNotification = require('../utils/parseNotification');
const Task = require('../models/taskModel');

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

const getSourceId = (event) => {
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

const scheduleTask = async (event) => {
  // Check for all variables.
  const { sourceId, type } = getSourceId(event);
  const userId = event.source.userId || 'no id';

  // 1. Process the input from the user.
  // Example input: '/schedule 2020-12-12 Working from home!'
  const splitText = event.message.text.split(' ');
  const chosenDate = splitText[1];
  const task = splitText.splice(2).join(' ');

  // 2. If there are any errors, resolve the function.
  if (Number.isNaN(Date.parse(chosenDate))) {
    return Promise.resolve(null);
  }

  // 3. Insert all the given data into the database.
  await Task.create({
    sourceId: sourceId,
    name: task,
    deadline: new Date(chosenDate),
    scheduler: userId,
    sourceType: type,
  });

  // 4. Send back response to the user.
  const response = createResponse(
    `Thank you! Your task of '${task}' with the deadline being ${
      new Date(chosenDate).toISOString().split('T')[0]
    } has been created successfully!`
  );

  await client.replyMessage(event.replyToken, response);
};

const getScheduledTasks = async (event) => {
  // Prepare message to reply with.
  let message;

  // 1. Get the current room ID.
  const { sourceId } = getSourceId(event);

  // 2. Fetch all the available tasks for the current room.
  const tasks = await Task.find({ sourceId: sourceId });

  // 3. Sort the tasks based on date for easier reading.
  // Sort from the closest deadline to the furthest deadline!
  tasks.sort((el1, el2) => new Date(el1.deadline) - new Date(el2.deadline));

  // 4. Prettify the tasks.
  const taskDeadlines = [];

  tasks.forEach((e, index) => {
    taskDeadlines.push(parseNotification(e, index + 1));
  });

  if (!tasks) {
    message = 'You have no tasks due!';
  } else {
    message = taskDeadlines.join('\n');
  }

  // 5. Send response back to the user.
  const response = createResponse(
    `Hello everyone! Anzu is here to remind you all of your schedules. Here is it:\n\n${message}\n\nGood luck and stay in high spirits!`
  );

  await client.replyMessage(event.replyToken, response);
};

const deleteScheduledTask = async (event) => {
  // 1. Fetch the name of the task.
  const taskString = event.message.text.split(' ');
  const taskName = taskString.splice(1).join(' ');

  // 2. Delete the task.
  await Task.deleteOne({ name: taskName });

  // 3. Send response to the user.
  const response = {
    type: 'text',
    text: `Task with the name ${taskName} has been deleted!`,
  };

  await client.replyMessage(event.replyToken, response);
};

const help = async (event) => {
  // 1. Simply send a help message.
  const message =
    'Anzu is available for the following commands:\n1. (/schedule <deadline> <job_name>) to schedule your tasks\n2. (/tasks) to show all available tasks\n3. (/delete <job_name>) to delete available tasks in this room\n4. (/help) to spawn the help menu\n5. (/leave) to make me leave (if on a group or multi-chat environment)';

  const response = createResponse(message);

  await client.replyMessage(event.replyToken, response);
};

const leave = async (event) => {
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

const apiCall = async (event) => {
  const { text } = event.message;

  // 0. Check if invalid input, Anzu does not need to respond.
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  try {
    if (text.startsWith('/schedule')) {
      await featureGuard(event);
      return scheduleTask(event);
    }

    if (text.startsWith('/tasks')) {
      return getScheduledTasks(event);
    }

    if (text.startsWith('/delete')) {
      await featureGuard(event);
      return deleteScheduledTask(event);
    }

    if (text.startsWith('/help')) {
      return help(event);
    }

    if (text.startsWith('/leave')) {
      await featureGuard(event);
      return leave(event);
    }

    if (text.includes('Anzu') || text.includes('anzu')) {
      const response = createResponse(
        "Did you call me? I am Anzu, an open source scheduler chatbot created by Nicholas Dwiarto. My creator probably hasn't open sourced me yet, but I believe he will in a while.\n\nHave fun using me and please let me know if you need anything!\n\nUse '/help' (without parentheses) to get started!"
      );

      return await client.replyMessage(event.replyToken, response);
    }

    if (text.startsWith('System Call: Purge')) {
      await featureGuard(event);
      return adminFunctions.purge(event);
    }
  } catch (err) {
    console.error(err);
  }

  return Promise.resolve(null);
};

module.exports = apiCall;
