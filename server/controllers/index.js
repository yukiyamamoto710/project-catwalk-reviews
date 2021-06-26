const express = require('express');
const router = express.Router();
const models = require('../models/index.js');

router.get('/reviews/meta', (req, res) => {
  const { product_id } = req.params;
  models.getReviewMeta(product_id, (err, res) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(res);
    }
  })
})

router.get('/reviews', (req, res) => {
  console.log('is this invoked?')
  models.getAllReviews(req.params, (err, res) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('hello');
    }
  })
})

router.put('/reviews/:review_id/helpful', (req, res) => {
  const { review_id } = req.params;
  models.markHelpful(review_id, (err, res) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendStatus(204);
    }
  })
})

router.put('/reviews/:review_id/report', (req, res) => {
  const { review_id } = req.params;
  models.reportReview(review_id, (err, res) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.sendStatus(204);
    }
  })
})

router.post('/createReview')


module.exports = router;