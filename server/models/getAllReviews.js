const db = require('../database/index');
const renderReview = require('../helpers/renderReview');
const renderList = require('../helpers/renderList');

const getAllReviews = (params, callback) => {
  let sort = 'review_timestamp.id';
  if (params.sort === 'newest') {
    sort = 'date';
  } else if (params.sort === 'helpfulness') {
    sort = 'helpfulness';
  }
  const limit = params.count || 5;

  const reviewQuery = `SELECT review_timestamp.*, photos.id AS photo_id, photos.url
      FROM review_timestamp
      INNER JOIN photos
      ON review_timestamp.id = photos.review_id
      WHERE product_id = ${params.product_id}
      AND reported = false
      ORDER BY ${sort} DESC`;

  db.query(reviewQuery)
    .then((res) => {
      const reviews = res.rows;
      const results = {};
      reviews.forEach((review) => {
        if (!results[review.id]) {
          results[review.id] = renderReview(review);
        } else {
          const photo = { id: review.photo_id, url: review.url };
          results[review.id].photos.push(photo);
        }
      });
      const combined = Object.values(results);
      // eslint-disable-next-line no-param-reassign
      const response = renderList(params.product_id, combined, params.page = 0, limit);
      callback(null, JSON.stringify(response));
    })
    .catch((err) => callback(err));
};

module.exports = getAllReviews;
