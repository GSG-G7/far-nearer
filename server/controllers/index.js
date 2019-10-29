const router = require('express').Router();

const { getEmptyBuildings, postEmptyBuilding } = require('./emptyBuildings');
const mailList = require('./mailList');

router.get('/empty-buildings', getEmptyBuildings);
router.get('/mailList', mailList);

router.post('/report-building', postEmptyBuilding);

module.exports = router;
