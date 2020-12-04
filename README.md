# Anzu

Anzu (she/her) is an open source LINE chatbot to remind you of your tasks. Anzu is fully asynchronous and uses JavaScript's natural asynchronous nature to its fullest.

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-%233572A5"/>
  <img src="https://img.shields.io/badge/Pipeline-CicleCI-lightgrey"/>
  <img src="https://img.shields.io/badge/Coded%20with-JavaScript-yellow"/>
</p>

![screenshot](.github/screenshot.png)

## Architecture

- Asynchronous Programming
- Functional Programming
- JavaScript Programming Language
- Shell Scripts and Micro Computers for Automation

## Requirements

You have to have the following to run Anzu.

- Node.js (12.x or up)
- MongoDB (you could use the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) version if you want a database-as-a-service)
- LINE Developers Account (for the API keys)
- Heroku CLI (optional)
- Raspberry Pi with Raspbian OS or Linux machine (optional, for cronjobs)

## Development

Anzu is open source and is under continuous development. Keep in touch by starring this repository!

## How to Use

If you have no desire to deploy your own but want to test the functionalities of the chatbot, [feel free to add Anzu as one of your friends in LINE](https://line.me/R/ti/p/@087wqrja). However, please remember that Anzu is still in the development version, so you cannot schedule, delete, or do anything with the bot for now. You can only add her as a friend and probably do a few things.

As an alternative, you could deploy her by yourselves. You can use Anzu by inviting her to a room or a group, or by simply chatting her and using the available commands, explained in the next section.

## Command List

Anzu is available for the following commands.

- `/schedule <deadline> <job_name>` to schedule your tasks.
- `/tasks` to show all available tasks.
- `/delete <job_name>` to delete available tasks in the current environment (room / group / personal).
- `/reschedule <new_deadline> <job_name>` is used to reschedule a task in an environment.
- `/help` to spawn the help menu.
- `/leave` to make Anzu leave.

Several administrator commands are also available for testing the bot.

- `System Call: Purge` is used to clear the whole database.
- `System Call: Administrator` is used to check if the user saying that passphrase is an administrator or not.
- `System Call: Delete Expired` is used to delete all expired tasks, manually.
- `System Call: Local Deletion` is used to delete all tasks in an environment.

Anzu comes with several error-handling methods. It is impossible to create a task whose deadline is less than the current date. Deleting tasks that does not exist in the current environment that Anzu is in is also impossible. Refer below for usage examples.

### Example Usage

Following are the example usage of Anzu.

- `/schedule 2020-12-20 Work on CI/CD pipeline` will return successfully (assuming that the current date is less than `2020-12-20`).
- `/schedule 1234567890` will fail as it is not a valid date.
- `/schedule 1970-01-01 Linux Epoch Time` will fail as it is less than the current date.
- `/delete randomJob` will fail if `randomJob` does not exist in the current group, room, or personal environment.
- `/reschedule 2021-01-01 First day of new year` will return successfully if `First day of new year` task exists in the environment, and assuming the date is less than `2021-01-01`. The date validation also works here.

## Project Structure

The project is structured as follows:

- `.circleci` for CircleCI pipeline integration.
- `.github` for repository related files.
- `auto` for the automatic ping script (CRON).
- `functions` to store the essential functions.
- `models` to store NoSQL data models.
- `responses` to store Anzu's responses.
- `routes` to process Anzu's commands.
- `utils` for utility functions.
- `.eslintrc.json`, `.prettierrc` are for linting and prettifying the code.
- `app.js`, `server.js` are for starting the application.
- `app.json`, `Procfile` are Heroku configuration files.
- `package.json`, `package-lock.json` are Node.js dependency manager.
- The rest (`.gitignore`, `LICENSE`, `CONTRIBUTING.md`, `README.md`) are your usual GitHub documents.

## How to Install

In order to run Anzu in your own web server, following steps must be done.

- Before we do anything else, you must make a LINE Developers Account and issue yourself a `CHANNEL_ACCESS_TOKEN` and `CHANNEL_SECRET` API keys. You could follow the instructions at [LINE Developers's official site](https://developers.line.biz/en/).

- Create a LINE Official Account and take note that it takes a webhook URL.

- Don't forget to disable all of the auto-response and greeting messages, as they have already been programmed in the application.

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

If you want to use the production version (everyone can schedule tasks, delete tasks, enable long reminders, etcetera), make sure to use the `web/production` (from `Procfile`) process in the Heroku dyno settings.

The default dyno process is `web`, and it will run `npm start`.

As an alternative to deployment, simply click the following button.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/lauslim12/Anzu)

After deploying the application, put the URL of your deployed application into your LINE Official Account webhook. Doing that solves the deployment. Feel free to add the LINE account to use your own personal LINE scheduler! Don't forget to chat or invite her to a group / room!

## Automated Cron Setup

Cron is used to schedule timers of when Anzu would remind its users about tasks to be done. Like a true scheduler bot, cronjobs are run at the following times (GMT +7 time):

- 01:00 (to clean up expired tasks)
- 17:00 (to remind a user / group / room about a task)

If you have a paid LINE subscription, you can add more reminders. However, as I am stuck with the free version, I'll keep them at two reminders per day.

A note to keep in mind that if there are no expired tasks, Anzu will not notify anything at 01:00. This is done so that the bandwith is not wasted. Another thing to note is that by default, this application uses the compact reminder function for the schedulers (refer to `functions/scheduleFunctions`).

We have to take into consideration that Heroku free dynos sleep every 30 minutes when our application is not running. When our application is sleeping, the cronjobs made with `node-cron` **will not run**.

In order to circumvent the above case, we are going to use cronjobs to ping the Heroku server, so that it will wake up before the cronjobs start.

- You can change the time and the timezone of the cronjob by changing the code according to the cron syntax. Here is an [excellent site](https://crontab.guru/) that describes the cron syntax.

```bash
crontab -l
crontab -e
```

- The reason the crontab is setup like this is so that it gives Heroku time to prepare before running the cronjobs made with `node-cron`. We just need to ping the webserver (a small `GET` request) so that it wakes up.

```bash
55 00 * * * cd "$HOME/Anzu/auto" && bash main.sh <link_to_webserver>
55 16 * * * cd "$HOME/Anzu/auto" && bash main.sh <link_to_webserver>
```

- In order to check if our crontab had run successfully, we could use the following command.

```bash
sudo grep CRON /var/log/syslog
```

- As an additional note, you might want to setup SSH into your Git, as I have programmed it to always pull from the latest repository everytime the `main.sh` shell script is launched. Don't forget to set the `origin` URL.

```bash
cd $HOME
ssh-keygen -t rsa -b 4096 -C <your_github_email>
cd .ssh
ls -a             # Check out your RSA '.pub' name.
cat id_rsa.pub    # The default identifier is 'id_rsa'. You probably have a different identifier.

# Then, configure your access keys with your GitHub configuration. After that, test your connection.
ssh -T git@github.com
git remote set-url origin git+ssh://git@github.com/username/reponame.git
```

## Contribution

Anzu is completely open source and contribution to this tool is highly encouraged for everyone! Please take a look at `CONTRIBUTING.md` file and enjoy contributing! Still, please be aware to always lint and prettify your code. I have even included them in the NPM scripts.

```bash
npm run prettier
npm run lint
```

If you have found any issues during your usage of this program, please submit an issue and I'll go back to you right away.

## License

This application is licensed under MIT License. Please see the `LICENSE` file for more information.

## Credits

I hereby offer thanks and credits to the following services and providers:

- [LINE Developers](https://developers.line.biz/en/) for the API and LINE Services.

Feel free to cite everything from this repository, as long as you give your credit. Anzu is not related in any way, shape, or form to my work or my research. Anzu is just a personal interest turned open source.
