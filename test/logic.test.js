const test = require('tape');

const { findEmail } = require('../server/helpers/findEmail');

test('find email test', t => {
  const email = 'mai@gmail.com';
  const allEmails = ['tala@gmail.com', 'mai@gmail.com'];
  t.equal(findEmail(allEmails, email), true, 'should equal');
  t.end();
});
