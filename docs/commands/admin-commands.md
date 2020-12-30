# Admin Commands

Following are the list of admin commands usable with Anzu. Remember that all admin commands are usable in any environments.

## `System Call: Purge`

This command **deletes** your whole `tasks` schema in the MongoDB database. **Use with caution!**

### Example Usage

```text
System Call: Purge
```

### Response

```text
The database has been purged!
```

## `System Call: Delete Expired`

This command is used to delete all expired tasks, manually.

### Example Usage

```text
System Call: Delete Expired
```

### Response

```text
All expired data have been deleted!
```

## `System Call: Local Deletion`

This command is used to delete all tasks in an environment.

### Example Usage

```text
System Call: Local Deletion
```

### Response

```text
All data in this environment have been deleted!
```

## `System Call: Administrator`

This command is used to check if the user saying that passphrase is an administrator or not.

### Example Usage

```text
System Call: Administrator
```

### Response

```text
Hello Administrator! How are you?
```
