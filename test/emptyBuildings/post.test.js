// const { join } = require('path');

// const test = require('tape');
// const request = require('supertest');

// const app = require('../../server/app');

// test('Test empty building route | POST | 201', t => {
//   const emptyBuilding = {
//     city: 'Morecambe',
//     latitude: 54.06835,
//     longitude: -2.86108,
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

//   request(app)
//     .post('/api/v1/report-building')
//     .field('data', JSON.stringify(emptyBuilding))
//     .expect('Content-Type', /json/)
//     .expect(201)
//     .end((err, res) => {
//       if (err) {
//         t.error(err);
//         t.end();
//       } else {
//         const expected = {
//           statusCode: 201,
//           message: 'Building was added successfully',
//           data: {
//             city: 'Morecambe',
//             latitude: 54.06835,
//             longitude: -2.86108,
//             thumbnail: 'house.jpg',
//             address: 'Morecambe',
//             owner: 'Someone',
//             isOwnerLocal: 'Yes',
//             previousUse: 'N/A',
//             preferredUse: 'N/A',
//             emptyPeriod: '1 year',
//             extraInfo: 'more info about this building',
//             approved: true,
//             receiveNotifications: false,
//             reporterName: 'Someone',
//             reporterEmail: 'a@b.com',
//             reporterAddress: 'UK',
//           },
//         };
//         const actual = res.body;
//         t.deepEqual(actual, expected, 'Response should be as expected');
//         t.end();
//       }
//     });
// });

// test('Test empty building route | POST | 201', t => {
//   const emptyBuilding = {
//     city: 'Morecambe',
//     latitude: 54.06835,
//     longitude: -2.86108,
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

//   request(app)
//     .post('/api/v1/report-building')
//     .field('data', JSON.stringify(emptyBuilding))
//     .attach('thumbnail', join(__dirname, '..', 'testImage.PNG'))
//     .expect('Content-Type', /json/)
//     .expect(201)
//     .end((err, res) => {
//       if (err) {
//         t.error(err);
//         t.end();
//       } else {
//         const expected = {
//           statusCode: 201,
//           message: 'Building was added successfully',
//           data: {
//             city: 'Morecambe',
//             latitude: 54.06835,
//             longitude: -2.86108,
//             thumbnail: 'testImage.PNG',
//             address: 'Morecambe',
//             owner: 'Someone',
//             isOwnerLocal: 'Yes',
//             previousUse: 'N/A',
//             preferredUse: 'N/A',
//             emptyPeriod: '1 year',
//             extraInfo: 'more info about this building',
//             approved: true,
//             receiveNotifications: false,
//             reporterName: 'Someone',
//             reporterEmail: 'a@b.com',
//             reporterAddress: 'UK',
//           },
//         };
//         const isRight = res.body.data.thumbnail.includes(
//           expected.data.thumbnail,
//         );
//         if (isRight) {
//           expected.data.thumbnail = res.body.data.thumbnail;
//         }
//         const actual = res.body;
//         t.deepEqual(actual, expected, 'Response should be as expected');
//         t.end();
//       }
//     });
// });

// test('Test empty building route | POST | 400', t => {
//   const emptyBuilding = {
//     latitude: 54.06835,
//     longitude: -2.86108,
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
//     reporterEmail: 'ab.com',
//     reporterAddress: 'UK',
//   };

//   request(app)
//     .post('/api/v1/report-building')
//     .field('data', JSON.stringify(emptyBuilding))
//     .expect('Content-Type', /json/)
//     .expect(400)
//     .end((err, res) => {
//       if (err) {
//         t.error(err);
//         t.end();
//       } else {
//         const expected = {
//           statusCode: 400,
//           error: [
//             'city is a required field',
//             'reporterEmail must be a valid email',
//           ],
//         };
//         const actual = res.body;
//         t.deepEqual(actual, expected, 'Response should be as expected');
//         t.end();
//       }
//     });
// });
