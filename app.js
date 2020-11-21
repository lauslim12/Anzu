/**
 * TODO:
 * 1. Wrap functions in an 'asyncHandler'.
 * 2. Make it so the functions are more modular.
 * 3. The 'startsWith' function call is still dirty.
 * 4. Upgrade to TypeScript for easier maintenance.
 * 5. Scheduler (routine cleanup and announcement).
 * 6. Group and Room ID.
 * 7. No duplicate tasks.
 */

// Global Imports.
const express = require('express');
const line = require('@line/bot-sdk');
const mongoose = require('mongoose');

// Personal Functions.
const apiCall = require('./functions/taskFunctions');

// should be in env
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// Global Variables.
const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// Application Setup.
const app = express();

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
  const requestEvents = req.body.events;

  try {
    const result = await Promise.all(
      requestEvents.map(async (event) => await apiCall(event))
    );

    return res.status(200).json({
      status: 'success',
      result,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'success',
      error: err,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Application running on Express.js (Port: ${PORT})! 👍`);
});
