const express = require('express')
const app = express();
const PORT = 3000;
const models = require('./models/index.js');

app.use(express.json());

app.get('/reviews/meta', (req, res) => {
  const { product_id } = req.params;
  models.getReviewMeta(product_id, (err, res) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(res);
    }
  })
})

app.get('/reviews', (req, res) => {
  models.getAllReviews(req.query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.put('/reviews/:review_id/helpful', (req, res) => {
  const { review_id } = req.params;
  models.markHelpful(review_id, (err, res) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendStatus(204);
    }
  })
})

app.put('/reviews/:review_id/report', (req, res) => {
  const { review_id } = req.params;
  models.reportReview(review_id, (err, res) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendStatus(204);
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});