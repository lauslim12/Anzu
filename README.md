# Anzu

Anzu (she/her) is an open source LINE chatbot to remind you of your tasks. Anzu is fully asynchronous and uses JavaScript's natural asynchronous nature to its fullest.

## Requirements

You have to have the following to run Anzu.

- Node.js (12.x or up)
- MongoDB (you could use the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) version if you want a database-as-a-service)
- LINE Developers Account (for the API keys)
- Heroku CLI (optional)
- Raspberry Pi with Raspbian OS or Linux machine (optional, for cronjobs)

## How to Run

In order to run Anzu in your own web server, following steps must be done.

- Before we do anything else, you must make a LINE Developers Account and issue yourself a `CHANNEL_ACCESS_TOKEN` and `CHANNEL_SECRET` API keys. You could follow the instructions at [LINE Developers's official site](https://developers.line.biz/en/).

- The next thing that you should do is that you must make yourself a MongoDB connection string to be used. I recommend you to use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), a Database as a Service. Get your connection string and we are going to use it in the `DATABASE`, `DATABASE_PASSWORD`, and `DATABASE_USERNAME` environment variable.

- We'll start by initializing our repository. First off, fork and clone the repository. I am going to assume that you would clone the repository into the `$HOME` directory.

```bash
git clone https://github.com/lauslim12/Anzu.git
cd $HOME/Anzu
```

- Second, install the repository.

```bash
npm install
```

- Third, install it to your web server.

- Fourth, setup your environment variables, according to the `app.json` file.

## Deployment

As per [LINE Guidelines](https://developers.line.biz/en/docs/messaging-api/building-bot/), it is impossible to run the application locally, as LINE Webhook requires HTTPS with a valid SSL/TLS certificate issued by a certified authority.

As a way to deploy the application, we could use a PaaS (Platform as a Service) provider such as Heroku. You could follow the following procedures to setup Anzu quickly.

```bash
heroku create
git push heroku master
heroku config:set KEY=VALUE (refer to app.json for all environment variables)
heroku open
```

Or simply click the following button.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/lauslim12/Anzu)

## Automated CRON Setup

Cronjobs are run at 02:00 (to clean up expired tasks), 08:00 (to remind a user / group / room about a task), and 17:00 (to remind a user / group / room about a task). We have to take into consideration that Heroku free dynos sleep every 30 minutes when our application is not running. When our application is sleeping, the cronjobs made with `node-cron` **will not run**.

In order to circumvent the above case, we are going to use cronjobs to ping the Heroku server, so that it will wake up before the cronjobs start.

- You can change the time and the timezone of the cronjob by changing the code according to the cron syntax. Here is an [excellent site](https://crontab.guru/) that describes the cron syntax.

```bash
crontab -l
crontab -e
```

- The reason the crontab is setup like this is so that it gives Heroku time to prepare before running the cronjobs made with `node-cron`. We just need to ping the webserver (a small `GET` request) so that it wakes up.

```bash
55 01 * * * cd "$HOME/Anzu/auto" && bash main.sh <link_to_webserver>
55 07 * * * cd "$HOME/Anzu/auto" && bash main.sh <link_to_webserver>
55 16 * * * cd "$HOME/Anzu/auto" && bash main.sh <link_to_webserver>
```

- In order to check if our crontab had run successfully, we could use the following command.

```bash
sudo grep CRON /var/log/syslog
```

## TODO

- Make an environment variable that stores the bot name.
- Make an argument parser that is used to disable or enable protected routes.
- Add a `LICENSE`, and `CONTRIBUTING`, as a file, and as a reference in this documentation.
- Add a `Credits`, `Development`, `Architecture`, `Contribution`, `Commands List` and `Project Structure` in this `README.md` file for documentation.
- Add screenshots for the repository.
- Create a function to group all of the output in the `responses` folder for easier maintainability.
