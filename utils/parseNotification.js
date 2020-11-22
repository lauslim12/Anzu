module.exports = (element, index) => {
  if (!element) {
    return;
  }

  let differenceInDays;

  const currentTime = new Date(Date.now());
  const deadline = new Date(element.deadline);
  const dateDifference = new Date(deadline - currentTime);

  // If the current date is the same as the deadline date, print 'Today'.
  if (currentTime.toDateString() === deadline.toDateString()) {
    differenceInDays = 'Today';
  } else {
    differenceInDays = `${dateDifference.getUTCDate()} days`;
  }

  const formattedTime = new Date(element.deadline).toISOString().split('T')[0];

  return `${index}. ${element.name} (Deadline: ${formattedTime} — ${differenceInDays})`;
};
