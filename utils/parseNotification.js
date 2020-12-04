const { isObjectEmpty } = require('./generalUtilities');

// Types: 'reminder' and 'cleaning up'.
module.exports = (element, index, type) => {
  if (isObjectEmpty(element)) {
    return;
  }

  let differenceInDays;

  const currentTime = new Date(Date.now());
  const deadline = new Date(element.deadline);
  const dateDifference = new Date(deadline - currentTime);

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
