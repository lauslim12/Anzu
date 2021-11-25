/**
 * Anzu's responses when doing listeners.
 */
const responses = {
  /**
   * Response when Anzu is followed/added.
   *
   * @returns A message
   */
  added: () => `Hi! Thank you for adding me, Anzu!

  I am a bot that was created as your personal scheduler and your assistant.

  I am open source! Check out my source code at this link: https://github.com/lauslim12/Anzu!
  
  You can start using me by typing '/help' and/or inviting me to a group or a chat room. See ya later!`,

  /**
   * Response when Anzu joins an environment.
   *
   * @returns A message
   */
  join: () => `Hello everyone! Thank you for inviting me in this environment. I hope I can be a good assistant!

  In case you do not know me yet, I am Anzu, a scheduler bot that helps you manage your tasks and deadlines.
  
  Please use '/help' (without parentheses) to get started with me!`,
};

export default responses;
