const router = require('express').Router();

const mailList = require('./mailList');

router.get('/', (req, res) => {
  res.send({ data: 'Hello from server' });
});

router.get('/mailList', mailList);

module.exports = router;
