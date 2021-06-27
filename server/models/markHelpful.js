const db = require('../database/index.js');

const markHelpful = (review_id, callback) => {
  let queryUpdate =
    `UPDATE review
      SET helpfulness = helpfulness + 1
      WHERE id=${review_id}`;

  db.query(queryUpdate)
  .then(res => {
    callback(null, res);
  })
  .catch(err => {
    callback(err);
  })
}

module.exports = markHelpful;