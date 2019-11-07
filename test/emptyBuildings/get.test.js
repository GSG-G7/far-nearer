const test = require('tape');
const request = require('supertest');

const app = require('../../server/app');

// test('Test empty building route | GET', t => {
//   request(app)
//     .get('/api/v1/empty-buildings')
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .end((err, res) => {
//       if (err) {
//         t.error(err);
//         t.end();
//       } else {
//         const expected = Object.keys({
//           id: 'recL3MmDgRuRUNXOL',
//           city: 'Morecambe',
//           latitude: 54.06835,
//           longitude: -2.86108,
//           thumbnail: 'house.jpg',
//           address: 'Morecambe',
//           owner: 'Someone',
//           isOwnerLocal: 'Yes',
//           previousUse: 'N/A',
//           preferredUse: 'N/A',
//           emptyPeriod: '1 year',
//           extraInfo: 'more info about this building',
//           approved: true,
//           receiveNotifications: false,
//           reporterName: 'Someone',
//           reporterEmail: 'a@b.com',
//           reporterAddress: 'UK',
//         });
//         const actual = Object.keys(res.body.data[0]);
//         expected.sort();
//         actual.sort();
//         t.deepEqual(
//           actual,
//           expected,
//           'The object keys that received should be city, latitude, longitude, thumbnail, address, owner, isOwnerLocal, previousUse, preferredUse, emptyPeriod, extraInfo, approved, receiveNotifications, reporterName, reporterEmail, reporterAddress',
//         );
//         t.end();
//       }
//     });
// });
