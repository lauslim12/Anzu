// Global Imports.
const express = require('express');

// Personal Functions.
const apiRoutes = require('./routes/apiRoutes');
const { lineMiddleware } = require('./utils/credentialHandler');

// Application Setup.
const app = express();

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
      requestEvents.map(async (event) => await apiRoutes(event))
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
