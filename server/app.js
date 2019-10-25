const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');

const controllers = require('./controllers');

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

app.use(compression());
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/', controllers);

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.use((_req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
