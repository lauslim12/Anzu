import fs from 'fs';
import path from 'path';
import { ResponseInTextType } from '../types';

// Responses.
const responses: ResponseInTextType[] = [];

// Top level code, run this in the beginning of the application.
export const getAllResponsesInApplication = (): void => {
  try {
    // 1. Get all files in the 'responses' folder.
    const pathToResponses = path.join('src', 'responses');
    const directories = fs.readdirSync(pathToResponses);

    // 2. Read all files, synchronously, and strip the extension.
    directories.forEach((subdirectory) => {
      const subdirectories = fs.readdirSync(
        path.join(pathToResponses, subdirectory)
      );

      subdirectories.forEach((file) => {
        const pathToText = path.join(pathToResponses, subdirectory, file);
        const fileContent = fs.readFileSync(pathToText, 'utf-8');
        const fileName = path.parse(file).name;

        // 3. Push it into the 'responses' array.
        responses.push({ name: fileName, text: fileContent });
      });
    });

    /* eslint-disable no-console */
    console.log('All responses fetched successfully!');
  } catch (err) {
    console.error(err);
    /* eslint-enable no-console */
  }
};

// Call this when running the function.
export const transformResponse = (
  responseName: string,
  [...messageToReplace]
): string => {
  // When calling files, replace and destructure.
  const textToBeProcessed =
    responses.find((file) => file.name === responseName)?.text || '';

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
