const router = require('express').Router();

const { getEmptyBuildings } = require('./emptyBuildings');
const mailList = require('./mailList');

router.get('/empty-buildings', getEmptyBuildings);
router.get('/mailList', mailList);

module.exports = router;
