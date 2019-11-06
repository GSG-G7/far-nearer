require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async email => {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Far Nearer',
    text: 'Welcome to Who owns our neighbourhood ? website ',
  };
  try {
    await transport.sendMail(mailOption);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { sendEmail };
