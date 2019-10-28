// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, _next) => {
  const { statusCode } = err;
  let message = '';
  switch (statusCode) {
    case 413:
      message = 'You exceeded the maximum allowed payload size.';
      break;
    default:
      message = 'Internal Server Error';
  }
  res.send({ statusCode, error: message });
};
