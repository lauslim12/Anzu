// Global Imports.
const cron = require('node-cron');
const express = require('express');
const line = require('@line/bot-sdk');
const mongoose = require('mongoose');

// Personal Functions.
const apiCall = require('./functions/taskFunctions');
const scheduleFunctions = require('./functions/scheduleFunctions');

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

// CRON Setup.
// Every day, at 02:00, delete every expired schedules.
cron.schedule(
  '00 02 * * *',
  async () => {
    await scheduleFunctions.cleanUpExpiredSchedules();
  },
  {
    scheduled: true,
    timezone: 'Asia/Jakarta',
  }
);

// Every day, at 08:00, send a reminder to the groups that Anzu is in.
cron.schedule(
  '00 08 * * *',
  async () => {
    await scheduleFunctions.reminder();
  },
  {
    scheduled: true,
    timezone: 'Asia/Jakarta',
  }
);

// Every day, at 17:00, send a reminder to the groups that Anzu is in.
cron.schedule(
  '00 17 * * *',
  async () => {
    await scheduleFunctions.reminder();
  },
  {
    scheduled: true,
    timezone: 'Asia/Jakarta',
  }
);

// Database Connection.
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    /* eslint-disable no-console */
    console.log('MongoDB connection successfull! 🔥');
    /* eslint-enable no-console */
  })
  .catch((err) => {
    /* eslint-disable no-console */
    console.log('Error found with code:', err);
    /* eslint-enable no-console */
  });

// Routes.
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
  } catch (error) {
    return res.status(500).json({
      status: 'success',
      error,
    });
  }
});

// Start the application.
app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Application running on Express.js (Port: ${PORT})! 👍`);
  /* eslint-enable no-console */
});
