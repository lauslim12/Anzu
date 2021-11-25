/**
 * Handles all stateless commands.
 *
 * @param message - Text message
 */
const handleChat = async (message: string) => {
  // handle...
  const a = 1 + 1;
  return `${a} ${message}`;
};

export default handleChat;
