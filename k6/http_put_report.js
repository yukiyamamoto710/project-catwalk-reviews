import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 5 },
    { duration: '5s', target: 1 },
    { duration: '5s', target: 3 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<50'],
  },
};

export default function () {
  for (let id = 10000000; id <= 10000010; id++) {
    const res = http.put(`http://localhost:3000/reviews/${id}/report`);
    check(res, { 'status was 204': (r) => r.status === 204 });
    sleep(1);
  }
}
