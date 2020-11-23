class AppError extends Error {
  constructor(message, statusCode, eventObject) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    this.eventObject = eventObject || undefined;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
