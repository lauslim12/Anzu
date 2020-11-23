/* eslint-disable no-console */
// Third party imports.
const mongoose = require('mongoose');

// Handle uncaught exceptions. Happens synchronously!
process.on('uncaughtException', (err) => {
  console.log('Unhandled exception 💥! Application shutting down!');
  console.log(err.name, err.message);
  process.exit(1);
});

// Server Setup.
const app = require('./app');

// Global Variables.
const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
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
    console.log('MongoDB connection successfull! 🔥');
  })
  .catch((err) => {
    console.log('Error found with code:', err);
  });

// Start the application.
const server = app.listen(PORT, () => {
  console.log(`Application running on Express.js (Port: ${PORT})! 👍`);
});

// Handle unhandled rejections --- the middleware stack will end here.
process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection 💥! Application shutting down!');
  console.log(err.name, err.message);

  // Finish all requests that are still pending, the shutdown gracefully.
  server.close(() => {
    process.exit(1);
  });
});
