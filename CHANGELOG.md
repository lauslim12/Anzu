# Changelog

Changelog is used to keep track of version changes. The versioning scheme used is [SemVer](https://semver.org/). First integer is used for breaking change, second integer is used for major patches, and third integer is used for minor bug fixes.

## Version 2.0.0 (24/12/2020)

- Total migration to TypeScript.
- Added custom types to all of the objects that are used in this application.
- Added new feature: `constants` for non-essential configuration.
- Refactored code to only process the `event` object once.
- Fixed typings for all of the functions.
- Updated all dependencies.
- Adjusted multiple environment variables to make it easier for the users.
- Updated all documentation.
- Adjusted CircleCI configuration.

## Version 1.0.0 (22/11/2020)

- Initial release of Anzu with JavaScript.
- Features available are creating tasks, deleting tasks, finishing tasks, scheduling tasks, making her leave, administrator system calls, and reminders/cleanups with cron.
- Added load balancing with responses.
- Setup CI with CircleCI and Heroku.
