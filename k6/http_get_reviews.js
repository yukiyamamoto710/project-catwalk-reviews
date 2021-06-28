import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '5s', target: 100 },
    { duration: '5s', target: 10 },
    { duration: '5s', target: 30 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<50'],
  },
};

export default function () {
  for (var id = 500000; id <= 500010; id++) {
    let res = http.get(`http://localhost:3000/reviews?product_id=${id}`);
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
  }
}

