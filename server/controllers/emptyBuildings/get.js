const { get } = require('../../models/queries/emptyBuildings');

module.exports = async (req, res, next) => {
  try {
    const buildings = await get();
    res.json(buildings);
  } catch (err) {
    next(err);
  }
};
