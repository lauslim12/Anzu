// Global Imports.
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

// Personal Functions.
const apiRoutes = require('./routes/apiRoutes');
const { getAllResponsesInApplication } = require('./utils/responseHelper');
const { lineMiddleware } = require('./utils/credentialHandler');

// Top level code, fetch all the responses synchronously for easier handling (load-balancing).
getAllResponsesInApplication();

// Application Setup.
const app = express();

// Middleware Setup.
app.use(cors());
app.use(helmet());
app.use(compression());

// Routes.
app.get('/', async (_, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'Connected successfully!',
  });
});

app.post('/anzu', lineMiddleware, async (req, res) => {
  const requestEvents = req.body.events;

  // The 'try-catch' block here is used for asynchronous error handling,
  // and to ensure that the 'map' function does not end when one process fails.
  try {
    const result = await Promise.all(
      requestEvents.map(async (event) => {
        try {
          return await apiRoutes(event);
        } catch (err) {
          /* eslint-disable no-console */
          console.error(err);
          /* eslint-enable no-console */
        }
      })
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
