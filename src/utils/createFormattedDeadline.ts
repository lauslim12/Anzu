/**
 * Number of milliseconds per day for calculations.
 */
const millisecondsPerDay = 1000 * 60 * 60 * 24;

/**
 * Calculates date difference in days.
 *
 * @param a - First date
 * @param b - Second date
 * @returns - Date difference in days
 */
const dateDiffInDays = (a: Date, b: Date): number => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / millisecondsPerDay);
};

/**
 * Create formatted message that showcases the index, task name, and its deadline.
 *
 * @param task - Task
 * @param deadline - Deadline
 * @param index - Index (numbering)
 * @returns Formatted message
 */
const createFormattedDeadline = (
  task: string,
  deadline: number,
  index: number
) => {
  let differenceInDays;

  const currentTime = new Date(Date.now());
  const parsedDeadline = new Date(deadline * 1000);
  const dateDifference = dateDiffInDays(currentTime, parsedDeadline);

  // If the current date is the same as the deadline date, AND the type is 'reminder', print 'Today'.
  // The whitespace in the 'differenceInDays' variable is intentional.
  if (currentTime.toDateString() === parsedDeadline.toDateString()) {
    differenceInDays = ' — Today';
  } else if (currentTime.toDateString() !== parsedDeadline.toDateString()) {
    differenceInDays = ` — ${dateDifference} days`;
  } else {
    differenceInDays = '';
  }

  const formattedTime = new Date(deadline * 1000).toISOString().split('T')[0];

  return `${index}. ${task} (Deadline: ${formattedTime}${differenceInDays})`;
};

export default createFormattedDeadline;
