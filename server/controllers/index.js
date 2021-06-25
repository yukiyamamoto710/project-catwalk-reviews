const express = require('express');
const reviews = require('../../helpers/reviewsAPI.js');
const router = express.Router();

router.get('/reviews/meta', (req, res) => {
  const { product_id } = req.params;
  getReviewMeta(product_id, (err, res) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(res);
    }
  })
})

router.get('/reviews', (req, res) => {
  getAllReviews(req.params, (err, res) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(res);
    }
  })
})

router.put('/reviews', (req, res) => {
  postReview(req.body, (err, res) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(res);
    }
  })
})
router.post('/createReview')


module.exports = router;