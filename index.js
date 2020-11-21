/**
 * TODO:
 * 1. Wrap functions in an 'asyncHandler'.
 * 2. Make it so the functions are more modular.
 * 3. The 'startsWith' function call is still dirty.
 * 4. Upgrade to TypeScript for easier maintenance.
 */

// Global Imports.
const express = require('express');
const line = require('@line/bot-sdk');
const mongoose = require('mongoose');

// Personal Functions.
// const groupController = require('./functions/groupController');
const Task = require('./models/taskModel');

// should be in env
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const client = new line.Client(config);
const app = express();

const parseParams = async (event) => {
  try {
    const { text } = event.message;

    if (text.startsWith('/schedule')) {
      if (!event.source.userId !== process.env.ADMIN_USER_ID) {
        const response = {
          type: 'text',
          text:
            'Sorry, Anzu does not accept orders from anyone other than Nicholas Dwiarto. Please ask him instead.',
        };

        return client.replyMessage(event.replyToken, response);
      }
      return scheduleTask(event);
    } else if (text.startsWith('/tasks')) {
      return getScheduledTasks(event);
    }
  } catch (err) {
    console.log(err);
  }
};

const scheduleTask = async (event) => {
  try {
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
    if (isNaN(Date.parse(chosenDate))) {
      return Promise.resolve(null);
    }

    // 3. Insert all the given data into the database.
    await Task.create({
      groupId: roomId,
      name: task,
      deadline: new Date(chosenDate),
    });

    // 4. Send back response to the user.
    const response = {
      type: 'text',
      text: `Thank you! Your task of '${task}' with the deadline being ${
        new Date(chosenDate).toISOString().split('T')[0]
      } has been created successfully!`,
    };

    return client.replyMessage(event.replyToken, response);
  } catch (err) {
    console.log(err);
  }
};

const parseNotification = (e) => {
  if (!e) {
    return;
  }

  const deadline = new Date(e.deadline).getDate();
  const currentTime = new Date(Date.now()).getDate();
  const differenceInDays = deadline - currentTime;
  const formattedTime = new Date(e.deadline).toISOString().split('T')[0];

  return `${e.task} (Deadline: ${formattedTime} — ${differenceInDays} days)`;
};

const getScheduledTasks = async (event) => {
  try {
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
    const response = {
      type: 'text',
      text: `Hello everyone! Anzu is here to remind you all of your schedules. Here is it:\n${message}\nGood luck and stay in high spirits!`,
    };

    return client.replyMessage(event.replyToken, response);
  } catch (err) {
    console.log(err);
  }
};

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connection successfull! 🔥');
  })
  .catch((err) => {
    console.log('Error found with code:', err);
  });

app.get('/', async (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'Connected successfully!',
  });
});

app.post('/anzu', line.middleware(config), (req, res) => {
  // 1. Process the input in 'scheduleTask' function.
  Promise.all(req.body.events.map(parseParams))
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

app.listen(PORT, () => {
  console.log(`Application running on Express.js (Port: ${PORT})! 👍`);
});
