const getAllReviews = require('./getAllReviews.js');
const getReviewMeta = require('./getReviewMeta.js');
const postReview = require('./postReview.js');
const markHelpful = require('./markHelpful.js');
const reportReview = require('./reportReview.js');

const models = {
  getAllReviews: getAllReviews,
  getReviewMeta: getReviewMeta,
  postReview: posttReview,
  markHelpful: markHelpful,
  reportReview: reportReview
}

module.exports = models;