# Changelog

Changelog is used to keep track of version changes. The versioning scheme used is [SemVer](https://semver.org/). First integer is used for breaking change, second integer is used for major patches, and third integer is used for minor bug fixes.

## Version 2.1.1 (30/12/2020)

- Moved essential application files to the `src` folder for better modularity.

## Version 2.1.0 (30/12/2020)

- Finished documentation with Vue.js / Vuepress.
- Refactored most of the Git documents.
- Usage of symlinks for shared content between Git repository and the documentation.

## Version 2.0.2 (25/12/2020)

- Changed `main.sh` to `keep-track.sh` and `ping-webserver.sh` for clarity.
- Updated documentation regarding the usage of cronjobs.

## Version 2.0.1 (25/12/2020)

- Refactored several types to its own file.

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
- [This particular version (not maintained) could be seen here in the `v1.0.0` branch.](https://github.com/lauslim12/Anzu/tree/v1.0.0)
