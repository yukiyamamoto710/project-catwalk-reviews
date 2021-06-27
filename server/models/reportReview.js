const db = require('../database/index.js');

const reportReview = (review_id, callback) => {
  let queryUpdate =
    `UPDATE review
      SET reported = true
      WHERE id=${review_id}`;

  db.query(queryUpdate)
  .then(res => {
    callback(null, res);
  })
  .catch(err => {
    callback(err);
  })
}

module.exports = reportReview;