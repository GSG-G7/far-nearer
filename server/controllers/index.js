const router = require('express').Router();

const { postEmptyBuilding } = require('./emptyBuildings');
const { getEmptyBuildings } = require('./emptyBuildings');
const mailList = require('./mailList');

router.get('/', (req, res) => {
  res.send({ data: 'Hello from server' });
});

router.get('/empty-buildings', getEmptyBuildings);
router.get('/mailList', mailList);

router.post('/report-building', postEmptyBuilding);

module.exports = router;
