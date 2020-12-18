type ResponseHelperType = {
  type: 'text';
  text: string;
};

const createResponse = (message: string): ResponseHelperType => {
  return {
    type: 'text',
    text: message,
  };
};

export default createResponse;
