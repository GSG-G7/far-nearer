const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');

const controllers = require('./controllers');

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(compression());
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/', controllers);

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.use((_req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
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
});

module.exports = app;
