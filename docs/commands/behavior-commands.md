# Behavior Commands

Following are the list of behavior commands usable with Anzu. Behavior in this case has the meaning of bot behavior when responding to certain events other than the `message` event, such as `join`, and `follow`. Some of commands, namely `help`, and `leave` are also considered 'behavior' commands as they control Anzu's behavior.

## Added / Follow

Anzu will automatically reply with the following message if you added her as a friend.

### Response

```text
Hi! Thank you for adding me, Anzu, as your personal group chat bot!

I am open source! Check out my source code at this link: https://github.com/lauslim12/Anzu!

You can start using me by typing '/help' and/or inviting me to a group or a chat room. See ya later!
```

## Anzu Speaks

If Anzu is mentioned anytime in the chat, then she will respond with the following message.

### Example Usage

```text
Anzu
anzu
Hi Anzu!
Hello anzu!
```

### Response

```text
Hello! Did you call me? I am Anzu, an open source scheduler chatbot created by Nicholas Dwiarto.

I am fully open source! My source code is available on GitHub (https://github.com/lauslim12/Anzu).

If you find any issues, please submit an issue at the link above. My creator also accepts open source contributions!

Have fun using me and please let me know if you need anything!

Use '/help' (without parentheses) to get started!
```

## `/help`

This command is used to spawn the help menu.

### Example Usage

```text
/help
```

### Response

```text
Anzu is available for the following commands:

1. (/schedule <deadline> <job_name>) to schedule your tasks, make sure that the date format is in 'YYYY-MM-DD'!
2. (/tasks) to show all available tasks
3. (/delete <job_name>) to delete available tasks in this environment
4. (/reschedule <new_deadline> <job_name>) to reschedule a task in this environment to a new deadline
5. (/finish <job_name>) to finish a job. This is the same as deleting a task, but with a different message
6. (/help) to spawn the help menu
7. (/leave) to make me leave (if on a group or multi-chat environment)
8. Just mention my name in the chat (Anzu) and I will return to you!

Several examples:

1. /schedule 2021-01-01 New Year's Eve!
2. /delete New Year's Eve!
3. /tasks
4. /schedule 2021-02-14 Valentine's Day!

As a note, you can use me by inviting me to a group, a room, or by just simply messaging me! The commands are compatible with each other!
```

## Join

If Anzu is invited to a group or a chat room, then she will respond with the following message.

### Response

```text
Hello everyone! Thank you for inviting me in this environment. I hope I can be a good assistant!

In case you do not know me yet, I am Anzu, a scheduler bot that helps you manage your tasks and deadlines.

Please use '/help' (without parentheses) to get started with me!
```

## `/leave`

This command is used to make Anzu leave the current environment. This command cannot be used on personal chats.

### Example Usage

```text
/leave
```

### Response

```text
Thank you for using me! I will be taking my leave now. Bye-bye!
```
