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
    const splitText = event.message.text.split(' ');
    const command = splitText[0];
    const chosenDate = splitText[1];
    const task = splitText.splice(2).join(' ');

    console.log(splitText, command, chosenDate, task);

    // 2. If there are any errors, resolve the function.
    if (command !== '/schedule' || command !== '/tasks') {
      return Promise.resolve(null);
    }

    if (isNaN(Date.parse(chosenDate))) {
      return Promise.resolve(null);
    }

    // 3. Insert all the given data into the database.
    // const newTask = await Task.create({
    //   groupId: roomId,
    //   name: task,
    //   deadline: new Date(chosenDate),
    // });

    // console.log(newTask);

    // 4. Send back response to the user.
    const response = {
      type: 'text',
      message: `Thank you! Your task of '${task}' with the deadline being ${
        new Date(chosenDate).toISOString().split('T')[0]
      } has been created successfully!`,
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

app.post('/anzu', line.middleware(config), async (req, res) => {
  try {
    // 1. Process the input in 'scheduleTask' function.
    const results = await Promise.all(req.body.events.map(scheduleTask));

    // 2. Get the results.
    res.status(200).json({
      status: 'success',
      data: results,
    });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log(`Application running on Express.js (Port: ${PORT})! 👍`);
});
