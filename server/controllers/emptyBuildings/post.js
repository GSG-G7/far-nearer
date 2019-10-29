const { promisify } = require('util');
const { join } = require('path');

const { reportBuilding } = require('../../models/queries/emptyBuildings');
const { buildingSchema } = require('../../validation');

const postEmptyBuilding = async (req, res, next) => {
  const { data } = req.body;
  try {
    const newBuild = await buildingSchema.validate(data, {
      abortEarly: false,
    });

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
      message: 'Empty building was added successfully',
      data: { newBuild },
    });
  } catch (error) {
    if (error.name === 'ValidationError')
      res.status(400).send({ statusCode: 400, error: error.errors });
    else next(error);
  }
};

module.exports = postEmptyBuilding;
