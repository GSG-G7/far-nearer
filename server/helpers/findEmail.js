exports.findEmail = (allEmails, email) => {
  let flag = false;
  allEmails.forEach(element => {
    if (email === element) {
      flag = true;
    }
  });
  return flag;
};
