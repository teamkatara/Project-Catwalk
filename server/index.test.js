/* eslint-disable no-undef */
const axios = require('axios');
const authToken = require('../config');

// const returnRating = new Promise((resolve, reject) => axios.get('http://127.0.0.1:3000/product/rating/40355', {
//   headers: { Authorization: authToken },
// })
//   .then((result) => {
//     console.log(result.data);
//     resolve(result.data);
//   }));

// test('GET request at /product/rating/40355 should return with correct rating', () => {
//   return returnRating
//     .resolves.toBe('2.39')
// });

test('GET request at /product/rating/40355 should return with correct rating', () => axios.get('http://127.0.0.1:3000/product/rating/40355', {
  headers: { Authorization: authToken },
})
  .then((response) => expect(Number(response.data.toFixed(2))).toEqual(2.39))
  .catch((err) => console.log(err)));

test('GET request at /product/rating/40355 should be defined', () => expect(axios.get('http://127.0.0.1:3000/product/rating/40355', {
  headers: { Authorization: authToken },
}))
  .resolves.toBeDefined());
