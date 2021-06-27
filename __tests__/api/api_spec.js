const frisby = require('frisby');
const server = 'http://localhost:3000';

it ('should return a status of 200 for getting a list of reviews', function() {
  return frisby
    .get(`${server}/reviews?product_id=25811`)
    .expect('status', 200)
});

it ('should return a status of 200 for getting revie metadata', function() {
  return frisby
    .get(`${server}/reviews/meta?product_id=25811`)
    .expect('status', 200)
});

it ('should post a review and return a status of 201', function() {
  return frisby
    .post(`${server}/reviews`, {
      body: {
      product_id: 25811,
      rating: 5,
      summary: "Aliquid omnis aut.",
      body: "Reiciendis ipsum dolor et. Quam tempora officia unde impedit. Corrupti quia repudiandae non.",
      recommend: true,
      name: "yuki",
      email: "helloworld@gmail.com",
      photos: [],
      characteristics: {"14": 5, "15": 5}
      }
    })
    .expect('status', 201)
});

it ('should return a status of 204 for marking helpful', function() {
  return frisby
    .put(`${server}/reviews/25811/helpful`)
    .expect('status', 204);
});

it ('should return a status of 204 for reporting review', function() {
  return frisby
    .put(`${server}/reviews/25811/report`)
    .expect('status', 204);
});

// command npx jest frisby.test.js