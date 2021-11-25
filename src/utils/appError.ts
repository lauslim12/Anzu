/**
 * A class representative of operational errors.
 */
class AppError extends Error {
  public statusCode: number;
  public status: string;
  public isOperational: boolean;
  public type: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    this.type = 'operational.error';

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
