const express = require('express');
const reviews = require('../../helpers/reviewsAPI.js');
const router = express.Router();

router.get('/reviews', (req, res) => {
  const { product_id, page, count, sort } = req.params;
  getAllReviews(req.params, (err, res) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200);
      res.send()
    }
  })
})

router.get('/reviews/meta/:productId', (req, res) => {
  getAllReviews()
  const { } = req.body
})

router.put
router.post('/createReview')


module.exports = router;