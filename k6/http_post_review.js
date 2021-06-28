/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
/* eslint-disable func-names */
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
  const data = {
    product_id: 25811,
    rating: 5,
    summary: 'Aliquid omnis aut.',
    body: 'Reiciendis ipsum dolor et. Quam tempora officia unde impedit. Corrupti quia repudiandae non.',
    recommend: true,
    name: 'yuki',
    email: 'helloworld@gmail.com',
    photos: ['https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80', 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'],
    characteristics: { 14: 5, 15: 5 },
  };
  const res = http.post('http://localhost:3000/reviews', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  check(res, { 'status was 201': (r) => r.status === 201 });
  sleep(1);
}
