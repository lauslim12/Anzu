import { TextMessage } from '@line/bot-sdk';

const createResponse = (message: string): TextMessage => ({
  type: 'text',
  text: message,
});

export default createResponse;
