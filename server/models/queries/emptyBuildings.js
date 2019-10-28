const base = require('../config');

exports.reportBuilding = ({
  city,
  latitude,
  longitude,
  address,
  thumbnail,
  previousUse,
  preferredUse,
  owner,
  isOwnerLocal,
  emptyPeriod,
  extraInfo,
  approved,
  receiveNotifications,
  reporterName,
  reporterEmail,
  reporterAddress,
}) => {
  return base('empty_buildings').create([
    {
      fields: {
        city,
        latitude,
        longitude,
        address,
        owner,
        thumbnail,
        preferred_use: preferredUse,
        previous_use: previousUse,
        is_owner_local: isOwnerLocal,
        empty_period: emptyPeriod,
        extra_info: extraInfo,
        approved,
        recieve_notifications: receiveNotifications,
        reporter_name: reporterName,
        reporter_email: reporterEmail,
        reporter_address: reporterAddress,
      },
    },
  ]);
};

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
