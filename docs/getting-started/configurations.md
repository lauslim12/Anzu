# Configurations

Anzu comes with several configurations located at the `constants/constants.ts` file. Each of the values will do as follows.

- `botName` is the default name of the bot. This can be changed, but currently it does nothing.
- `disableAdministrator` is set by default to `true`. If this configuration is set to `false`, then the bot will allow anyone in the environment to schedule, finish, delete, and reschedule tasks. This flag also allows anyone to 'kick' or make the bot leave. `System Call`s are still restricted to administrators.
- `enableLongReminders` is set by default to `true`. This configuration will cause the bot to send a reminder of all tasks in the current environment, instead of telling everyone in the current environment to use `/tasks`.
- `timezone` is to set the bot timezone. The default is `Asia/Jakarta`. You can change this by looking at the `node-cron` documentation [here](https://github.com/node-cron/tz-offset/blob/master/generated/offsets.json). Change the `Asia/Jakarta` to a valid timezone.
- `cleanUpSchedules` is an array that will take _n_ values of cron syntaxes. This variable will be used to determine how many times and when the clean up routine will occur. The default is `['00 01 * * *']`.
- `reminderSchedules` is an array that will take _n_ values of cron syntaxes. This variable will be used to determine how many times and when the reminder routine will occur. The default is `['00 17 * * *']`.

You can change the `cleanUpSchedules` and the `reminderSchedules` of the bot by changing the value according to the cron syntax. Here is an [excellent site](https://crontab.guru/) that describes the cron syntax.

Values above are frozen by default and will not be able to be changed at runtime. You have to restart your bot and rewrite the variables for the changes to take effect.

As a friendly reminder, remember that a free LINE Developers Account can only send 500 push messages per month. You might want to consider this before setting the `reminderSchedules` variable.
