import responses from './responses';

/**
 * Handles all stateless commands.
 *
 * @param message - Text message
 */
const handleChat = async (message: string) => {
  if (message.startsWith('/help')) {
    return responses.help();
  }

  if (message.toLowerCase().includes('anzu')) {
    return responses.anzu();
  }

  return '';
};

export default handleChat;
