const db = require('../database/index.js');

const postReview = (data, callback) => {
  const { product_id, rating, summary, body, recommend, name, email, photos, characteristics } = data;

  let review_id;
  let characteristic_ids = Object.keys(characteristics);
  let values = Object.values(characteristics);

  var queryReview = `INSERT INTO review (id, product_id, rating, summary, body, recommend, reviewer_name, reviewer_email)
  VALUES (nextval('review_id_sequence'), ${product_id}, ${rating}, '${summary}', '${body}', ${recommend}, '${name}', '${email}') RETURNING id AS review_id`;

  console.log(queryReview);

  db.query(queryReview)
  .then(res => {
    review_id = res.rows[0].review_id;
    if (photos.length) {
      photos.forEach(photo => {
        console.log(photo);
        var queryPhotos = `INSERT INTO photos (id, review_id, url) VALUES (nextval('photos_id_sequence'), ${review_id}, ${photo}) RETURNING id AS photos_id`;
        console.log(queryPhotos);
        db.query(queryPhotos)
        .then(res => {
          console.log(res.rows);
        })
        .catch(err => {
          console.log(err);
        })
      })
    }
  })
  .then(res => {
    characteristic_ids.forEach((char, i) => {
      var queryCharacteristics = `INSERT INTO characteristic_reviews (id, characteristic_id, review_id, value) VALUES (nextval('characteristic_reviews_id_sequence'), ${char}, ${review_id}, ${values[i]}) RETURNING id`;
      console.log(queryCharacteristics)
      db.query(queryCharacteristics)
      .then(res => {
        console.log(res.rows);
      })
      .catch(err => {
        console.log(err);
      })
    })
  })
  .catch(err => {
    console.log(err);
  })
}

module.exports = postReview;

var data = {
  product_id: 25811,
  rating: 5,
  summary: "Aliquid omnis aut.",
  body: "Reiciendis ipsum dolor et. Quam tempora officia unde impedit. Corrupti quia repudiandae non.",
  recommend: true,
  name: "yuki",
  email: "helloworld@gmail.com",
  photos: [],
  characteristics: {"14": 5, "15": 5}
};

postReview(data, ()=>{})
