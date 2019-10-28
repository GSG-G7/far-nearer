const { promisify } = require('util');
const { reportBuilding } = require('../../models/queries/emptyBuildings');
const { schemaBuildings } = require('../../validation');

const postEmptyBuilding = async (req, res, next) => {
  try {
    const newBuild = await schemaBuildings.validate(req.body, {
      abortEarly: false,
    });
    if (req.files) {
      const file = req.files.filename;
      const fileName = `${Date.now()}${file.name}`;
      newBuild.thumbnail = fileName;
      const move = promisify(file.mv);
      move(`./server/uploads/${fileName}`)
        .then(filename => res.send({ statusCode: 201, data: filename }))
        .catch(() =>
          res.send({ statusCode: 500, error: 'image could not uploaded' }),
        );
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
