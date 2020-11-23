# Anzu

## Automated CRON Setup

```bash
crontab -l
crontab -e
```

- The reason the crontab is setup like this is so that it gives Heroku time to prepare before running the Node CRON.

```bash
55 01 * * * cd "$HOME/Anzu/auto" && bash main.sh <link_to_webserver>
55 07 * * * cd "$HOME/Anzu/auto" && bash main.sh <link_to_webserver>
55 16 * * * cd "$HOME/Anzu/auto" && bash main.sh <link_to_webserver>
```

## TODO

- 0. Error handling.
- 1. Wrap functions in an 'asyncHandler'.
- 2. Make it so the functions are more modular.
- 3. The 'startsWith' function call is still dirty.
- 4. Upgrade to TypeScript for easier maintenance.
- 5. Scheduler (routine cleanup and announcement).
- 6. Group and Room ID.
- 7. No duplicate tasks.
- 8. There should be two: taskFunctions and behaviorFunctions.
- Behavior functions is used to leave the group, etc. All LINE related.
