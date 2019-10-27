exports.errorHandle = statusCode => {
  let message = '';
  switch (statusCode) {
    case 413:
      message = 'You exceeded the maximum allowed payload size.';
      break;
    default:
      message = 'Internal Server Error';
  }
  return message;
};
