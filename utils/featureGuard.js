const AppError = require('./appError');

module.exports = (event) => {
  if (event.source.userId !== process.env.ADMIN_USER_ID) {
    throw new AppError('You are unauthorized to use this command!', 401, event);
  }
};
