const db = require('../database/index.js');
const renderReview = require('../helpers/renderReview.js');
const renderList = require('../helpers/renderList.js');

const getAllReviews = (params, callback) => {
  let sort = 'review.id';
  if (params.sort === 'newest') {
    sort = 'date';
  } else if (params.sort === 'helpfulness') {
    sort = 'helpfulness'
  }
  let limit = params.count || 5;

  let reviewQuery =
    `SELECT review.*, photos.id AS photo_id, photos.url FROM review
      INNER JOIN photos
      ON review.id = photos.review_id
      WHERE product_id = ${params.product_id}
      AND reported = false
      ORDER BY ${sort} DESC`;

  db.query(reviewQuery)
  .then(res => {
    let reviews = res.rows;
    let results = {};
    reviews.map(review => {
      if (!results[review.id]) {
        results[review.id] = renderReview(review);
      } else {
        let photo = {id: review.photo_id, url: review.url};
        results[review.id].photos.push(photo);
      }
    })
    let combined = Object.values(results);
    let response = renderList(params.product_id, combined, params.page=0, limit);
    callback(null, JSON.stringify(response));
  })
  .catch(err => {
    callback(err);
  })
}

module.exports = getAllReviews;
