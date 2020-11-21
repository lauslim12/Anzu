const express = require('express');
const line = require('@line/bot-sdk');
const mongoose = require('mongoose');

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

async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  const response = {
    type: 'text',
    text: 'Hello! Anzu is saying hello world to you!',
  };

  return client.replyMessage(event.replyToken, response);
}

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
    console.log(req.body.events);
    const results = await Promise.all(req.body.events.map(handleEvent));

    return res.status(200).json({
      status: 'success',
      data: results,
    });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log(`'Application running on Express.js (Port: ${PORT})! 👍`);
});
