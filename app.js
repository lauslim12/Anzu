// Global Imports.
const cron = require('node-cron');
const express = require('express');

// Personal Functions.
const apiCall = require('./functions/taskFunctions');
const { lineMiddleware } = require('./utils/credentialHandler');
const scheduleFunctions = require('./functions/scheduleFunctions');

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

// Routes.
app.get('/', async (_, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'Connected successfully!',
  });
});

app.post('/anzu', lineMiddleware, async (req, res) => {
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

module.exports = app;
