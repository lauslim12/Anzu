import AppError from '../utils/appError';
import createResponse from '../utils/createResponse';
import { client } from '../utils/credentialHandler';

const operationalErrorHandler = async (err: AppError): Promise<void> => {
  // If not an operational error, we don't need to return anything.
  // Just return silently.
  if (!err.isOperational) {
    return;
  }

  const response = createResponse(err.message);
  await client.replyMessage(err.replyToken, response);
};

export default operationalErrorHandler;
