# Automation Setup

Cron is used to schedule timers of when Anzu would remind its users about tasks to be done and times of when Anzu would delete expired tasks. Cronjobs are run by default at the following times (GMT +7 time):

- 01:00 (to clean up expired tasks)
- 17:00 (to remind a user / group / room about a task)

You can change the timezone and the number of times you want to be reminded by editing the configuration file at `constants/constants.ts`.

If you have a paid LINE subscription, you can add more reminders. However, as I am stuck with the free version, I'll keep them at two reminders per day.

A note to keep in mind that if there are no expired tasks, Anzu will not notify anything at 01:00. This is done so that the bandwith is not wasted. Another thing to note is that by default, this application uses the long reminder function for the schedulers (refer to `functions/scheduleFunctions`).

## Automation Considerations

We have to take into consideration that Heroku free dynos sleep every 30 minutes when our application is not running. When our application is sleeping, the cronjobs made with `node-cron` **will not run**.

In order to circumvent the above case, we are going to use cronjobs to ping the Heroku server, so that it will wake up before the cronjobs start.

- You can change the time and the timezone of the cronjob by changing the code according to the cron syntax. Here is an [excellent site](https://crontab.guru/) that describes the cron syntax.

```bash
crontab -l
crontab -e
```

- The reason the crontab is setup like this is so that it gives Heroku time to prepare before running the cronjobs made with `node-cron`. We just need to ping the webserver (a small `GET` request) so that it wakes up.

```bash
55 00 * * * cd "$HOME/Anzu/auto" && bash ping-webserver.sh <link_to_webserver>
55 16 * * * cd "$HOME/Anzu/auto" && bash ping-webserver.sh <link_to_webserver>
```

- In order to check if our crontab had run successfully, we could use the following command.

```bash
sudo grep CRON /var/log/syslog
```

## Additional Configurations

- This part is optional. You might want to setup SSH into your Git, as I also have a script named `keep-track.sh` to always pull from the latest remote repository to keep my local repository updated. Don't forget to set the `origin` URL.

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

- You can run `keep-track.sh` by using the following cronjobs. In this example, I run the script everyday at 09:00 AM.

```bash
00 09 * * * cd "$HOME/Anzu/auto" && bash keep-track.sh
```
