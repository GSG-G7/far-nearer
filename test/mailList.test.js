const tape = require('tape');
const supertest = require('supertest');

const app = require('../server/app');

tape('test mail list route with validation error', t => {
  supertest(app)
    .get('/api/v1/mailList')
    .expect(400)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error();
        t.end();
      } else {
        t.equals(
          res.text.includes('Invalid email address'),
          true,
          'Should have validation error',
        );
        t.end();
      }
    });
});

tape('test mail list route with already exist email', t => {
  supertest(app)
    .get('/api/v1/mailList')
    .expect(201)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error();
        t.end();
      } else {
        t.equals(
          res.text.includes('Email is exist'),
          true,
          'Should have Email is exist',
        );
        t.end();
      }
    });
});
