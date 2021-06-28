const db = require('../database/index');
const renderMeta = require('../helpers/renderMeta');

const getReviewMeta = (product_id, callback) => {
  const queryReview = `SELECT id, rating, recommend
      FROM review
      WHERE product_id=${product_id}`;
  const queryCharacteristics = `SELECT
      characteristic_reviews.characteristic_id,
      AVG(characteristic_reviews.value),
      characteristics.name
    FROM
      characteristic_reviews
    INNER JOIN
      characteristics
    ON characteristic_reviews.characteristic_id = characteristics.id
    WHERE
      product_id=${product_id}
    GROUP BY
      characteristic_reviews.characteristic_id,
      characteristics.name`;

  const results = {};

  db.query(queryCharacteristics)
    .then((res) => {
      res.rows.forEach((row) => {
        results[row.name] = { id: row.characteristic_id, value: row.avg };
      });
      return db.query(queryReview);
    })
    .then((res) => {
      const ratings = renderMeta(res.rows);
      const response = { ...{ product_id }, ...ratings };
      response.characteristics = results;
      callback(null, response);
    })
    .catch((err) => callback(err));
};

module.exports = getReviewMeta;