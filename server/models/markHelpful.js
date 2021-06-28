/* eslint-disable camelcase */
const db = require('../database/index');

const markHelpful = (review_id, callback) => {
  const queryUpdate = `UPDATE review
      SET helpfulness = helpfulness + 1
      WHERE id=${review_id}`;

  db.query(queryUpdate)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

module.exports = markHelpful;
