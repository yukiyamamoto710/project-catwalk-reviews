const frisby = require('frisby');

const server = 'http://localhost:3000';

it ('should return a status of 200 for hello', function() {
  return frisby
    .get(`${server}/reviews`);
    .expect('status', 200);
});

it ('should return a status of 200 for hello', function() {
  return frisby
    .get(`${server}/reviews`);
    .expect('json', );
});

// command npx jest frisby.test.js