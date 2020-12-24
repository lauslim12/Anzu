class AppError extends Error {
  public statusCode: number;
  public status: string;
  public isOperational: boolean;
  public replyToken: string;

  constructor(message: string, statusCode: number, replyToken: string) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    this.replyToken = replyToken;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
