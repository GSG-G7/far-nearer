const { get } = require('../../models/queries/emptyBuildings');

module.exports = async (req, res, next) => {
  try {
    const buildings = await get();
    res.json({ data: buildings, statusCode: 200 });
  } catch (err) {
    next(err);
  }
};
