const db = require('../database/index.js');

const getReviewMeta = (product_id, callback) => {
  let queryReview = `SELECT id, rating, recommend FROM review WHERE product_id=${product_id}`;
  let queryCharacteristics = `SELECT id, name FROM characteristics WHERE product_id=${product_id}`;

  db.query(queryCharacteristics)
  .then((res) => {
    let characteristics = [];
    for (let i = 0; i < res.rows.length; i++) {
      characteristics.push({[res.rows[i].name]: {id: res.rows[i].id}})
    }
    db.query(queryReview)
    .then(res => {
      let promises = [];
      const review_ids = res.rows.map(row => row.id);
      review_ids.forEach(review_id => {
        promises.push(getValues(review_id))
      })
      return Promise.all(promises);
    })
    .then((res) => {
      let idx = 0;
      res.map(value => {
        value[idx]
      })
        console.log(res);
        // console.log(res2.rows)
      })
    .catch(err => callback(err))
  })

}

const getValues = (review_id) => {
  let queryValues = `SELECT value FROM characteristic_reviews WHERE review_id=${review_id};`
  return db.query(queryValues)
  .then(res => {
    const values = res.rows.map(row => row.value)
    return values;
  })
  .catch(err => callback(err));
}

// array of arrays
//

const getAverage = (res) => {
  let idx = 0;
  while (idx < res.length) {
    for (var i = 0; i < res[0].length; i++) {
      
    }
  }
}

getReviewMeta(25812, ()=>{});