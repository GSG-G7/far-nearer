const yup = require('yup');

const schemaBuildings = yup.object().shape({
  city: yup
    .mixed()
    .oneOf(['Morecambe', 'Hastings'])
    .required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  address: yup.string().required(),
  thumbnail: yup.string().default('house.jpg'),
  owner: yup.string().default('N/A'),
  isOwnerLocal: yup.mixed().oneOf(['Yes', 'No', 'N/A']),
  previousUse: yup.string().default('N/A'),
  preferredUse: yup.string().default('N/A'),
  emptyPeriod: yup.string().default('N/A'),
  extraInfo: yup.string(),
  approved: yup.bool().default(false),
  receiveNotifications: yup.bool().default(false),
  reporterName: yup.string().required(),
  reporterEmail: yup
    .string()
    .email()
    .required(),
  reporterAddress: yup.string().required(),
});

module.exports = schemaBuildings;
