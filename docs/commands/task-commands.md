# Task Commands

As a scheduler bot, Anzu's 'heart' lays in these commands. Remember that the parameters are required to be in a sequence!

## `/schedule`

This command is used to schedule a task.

### Parameters

- `deadline`, the deadline of the task, in a valid `YYYY-MM-DD` format.
- `job_name`, the name of the job to be scheduled (case sensitive).

### Example Usage

```text
/schedule 2020-12-20 Work on CI/CD pipeline
/schedule 1970-01-01 Linux Epoch Time
/schedule 2020202020 Test
```

### Response

The first one will return successfully (assuming that the current date is less than `2020-12-20`).

```text
Thank you! Your task of 'Work on CI/CD pipeline' with the deadline being 2020-12-20 has been created successfully!
```

The second one will fail (obviously).

```text
You can only assign a task whose deadline is today or greater than today!
```

The third one will also fail.

```text
Invalid date! Please enter date in YYYY-MM-DD format!
```

## `/tasks`

This command is used to get all available tasks.

### Parameters

None

### Example Usage

```text
/tasks
```

### Response

```text
Hello everyone!

Anzu is here to remind you all of your schedules. Here is it:

... (your tasks here)

Good luck and stay in high spirits!
```

## `/delete`

This command is used to delete available tasks in the current environment (room / group / personal chat).

### Parameters

- `job_name`, the job name to be deleted (case sensitive).

### Example Usage

```text
/delete randomJob
```

### Response

Assuming that `randomJob` exists in the current environment.

```text
Task with the name 'randomJob' has been deleted!
```

If it does not exists, then it will return the following message.

```text
The task that you want to delete does not exist!
```

## `/reschedule`

This command is used to reschedule a task in an environment.

### Parameters

- `new_deadline`, the new deadline in `YYYY-MM-DD` format.
- `job_name`, the job name to be rescheduled (case sensitive).

### Example Usage

```text
/reschedule 2021-01-02 Second day of 2021
```

### Response

Assuming that `Second day of 2021` exists.

```text
Thank you! Your task of 'Second day of 2021' has been rescheduled to '2021-01-02'!
```

Else will return the following.

```text
The task that you want to reschedule does not exist!
```

## `/finish`

This command is used to finish a task. Identical to `/delete`, but with a more 'humane' message.

### Parameters

- `job_name`, the job name to be finished (case sensitive).

### Example Usage

```text
/finish Second day of 2021
```

### Response

Assuming that `Second day of 2021` exists in the current environment.

```text
Great work! The task 'Second day of 2021' has been finished!
```

If it does not exists, then it will return the following message.

```text
The task that you want to finish does not exist!
```
