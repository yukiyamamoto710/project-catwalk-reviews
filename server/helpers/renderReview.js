const renderReview= (review) => {
  review.review_id = review.id;
  delete review.id;
  delete review.product_id;
  delete review.reviewer_email;
  delete review.reported;
  if (review.response === 'null') {
    review.response = null;
  }
  review.photos = [{id: review.photo_id, url: review.url}];
  delete review.photo_id;
  delete review.url;
  return review;
}

module.exports = renderReview;