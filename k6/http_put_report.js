/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
/* eslint-disable func-names */
import http from 'k6/http';
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
  const res = http.put(`http://localhost:3000/reviews/${id}/report`);
  check(res, { 'status was 204': (r) => r.status === 204 });
  sleep(1);
}
