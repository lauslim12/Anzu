/**
 * Checks whether an array is empty or not.
 *
 * @param list - An array with generic elements
 * @returns Boolean value whether an array is empty or not
 */
export const isArrayEmpty = <T>(list: Array<T>) => {
  if (!Array.isArray(list) || !list.length) {
    return true;
  }

  return false;
};

/**
 * Checks whether an object is empty or not.
 *
 * @param obj - An object
 * @returns Boolean value whether an object is empty or not
 */
export const isObjectEmpty = (obj: Object) => {
  if (!obj) {
    return true;
  }

  if (!Object.keys(obj).length && obj.constructor === Object) {
    return true;
  }

  return false;
};

/**
 * Checks whether a date is in a valid 'YYYY-MM-DD' format.
 *
 * @param dateString - A date string
 * @returns Boolean value whether the date is valid or not
 */
export const isDateValid = (dateString: string) => {
  const regularExpression = /^\d{4}-\d{2}-\d{2}$/;

  // If does not match regular expression, then fail.
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

/**
 * Checks if date passed is lower than the current date.
 *
 * @param dateString - A date string
 * @returns Boolean value whether the date is less than today
 */
export const isDateLessThanToday = (dateString: string) => {
  const currentDate = new Date(Date.now()).toISOString().split('T')[0];

  if (currentDate === undefined) {
    return false;
  }

  if (dateString < currentDate) {
    return true;
  }

  return false;
};

/**
 * Checks if a string is empty or only contains whitespace.
 *
 * @param str - A string
 * @returns Boolean value whether a string is empty or not.
 */
export const isStringEmpty = (str: string | undefined) => {
  if (!str || str.length === 0 || /^\s*$/.test(str)) {
    return true;
  }

  if (str === undefined) {
    return true;
  }

  return false;
};
