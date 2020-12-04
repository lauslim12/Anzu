// Check if an array is empty.
exports.isArrayEmpty = (list) => {
  if (!Array.isArray(list) || !list.length) {
    return true;
  }

  return false;
};

// Check if an object is empty.
exports.isObjectEmpty = (obj) => {
  if (!obj) {
    return true;
  }

  if (!Object.keys(obj).length && obj.constructor === Object) {
    return true;
  }

  return false;
};

// Check if a date is in a valid 'YYYY-MM-DD' format.
exports.isDateValid = (dateString) => {
  const regularExpression = /^\d{4}-\d{2}-\d{2}$/;

  // If does not match regular expression, then fail.
  // Invalid format.
  if (!dateString.match(regularExpression)) {
    return false;
  }

  const dateToBeChecked = new Date(dateString);
  const dateToBeCheckedNum = dateToBeChecked.getTime();

  // NaN value, invalid date.
  if (!dateToBeCheckedNum && dateToBeCheckedNum !== 0) {
    return false;
  }

  if (dateToBeChecked.toISOString().slice(0, 10) === dateString) {
    return true;
  }

  return false;
};

// Check if date is lower than the current date.
exports.isDateLessThanToday = (dateString) => {
  const currentDate = new Date(Date.now()).toISOString().split('T')[0];

  if (dateString < currentDate) {
    return true;
  }

  return false;
};

// Check if a string is empty or only contains whitespace.
exports.isStringEmpty = (str) => {
  if (!str || str.length === 0 || /^\s*$/.test(str)) {
    return true;
  }

  return false;
};
