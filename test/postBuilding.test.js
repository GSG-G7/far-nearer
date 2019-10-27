const test = require('tape');
const supertest = require('supertest');
const app = require('../server/app');

test('Testing for /report-building', t => {
  const expected = {
    city: 'Morecambe',
    latitude: 54.06835,
    longitude: -2.86108,
    thumbnail:
      'https://www.telegraph.co.uk/content/dam/Travel/2018/September/iStock-Morecambe-travel-123.jpg?imwidth=450',
    address: 'Morecambe',
    owner: 'Someone',
    isOwnerLocal: 'Yes',
    previousUse: 'N/A',
    preferredUse: 'N/A',
    emptyPeriod: '1 year',
    extraInfo: 'more info about this building',
    approved: true,
    receiveNotifications: false,
    reporterName: 'Someone',
    reporterEmail: 'a@b.com',
    reporterAddress: 'UK',
  };

  supertest(app)
    .post('/api/v1/report-building')
    .send(expected)
    .expect('Content-Type', /json/)
    .expect(201)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        const {
          data: { newBuild },
          statusCode,
        } = JSON.parse(res.text);
        t.equal(statusCode, 201, 'Status code should be 201');
        t.deepEqual(
          newBuild,
          expected,
          'Sent data and response should be equal',
        );
        t.end();
      }
    });
});
