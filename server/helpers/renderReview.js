const renderReview= (review, photos) => {
  review.review_id = review.id;
  delete review.id;
  delete review.product_id;
  delete review.reviewer_email;
  review.photos = []
  photos.forEach(photo => {
    delete photo.review_id;
    review.photos.push(photo)
  })
  return review;
}

module.exports = renderReview;