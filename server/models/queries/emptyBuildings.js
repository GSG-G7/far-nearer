const base = require('../config');
require('dotenv').config();

exports.get = async () => {
  let allRecords = [];
  const process = (records, fetchNextPage) => {
    allRecords = [
      ...allRecords,
      ...records.map(record => ({ id: record.id, ...record.fields })),
    ];
    fetchNextPage();
  };

  await base('empty_buildings')
    .select({ view: 'Grid view' })
    .eachPage(process);
  return allRecords;
};
