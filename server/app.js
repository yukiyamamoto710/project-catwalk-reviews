const express = require('express');

const app = express();
const PORT = 3000;
const models = require('./models/index');

app.use(express.json());

app.get('/reviews/meta', (req, res) => {
  const { product_id } = req.query;
  models.getReviewMeta(product_id, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/reviews', (req, res) => {
  models.getAllReviews(req.query, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/reviews', (req, res) => {
  models.postReview(req.body, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  const { review_id } = req.params;
  models.markHelpful(review_id, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendStatus(204);
    }
  });
});

app.put('/reviews/:review_id/report', (req, res) => {
  const { review_id } = req.params;
  models.reportReview(review_id, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendStatus(204);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});