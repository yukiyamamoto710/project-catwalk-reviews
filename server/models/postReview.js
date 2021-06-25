const db = require('../database/index.js');

const postReview = (data, callback) => {
  const { product_id, rating, summary, body, recommend, name, email, photos, characteristics } = data;

  const query = {
    text: `INSERT INTO review (product_id, rating, summary, body, recommend, reviewer_name, reviewer_email) VALUES $1, $2, $3, $4, $5, $6, $7, $8, $9`,
    values:
  }
  db.query()
}