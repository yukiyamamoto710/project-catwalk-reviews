const db = require('../database/index.js');
const renderReview = require('../helpers/renderResponse.js');

const getAllReviews = (params, callback) => {
  let sort = null;
  if (params.sort === 'newest') {
    sort = 'date';
  } else if (params.sort === 'helpfulness') {
    sort = 'helpfulness'
  }

  let limit = 5;
  let row_skip = null;
  if (params.count) {
    limit = params.count
  }
  if (params.page && params.page > 1) {
    row_skip = limit * (params.page - 1)
  }

  let queryString =
    `SELECT * FROM review
      WHERE product_id=${params.product_id}
      ORDER BY ${sort} DESC
      LIMIT ${limit} OFFSET ${row_skip}`

  db.query(queryString, (err, res) => {
    if (err) callback(err);
    let results = [];
    res.rows.forEach(review => {
      db.query(`SELECT * FROM photos WHERE review_id=${review.id}`, (err, res2) => {
        if (err) callback(err);
        results.push(renderReview(review, res2.rows));
      })
    })
    Promise.all(results)
    .then((res) => console.log(res));
  })
  .then(res => {
    let results = [];
    res.rows.forEach(review => {
      db.query(`SELECT * FROM photos WHERE review_id=${review.id}`)
      .then(photos => {
        results.push(renderReview(review, photos.rows));
      })
      .catch((err) => console.log(err))
    })
  })
  .then(results => {
    console.log(results);
  })
}

const params = {
  product_id: 25811,
  sort: 'helpfulness',
  count: 2,
  page: 2
}
getAllReviews(params);