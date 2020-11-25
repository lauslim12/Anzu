const fs = require('fs');
const path = require('path');

// Responses.
const responses = [];

// Top level code, run this in the beginning of the application.
exports.getAllResponsesInApplication = () => {
  try {
    // 1. Get all files in the 'responses' folder.
    const pathToResponses = path.join('responses');
    const directories = fs.readdirSync(pathToResponses);

    // 2. Read all files, synchronously, and strip the extension.
    directories.forEach((file) => {
      const pathToText = path.join(pathToResponses, file);
      const fileContent = fs.readFileSync(pathToText, 'utf-8');
      const fileName = path.parse(file).name;

      // 3. Push it into the 'responses' array.
      responses.push({ name: fileName, text: fileContent });
    });

    /* eslint-disable no-console */
    console.log('All responses fetched successfully!');
  } catch (err) {
    console.error(err);
    /* eslint-enable no-console */
  }
};

// Call this when running the function.
exports.transformResponse = (responseName, [...messageToReplace]) => {
  console.log(responses);

  // When calling files, replace and destructure.
  const textToBeProcessed = responses.find((file) => file.name === responseName)
    .text;

  // No string to be replaced, send to client in real app...
  if (!textToBeProcessed.includes('MESSAGE')) {
    return textToBeProcessed;
  }

  // Shallow copy string.
  let textToBeSent = textToBeProcessed.slice();

  // Replace each occurence with the values from the destructured array.
  messageToReplace.forEach((message, i) => {
    textToBeSent = textToBeSent.replace(`<%MESSAGE${i}%>`, message);
  });

  return textToBeSent;
};
