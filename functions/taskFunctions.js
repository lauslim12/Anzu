const line = require('@line/bot-sdk');
const Task = require('../models/taskModel');
const createResponse = require('../utils/createResponse');
const parseNotification = require('../utils/parseNotification');

// Global Variables.
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const client = new line.Client(config);

const featureGuard = async (event) => {
  if (event.source.userId !== process.env.ADMIN_USER_ID) {
    const response = {
      type: 'text',
      text:
        'Sorry, Anzu does not accept orders from anyone other than Nicholas Dwiarto. Please ask him instead.',
    };

    return await client.replyMessage(event.replyToken, response);
  }
};

const scheduleTask = async (event) => {
  // Check for all variables.
  const { roomId } = event.source;

  // 0. Check if invalid input, Anzu does not need to respond.
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  // 1. Process the input from the user.
  // Example input: '/schedule 2020-12-12 Working from home!'
  if (!event.message.text.startsWith('/schedule')) {
    return Promise.resolve(null);
  }

  const splitText = event.message.text.split(' ');
  const chosenDate = splitText[1];
  const task = splitText.splice(2).join(' ');

  // 2. If there are any errors, resolve the function.
  if (Number.isNaN(Date.parse(chosenDate))) {
    return Promise.resolve(null);
  }

  // 3. Insert all the given data into the database.
  await Task.create({
    groupId: roomId,
    name: task,
    deadline: new Date(chosenDate),
  });

  // 4. Send back response to the user.
  const response = createResponse(
    `Thank you! Your task of '${task}' with the deadline being ${
      new Date(chosenDate).toISOString().split('T')[0]
    } has been created successfully!`
  );

  return await client.replyMessage(event.replyToken, response);
};

const getScheduledTasks = async (event) => {
  // 1. Get the current room ID.
  const { roomId } = event.source;

  // 2. Check for input.
  if (!event.message.text.startsWith('/tasks')) {
    return Promise.resolve(null);
  }

  // 3. Fetch all the available tasks for the current room.
  const tasks = await Task.find({ groupId: roomId });

  // 4. Prettify the tasks.
  const taskDeadlines = [];

  tasks.forEach((e) => {
    taskDeadlines.push(parseNotification(e));
  });

  const message = taskDeadlines.join('\n');

  // 5. Send response back to the user.
  const response = createResponse(
    `Hello everyone! Anzu is here to remind you all of your schedules. Here is it:\n\n${message}\n\nGood luck and stay in high spirits!`
  );

  return await client.replyMessage(event.replyToken, response);
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

  return await client.replyMessage(event.replyToken, response);
};

const help = async (event) => {
  // 1. Simply send a help message.
  const message =
    'Anzu is available for the following commands:\n1. (/schedule <deadline> <job_name>) to schedule your tasks\n2. (/tasks) to show all available tasks\n3. (/delete <job_name>) to delete available tasks in this room.';

  const response = createResponse(message);

  return await client.replyMessage(event.replyToken, response);
};

const leave = async (event) => {
  const { roomId } = event.source;
  const message =
    'Thank you for using me! I will be taking my leave now. Bye-bye!';
  const response = createResponse(message);

  await client.replyMessage(response);

  return await client.leaveRoom(roomId);
};

const apiCall = async (event) => {
  const { text } = event.message;

  if (text.startsWith('/schedule')) {
    featureGuard(event);
    return scheduleTask(event);
  }

  if (text.startsWith('/tasks')) {
    return getScheduledTasks(event);
  }

  if (text.startsWith('/delete')) {
    featureGuard(event);
    return deleteScheduledTask(event);
  }

  if (text.startsWith('/help')) {
    return help(event);
  }

  if (text.startsWith('/leave')) {
    featureGuard(event);
    return leave(event);
  }

  if (text.includes('Anzu') || text.includes('anzu')) {
    const response = createResponse(
      "Did you call me? I am Anzu, an open source scheduler chatbot created by Nicholas Dwiarto. My creator probably hasn't open sourced me yet, but I believe he will in a while. Have fun using me and please let me know if you need anything! Use '/help' (without parentheses) to get started!"
    );
    return client.replyMessage(event.replyToken, response);
  }

  return Promise.resolve(null);
};

module.exports = apiCall;
