const getAllReviews = require('./getAllReviews');
const getReviewMeta = require('./getReviewMeta');
const postReview = require('./postReview');
const markHelpful = require('./markHelpful');
const reportReview = require('./reportReview');

const models = {
  getAllReviews,
  getReviewMeta,
  postReview,
  markHelpful,
  reportReview,
};

module.exports = models;
