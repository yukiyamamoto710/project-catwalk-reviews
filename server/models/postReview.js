const db = require('../database/index.js');

const postReview = (data, callback) => {
  const { product_id, rating, summary, body, recommend, name, email, photos, characteristics } = data;

  var queryPost = `
  WITH data AS (
    INSERT INTO review (product_id, rating, summary, body, recommend, reviewer_name, reviewer_email)
    VALUES (${product_id}, ${rating}, ${summary}, ${body}, ${recommend}, ${name}, ${email})
    RETURNING id AS review_id
    ),
    data2 AS (
    INSERT INTO photos (review_id, url)
    SELECT review_id, ${photos} FROM review
    RETURNING id AS characteristic_id
    )
  INSERT INTO characteristic_reviews (characteristic_id, review_id, value)
  SELECT characteristic_id FROM photos
  SELECT review_id FROM review`
}

module.exports = postReview;