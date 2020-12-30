# Commands

In this repository, `environment` means either personal chat, group, or room. It is used to define the 'location' that the bot is currently receiving commands from. Please remember that all commands are **case sensitive** and a single message can only contain **a single command** (e.g. you cannot perform two schedules in a single message).

Example of a **wrong command:**

```text
/schedule 2021-01-01 Job One /schedule 2021-01-01 Job Two
```

Above command will return a single job named `Job One /schedule 2021-01-1 Job Two`! That is why it is important to only use a single command in a single message.

Check all available commands by clicking one of these links.

- [Admin Commands](commands/admin-commands)
- [Behavior Commands](commands/behavior-commands)
- [Error Handling](commands/error-commands)
- [Task Commands](commands/task-commands)
