/**
 * Handles all behavioral commands.
 *
 * @param message - Text message
 */
const handleBehavior = async (message: string) => {
  // handle...
  const a = 1 + 1;
  return `${a} ${message}`;
};

export default handleBehavior;
