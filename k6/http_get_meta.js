/* eslint-disable no-plusplus */
// eslint-disable-next-line import/no-unresolved
import http from 'k6/http';
// eslint-disable-next-line import/no-unresolved
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 100 },
    { duration: '10s', target: 1000 },
    { duration: '20s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<50'],
  },
};

export default function () {
  const max = 1000011;
  const id = Math.floor(Math.random() * max) || 1;
  const res = http.get(`http://localhost:3000/reviews/meta?product_id=${id}`);
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
