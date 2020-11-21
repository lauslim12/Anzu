const line = require('@line/bot-sdk');
const express = require('express');

// should be in env
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const PORT = process.env.PORT || 3000;
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

app.post('/anzu', line.middleware(config), async (req, res) => {
  try {
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
  console.log(`Application is live on port ${PORT}!`);
});
