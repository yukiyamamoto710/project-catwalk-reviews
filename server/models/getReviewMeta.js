const db = require('../database/index.js');
const renderMeta = require('../helpers/renderMeta.js');

const getReviewMeta = (product_id, callback) => {
  let queryReview =
    `SELECT id, rating, recommend
      FROM review
      WHERE product_id=${product_id}`;
  let queryCharacteristics =
    `SELECT id, name
      FROM characteristics
      WHERE product_id=${product_id}`;

  let results = {};

  db.query(queryCharacteristics)
  .then((res) => {
    let characteristics = [];
    for (let i = 0; i < res.rows.length; i++) {
      characteristics.push([res.rows[i].name, {id: res.rows[i].id}])
    }
    db.query(queryReview)
    .then(res => {
      results = renderMeta(product_id, res.rows);
      let promises = [];
      const review_ids = res.rows.map(row => row.id);
      review_ids.forEach(review_id => {
        promises.push(getValues(review_id))
      })
      return Promise.all(promises);
    })
    .then((res) => {
      const values = getAverage(res);
      characteristics.map((char, i) => {
        let obj = {};
        return obj[char[0]] = Object.assign(char[1], values[i])
      })
      const renderedChar = {};
      characteristics.forEach(char => {
        renderedChar[char[0]] = char[1];
      })
      results = (Object.assign(results, {characteristics: renderedChar}));
      callback(null, JSON.stringify(results));
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

const getAverage = (res) => {
  let results = [];
  let idx = 0;
  while (idx < res[0].length) {
    let total = 0;
    for (var i = 0; i < res.length; i++) {
       total += Number(res[i][idx]);
     }
    let ave = total/(res.length);
    results.push({value: ave});
    idx++;
  }
 return results;
}

// getReviewMeta(25811, ()=>{})