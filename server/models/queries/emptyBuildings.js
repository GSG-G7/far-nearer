const base = require('../config');

const reportBuilding = ({
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
module.exports = reportBuilding;
