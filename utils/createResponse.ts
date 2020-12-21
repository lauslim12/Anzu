import { TextMessage } from '@line/bot-sdk';

const createResponse = (message: string): TextMessage => {
  return {
    type: 'text',
    text: message,
  };
};

export default createResponse;
