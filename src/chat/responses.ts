/**
 * Responses for 'Chat'. Mostly stateless.
 */
const responses = {
  /**
   * Respond when called 'Anzu'.
   *
   * @returns A message
   */
  anzu: () => `Hello! Did you call me? I am Anzu, an open source scheduler chatbot created by Nicholas Dwiarto.

  I am fully open source! My source code is available on GitHub (https://github.com/lauslim12/Anzu).
  
  If you find any issues, please submit an issue at the link above. My creator also accepts open source contributions!
  
  Have fun using me and please let me know if you need anything!
  
  Use '/help' (without parentheses) to get started!`,

  /**
   * Summons Anzu's help screen.
   *
   * @returns The help screen.
   */
  help: () => `Anzu is available for the following commands:

  1. (/schedule <deadline> <job_name>) to schedule your tasks, make sure that the date format is in 'YYYY-MM-DD'!
  2. (/tasks) to show all available tasks
  3. (/delete <job_name>) to delete available tasks in this environment
  4. (/reschedule <new_deadline> <job_name>) to reschedule a task in this environment to a new deadline
  5. (/finish <job_name>) to finish a job. This is the same as deleting a task, but with a different message
  6. (/help) to spawn the help menu
  7. (/leave) to make me leave (if on a group or multi-chat environment)
  8. Just mention my name in the chat (Anzu) and I will return to you!
  
  Several examples:
  
  1. /schedule 2021-01-01 New Year's Eve!
  2. /delete New Year's Eve!
  3. /tasks
  4. /schedule 2021-02-14 Valentine's Day!
  
  As a note, you can use me by inviting me to a group, a room, or by just simply messaging me! The commands are compatible with each other!`,
};

export default responses;
