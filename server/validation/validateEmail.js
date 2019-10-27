const yup = require('yup');

exports.validateEmail = yup.object({
  email: yup
    .string()
    .email()
    .required(),
});
