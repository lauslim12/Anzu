# Installation

To install Anzu, follow the following procedures.

## Prerequisite

You are going to need some of these variables as environment variables.

- `ADMIN_USER_ID`, gained after adding the bot as a friend after activating the application. For the first time, just set this one to a random value.
- `CHANNEL_ACCESS_TOKEN`, which is your LINE Developers Account API Key to activate the channel webhook.
- `CHANNEL_SECRET`, which is your LINE Developers Account Secret Key to authorize your application.
- `DATABASE`, which is your MongoDB connection string, in the format of `mongodbserver://USERNAME:PASSWORDrandommongodbstring/DATABASENAME?randommongodbstring`.

## Account Setup

- Before we do anything else, you must make a LINE Developers Account and issue yourself a `CHANNEL_ACCESS_TOKEN` and `CHANNEL_SECRET` API keys. You could follow the instructions at [LINE Developers's official site](https://developers.line.biz/en/).

- Create a LINE Official Account and take note that it takes a webhook URL.

- Don't forget to disable all of the auto-response and greeting messages, as they have already been programmed in the application.

- The next thing that you should do is that you must make yourself a MongoDB connection string to be used. I recommend you to use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), a Database as a Service. Get your connection string and we are going to use it in the `DATABASE` environment variable. Make sure that you resolve the whole connection string (fill the `<password>` and the `<dbname>`).

- An example of the 'resolved' connection string would be like this: `mongodbserver://USERNAME:PASSWORDrandommongodbstring/DATABASENAME?randommongodbstring`.

## Repository Setup

- We'll start by initializing our repository. First off, fork and clone the repository. I am going to assume that you would clone the repository into the `$HOME` directory.

```bash
git clone https://github.com/lauslim12/Anzu.git
cd $HOME/Anzu
```

Now, the next step diverges, if you want to install the application in your own webserver, follow the next section. If you want to install the application in a Heroku provider, skip this section and continue to the next section. Remember that as per [LINE Guidelines](https://developers.line.biz/en/docs/messaging-api/building-bot/), it is impossible to run the application locally, as LINE Webhook requires HTTPS with a valid SSL/TLS certificate issued by a certified authority.

## Installing Anzu in a Personal Webserver

- Install the repository to your web server.

```bash
npm install
```

- Build the application first.

```bash
npm run build
```

- Setup your environment variables, according to the `app.json` file.

```bash
export ADMIN_USER_ID=YOUR_LINE_USERID
export CHANNEL_ACCESS_TOKEN=YOUR_CHANNEL_ACESS_TOKEN
export CHANNEL_SECRET=YOUR_CHANNEL_SECRET_TOKEN
export DATABASE=YOUR_DATABASE_RESOLVED_CONNECTION_STRING
```

- The `ADMIN_USER_ID` is not your LINE ID, but is a randomly generated ID by the bot. This ID will be given after you added the bot as a friend. Check out your MongoDB Atlas!

## Installing Anzu as a Heroku Application

As an alternative way to deploy the application, we could use a PaaS (Platform as a Service) provider such as Heroku. You could follow the following procedures to setup Anzu quickly. I am going to assume that you are already in the `Anzu` folder.

```bash
git init
heroku create
git add .
git commit -m "Deploying Anzu to Heroku"
git push heroku master
heroku config:set KEY=VALUE (refer to app.json for all environment variables)
heroku open
```

You do not need to build the application first. Heroku does that automatically for you.

If you want to use the production version (everyone can schedule tasks, delete tasks, enable long reminders, etcetera), make sure to change the `constants/constants.ts` file! You can enable long reminders (so Anzu displays the unfinished tasks instead of prompting you to use `/tasks`) or disable the administrator guard, which means that everyone in the environment can create, delete, or reschedule tasks.

The default dyno process is `web`, and it will run `npm start`.

As an alternative to deployment, simply click the following button.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/lauslim12/Anzu)

## Post-Deployment

After deploying the application, put the URL of your deployed application into your LINE Official Account webhook and enable Webhooks. Doing that solves the deployment.

Next step, don't forget to change the [configuration file](configurations.md) to your personal preferences! Don't forget to push Anzu again to the latest repository on your webserver or Heroku, or else the changes will not be reflected.

Feel free to add the LINE account to use your own personal LINE scheduler! Don't forget to chat or invite her to a group / room!
