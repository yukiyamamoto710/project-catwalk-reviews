const db = require('../database/index.js');
const renderReview = require('../helpers/renderReview.js');
const renderList = require('../helpers/renderList.js');

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

  let reviewQuery =
    `SELECT * FROM review
      WHERE product_id=${params.product_id}
      ORDER BY ${sort} DESC
      LIMIT ${limit} OFFSET ${row_skip}`

  db.query(reviewQuery)
  .then(res => {
    let promises = [];
    res.rows.forEach(review => {
      promises.push(queryPhotos(review))
    })
    return Promise.all(promises);
  })
  .then(res => {
    let results = renderList(params.product_id, res, params.page=1, limit);
    console.log(results)
    callback(null, JSON.stringify(results));
  })
  .catch(err => callback(err))
}

const queryPhotos = (review) => {
  return db.query(`SELECT * FROM photos WHERE review_id=${review.id}`)
  .then(res => {
    return renderReview(review, res.rows);
  })
  .catch(err => {
    throw err;
  })
}

const params = {
  product_id: 25811,
  sort: 'helpfulness',
  count: 2,
  page: 2
}
getAllReviews(params, ()=>{});

module.exports = getAllReviews;