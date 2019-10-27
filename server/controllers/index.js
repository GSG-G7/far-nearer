const router = require('express').Router();

const { postEmptyBuilding } = require('./emptyBuildings');

router.get('/', (req, res) => {
  res.send({ data: 'Hello from server' });
});

router.post('/report-building', postEmptyBuilding);

module.exports = router;
