const db = require('../database/index.js');

const postReview = (data, callback) => {
  const { product_id, rating, summary, body, recommend, name, email, photos, characteristics } = data;

  const query = {
    text: `INSERT INTO review (product_id, rating, summary, body, recommend, name, email, photos, characteristics) VALUES $1, $2, $3, $4, $5, $6, $7, $8, $9`,
    values:
  }
  
  db.query(reviewQuery)
  .then(res => {
    let promises = [];
    res.rows.forEach(review => {
      promises.push(queryPhotos(review))
    })
    return Promise.all(promises);
  })
  .then((res) => {
    let results = renderList(params.product_id, res, params.page=1, limit)
    console.log(results);
  })
  .catch(err => callback(err))
}

const queryPhotos = (review) => {
  return db.query(`SELECT * FROM photos WHERE review_id=${review.id}`)
  .then(res => {
    return renderReview(review, res.rows);
  })
  .catch((err) => console.log(err))
}

const params = {
  product_id: 25811,
  sort: 'helpfulness',
  count: 2,
  page: 2
}
getAllReviews(params);