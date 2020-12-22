/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Third party imports.
import mongoose from 'mongoose';
import app from './application';

// Personal Functions.
import initializeCron from './functions/scheduleFunctions';

// Handle uncaught exceptions. Happens synchronously!
process.on('uncaughtException', (err) => {
  console.log('Unhandled exception 💥! Application shutting down!');
  console.log(err.name, err.message);
  process.exit(1);
});

// Server Setup and Global Variables.
const PORT = process.env.PORT || 3000;

// CRON Setup.
initializeCron();
console.log('Cronjobs setup successfully!');

// Database Connection.
mongoose
  .connect(process.env.DATABASE, {
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
process.on('unhandledRejection', (err: any) => {
  console.log('Unhandled rejection 💥! Application shutting down!');
  console.log(err.name, err.message);

  // Finish all requests that are still pending, the shutdown gracefully.
  server.close(() => {
    process.exit(1);
  });
});
