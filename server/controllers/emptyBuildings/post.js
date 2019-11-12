const { promisify } = require('util');
const { join } = require('path');

const { reportBuilding, get } = require('../../models/queries/emptyBuildings');
const { buildingSchema } = require('../../validation');

const postEmptyBuilding = async (req, res, next) => {
  const { data } = req.body;
  console.log('data', data);
  try {
    const newBuild = await buildingSchema.validate(data, {
      abortEarly: false,
    });

    const getData = await get();
    const isExist = getData.find(building => {
      return (
        building.longitude === newBuild.longitude &&
        building.latitude === newBuild.latitude
      );
    });

    if (isExist) {
      res
        .status(409)
        .send({ statusCode: 409, message: 'Building already exist' });
    } else {
      if (req.files && req.files.thumbnail) {
        const { thumbnail } = req.files;
        const fileName = `${Date.now()}${thumbnail.name}`;
        const move = promisify(thumbnail.mv);
        await move(join(__dirname, '..', '..', 'uploads', fileName));
        newBuild.thumbnail = fileName;
      }

      await reportBuilding(newBuild);
      res.status(201).send({
        statusCode: 201,
        message: 'Building was added successfully',
        data: newBuild,
      });
    }
  } catch (error) {
    if (error.name === 'ValidationError')
      res.status(400).send({ statusCode: 400, error: error.errors });
    else next(error);
  }
};

module.exports = postEmptyBuilding;
