const AppError = require('./appError');

module.exports = (event) => {
  if (event.source.userId !== process.env.ADMIN_USER_ID) {
    throw new AppError(
      'Sorry, Anzu does not accept data manipulation orders from anyone other than Nicholas Dwiarto. Please ask him instead.',
      401,
      event
    );
  }
};
