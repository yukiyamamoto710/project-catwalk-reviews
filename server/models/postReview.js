const db = require('../database/index.js');

const postReview = (data, callback) => {
//   const { product_id, rating, summary, body, recommend, name, email, photos, characteristics } = data;

//   const query = {
//     text: `INSERT INTO review (product_id, rating, summary, body, recommend, reviewer_name, reviewer_email) VALUES $1, $2, $3, $4, $5, $6, $7, $8, $9`,
//     values:
//   }
//   db.query()
}

// WITH
// // insert all information in review table
// INSERT INTO review (product_id, rating, summary, body, recommend, reviewer_name, reviewer_email)
// VALUES (product_id, rating, summary, body, recommend, name, email)
// RETURNING id AS review_id
// // insert photos in photos table
// // array of texts url
// INSERT INTO photos (review_id, url)
// VALUES (review_id, photos)
// // insert characteristics to characteristics table
// // { "14": 5, "15": 5 //...}
// INSERT INTO characteristic_review (characteristic_id, value)
// VALUES
// // insert characteristic_reviews table

module.exports = postReview;