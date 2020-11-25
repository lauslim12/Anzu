# Anzu

Anzu (she/her) is an open source LINE chatbot to remind you of your tasks. Anzu is fully asynchronous and uses JavaScript's natural asynchronous nature to its fullest.

Picture here.

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

## Command List

Anzu is available for the following commands.

- `/schedule <deadline> <job_name>` to schedule your tasks.
- `/tasks` to show all available tasks.
- `/delete <job_name>` to delete available tasks in the current environment (room / group / personal).
- `/help` to spawn the help menu.
- `/leave` to make Anzu leave.

Anzu comes with several error-handling methods. It is impossible to create a task whose deadline is less than the current date. Deleting tasks that does not exist in the current environment that Anzu is in is also impossible. Refer below for usage examples.

### Example Usage

Following are the example usage of Anzu.

- `/schedule 2020-12-20 Work on CI/CD pipeline` will return successfully (assuming that the current date is less than `2020-12-20`).
- `/schedule 1234567890` will fail as it is not a valid date.
- `/schedule 1970-01-01 Linux Epoch Time` will fail as it is less than the current date.
- `/delete randomJob` will fail if `randomJob` does not exist in the current group, room, or personal environment.

## How to Install

In order to run Anzu in your own web server, following steps must be done.

- Before we do anything else, you must make a LINE Developers Account and issue yourself a `CHANNEL_ACCESS_TOKEN` and `CHANNEL_SECRET` API keys. You could follow the instructions at [LINE Developers's official site](https://developers.line.biz/en/).

- Create a LINE Official Account and take note that it takes a webhook URL.

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

After deploying the application, put the URL of your deployed application into your LINE Official Account webhook. Doing that solves the deployment. Feel free to add the LINE account to use your own personal LINE scheduler!

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
55 11 * * * cd "$HOME/Anzu/auto" && bash main.sh <link_to_webserver>
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

## TODO

- Make an environment variable that stores the bot name.
- Make an argument parser that is used to disable or enable protected routes.
- ~~Add a `LICENSE`, and `CONTRIBUTING`, as a file, and as a reference in this documentation.~~
- Add a `Credits`, `Development`, `Architecture`, `Contribution`, `Commands List` and `Project Structure` in this `README.md` file for documentation.
- Add screenshots for the repository.
- ~~Create a function to group all of the output in the `responses` folder for easier maintainability.~~
