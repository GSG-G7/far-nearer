const yup = require('yup');

const schemaBuildings = yup.object().shape({
  city: yup
    .mixed()
    .oneOf(['Morecambe', 'Hastings'])
    .required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  address: yup.string().required(),
  thumbnail: yup.string().required(),
  owner: yup.string().required(),
  isOwnerLocal: yup.mixed().oneOf(['Yes', 'No', 'N/A']),
  previousUse: yup.string().default('N/A'),
  preferredUse: yup.string(),
  emptyPeriod: yup.string(),
  extraInfo: yup.string(),
  approved: yup
    .bool()
    .required()
    .default(false),
  receiveNotifications: yup
    .bool()
    .required()
    .default(false),
  reporterName: yup.string().required(),
  reporterEmail: yup
    .string()
    .email()
    .required(),
  reporterAddress: yup.string().required(),
});

module.exports = schemaBuildings;
