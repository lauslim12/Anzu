# Requirements

In order to run Anzu, several prerequisites have to be met.

- NPM (6.x or up)
- Node.js (14.x or up for LTS, which is what I use, but 12.x is also possible)
- MongoDB (you could use the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) version if you want a database-as-a-service)
- LINE Developers Account (for the API keys)

Optionally, you could also install the following tools to help you with deployment.

- Heroku CLI
- Raspberry Pi with Raspbian OS or any Linux machine

Raspberry Pi / Linux is needed because Heroku does not support 24/7 uptime without paying for a premium account. The Linux is only used for cronjobs so the schedulers set in the bot will run on time.
