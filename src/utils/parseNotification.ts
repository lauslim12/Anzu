import { isObjectEmpty } from './generalUtilities';
import { ParseNotificationElementType } from '../types';

const millisecondsPerDay = 1000 * 60 * 60 * 24;

const dateDiffInDays = (a: Date, b: Date): number => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / millisecondsPerDay);
};

// Types: 'reminder' and 'cleaning up'.
const parseNotification = (
  element: ParseNotificationElementType,
  index: number,
  type: string
): string | undefined => {
  if (isObjectEmpty(element)) {
    return;
  }

  let differenceInDays;

  const currentTime = new Date(Date.now());
  const deadline = new Date(element.deadline);
  const dateDifference = dateDiffInDays(currentTime, deadline);

  // If the current date is the same as the deadline date, AND the type is 'reminder', print 'Today'.
  // The whitespace in the 'differenceInDays' variable is intentional.
  if (
    currentTime.toDateString() === deadline.toDateString() &&
    type === 'reminder'
  ) {
    differenceInDays = ' — Today';
  } else if (
    currentTime.toDateString() !== deadline.toDateString() &&
    type === 'reminder'
  ) {
    differenceInDays = ` — ${dateDifference} days`;
  } else {
    differenceInDays = '';
  }

  const formattedTime = new Date(element.deadline).toISOString().split('T')[0];

  return `${index}. ${element.name} (Deadline: ${formattedTime}${differenceInDays})`;
};

export default parseNotification;
