const router = require('express').Router();

const { getEmptyBuildings } = require('./emptyBuildings');
const mailList = require('./mailList');

router.get('/', (req, res) => {
  res.send(1111111111111111111, req.files);
});

router.post('/123', (req, res) => {
  if (req.files) {
    const file = req.files.filename;
    const fileName = `${Date.now()}${file.name}`;
    file.mv(`./server/upload/${fileName}`, err => {
      if (err) {
        res.send({ error: 'image could not uploaded' });
      } else {
        res.send({ data: fileName });
      }
    });
  }
});

router.get('/empty-buildings', getEmptyBuildings);
router.get('/mailList', mailList);

module.exports = router;
