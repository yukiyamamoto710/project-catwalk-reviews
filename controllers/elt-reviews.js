const fs = require('fs');
const fastcsv = require("fast-csv");
const pool = require('./index.js');

let stream = fs.createReadStream("../raw-data/sample_reviews.csv");
let csvData = [];
let csvStream = fastcsv
  .parse({headers: false})
  .on('error', error => console.error(error))
  .on('data', data => {
    csvData.push(data);
  })
  .on('end', () => {
    let header = csvData.shift();
    csvData.forEach(row => {
      const query_reviewer = {
        text: `INSERT INTO reviewer (name, email) VALUES ($1, $2)`,
        values: [row[8], row[9]]
      }
      const query_review = {
        text: `INSERT INTO review (product_id, rating, date, summary, body, recommend, reported, response, helpfulness) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        values: [row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[10], row[11]]
      }

      pool.query(query_reviewer, (err, res) => {
        if (err) console.log(err);
        pool.query(query_review, (err, res) => {
          if (err) console.log(err);
        })
      })
    })
  })

stream.pipe(csvStream);