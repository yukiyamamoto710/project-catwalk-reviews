/* eslint-disable camelcase */
const db = require('../database/index');

const reportReview = (review_id, callback) => {
  const queryUpdate = `UPDATE review
      SET reported = true
      WHERE id=${review_id}`;

  db.query(queryUpdate)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

module.exports = reportReview;
