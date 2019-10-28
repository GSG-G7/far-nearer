const router = require('express').Router();

const { getEmptyBuildings } = require('./emptyBuildings');

router.get('/', (req, res) => {
  res.send({ data: 'Hello from server' });
});

router.get('/empty-buildings', getEmptyBuildings);

module.exports = router;
