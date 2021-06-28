/* eslint-disable camelcase */
const db = require('../database/index.js');

const postReview = (data, callback) => {
  const {
    product_id, rating, summary, body, recommend, name, email, photos, characteristics,
  } = data;

  let review_id;
  const characteristic_ids = Object.keys(characteristics) || null;
  const values = Object.values(characteristics) || null;

  const queryReview = `INSERT INTO review
      (id, product_id, rating, summary, body, recommend, reviewer_name, reviewer_email)
    VALUES
      (nextval('review_id_sequence'), ${product_id}, ${rating}, '${summary}', '${body}', ${recommend}, '${name}', '${email}')
    RETURNING id AS review_id`;

  db.query(queryReview)
    .then((res) => {
      review_id = res.rows[0].review_id;
      if (photos.length) {
        const queryPhotos = `INSERT INTO photos (id, review_id, url)
            VALUES ${photos.map((photo) => `(nextval('photos_id_sequence'), ${review_id}, '${photo}')`)}
            RETURNING id AS photos_id`;
        return db.query(queryPhotos);
      }
    })
    .then(() => {
      if (characteristic_ids) {
        const queryCharacteristics = `INSERT INTO characteristic_reviews
          (id, characteristic_id, review_id, value)
        VALUES ${characteristic_ids.map((char, i) => `(nextval('characteristic_reviews_id_sequence'), ${char}, ${review_id}, ${values[i]})`)}
        RETURNING id`;
        db.query(queryCharacteristics)
          .then((res) => callback(null, res.rows))
          .catch((err) => callback(err));
      }
    })
    .catch((err) => callback(err));
};

module.exports = postReview;
