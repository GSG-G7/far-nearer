const test = require('tape');
const request = require('supertest');

const app = require('../server/app');

test('Test maillist route for an existing email address | 200', t => {
  request(app)
    .get('/api/v1/mailList?email=ahmed@gmail.com')
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        const expected = Object.keys({
          statusCode: 200,
          message: 'Email already exists',
          data: { email: 'ahmed@gmail.com' },
        });
        const actual = Object.keys(res.body);
        t.deepEqual(
          actual,
          expected,
          'Object key should be statusCode, message, and data',
        );
        t.end();
      }
    });
});

test('Test maillist route for invalid email address | 400', t => {
  request(app)
    .get('/api/v1/mailList?email=ahmedgmail.com')
    .expect('Content-Type', /json/)
    .expect(400)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        const expected = Object.keys({
          statusCode: 400,
          error: 'Invalid email address',
        });
        const actual = Object.keys(res.body);
        t.deepEqual(
          actual,
          expected,
          'Object key should be statusCode and error',
        );
        t.end();
      }
    });
});
