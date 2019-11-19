const yup = require('yup');

module.exports = yup.object({
  city: yup
    .mixed()
    .oneOf(['Morecambe', 'Hastings'])
    .required(),
  latitude: yup
    .number()
    .min(-90)
    .max(90)
    .required(),
  longitude: yup
    .number()
    .min(-180)
    .max(180)
    .required(),
  thumbnail: yup.string().default('building.png'),
  location: yup.string().required(),
  knownAddress: yup.string().trim(),
  owner: yup
    .string()
    .trim()
    .default('N/A'),
  isOwnerLocal: yup
    .mixed()
    .oneOf(['Yes', 'No', 'N/A'])
    .default('N/A'),
  previousUse: yup.string().default('N/A'),
  preferredUse: yup.string().default('N/A'),
  emptyPeriod: yup.string().default('N/A'),
  extraInfo: yup.string().trim(),
  approved: yup.bool().default(false),
  receiveNotifications: yup.bool().default(false),
  reporterName: yup
    .string()
    .trim()
    .required(),
  reporterEmail: yup
    .string()
    .trim()
    .email()
    .required(),
  reporterAddress: yup
    .string()
    .trim()
    .required(),
});
