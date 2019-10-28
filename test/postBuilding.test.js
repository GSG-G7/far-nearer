const test = require('tape');
const supertest = require('supertest');
const app = require('../server/app');

// test('Testing for /report-building', t => {
//   const expected = {
//     city: 'Morecambe',
//     latitude: 54.06835,
//     longitude: -2.86108,
//     thumbnail: 'house.jpg',
//     address: 'Morecambe',
//     owner: 'Someone',
//     isOwnerLocal: 'Yes',
//     previousUse: 'N/A',
//     preferredUse: 'N/A',
//     emptyPeriod: '1 year',
//     extraInfo: 'more info about this building',
//     approved: true,
//     receiveNotifications: false,
//     reporterName: 'Someone',
//     reporterEmail: 'a@b.com',
//     reporterAddress: 'UK',
//   };

//   supertest(app)
//     .post('/api/v1/report-building')
//     .send(expected)
//     .expect('Content-Type', /json/)
//     .expect(201)
//     .end((err, res) => {
//       if (err) {
//         t.error(err);
//         t.end();
//       } else {
//         const {
//           data: { newBuild },
//           statusCode,
//         } = JSON.parse(res.text);
//         t.equal(statusCode, 201, 'Status code should be 201');
//         t.deepEqual(
//           newBuild,
//           expected,
//           'Sent data and response should be equal',
//         );
//         t.end();
//       }
//     });
// });
test('Testing for server-side validation for /report-building route', t => {
  const newBuild = {
    thumbnail: 'house.jpg',
    owner: 'Someone',
    isOwnerLocal: 'Yes',
    previousUse: 'N/A',
    preferredUse: 'N/A',
    emptyPeriod: '1 year',
    extraInfo: 'more info about this building',
    approved: true,
    receiveNotifications: false,
    reporterAddress: 'UK',
  };

  supertest(app)
    .post('/api/v1/report-building')
    .send(newBuild)
    .expect('Content-Type', /json/)
    .expect(400)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        const actual = JSON.parse(res.text);
        t.deepEqual(actual, {
          statusCode: 400,
          error: [
            'city is a required field',
            'latitude is a required field',
            'longitude is a required field',
            'address is a required field',
            'reporterName is a required field',
            'reporterEmail is a required field',
          ],
        });
        t.end();
      }
    });
});
