const router = require('express').Router();

router.get('/', (req, res) => {
  res.send({ data: 'Hello from server' });
});

module.exports = router;
