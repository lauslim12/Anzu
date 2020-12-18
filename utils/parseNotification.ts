import { isObjectEmpty } from './generalUtilities';

type ElementType = {
  deadline: Date;
  name: String;
};

// Types: 'reminder' and 'cleaning up'.
const parseNotification = (
  element: ElementType,
  index: number,
  type: string
): string | undefined => {
  if (isObjectEmpty(element)) {
    return;
  }

  let differenceInDays;

  const currentTime = new Date(Date.now());
  const deadline = new Date(element.deadline);
  const dateDifference = new Date(deadline.getTime() - currentTime.getTime());

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
    differenceInDays = ` — ${dateDifference.getUTCDate()} days`;
  } else {
    differenceInDays = '';
  }

  const formattedTime = new Date(element.deadline).toISOString().split('T')[0];

  return `${index}. ${element.name} (Deadline: ${formattedTime}${differenceInDays})`;
};

export default parseNotification;
