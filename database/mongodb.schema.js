import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  product: { type: Number, index: true },
  page: { type: Number, default: 1 },
  count: { type: Number, default: 5 },
  results: [reviewSchema],
  characteristics: {[type: String, enum: ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit']]: {id: Number, value: Number}}
});

const reviewSchema = new Schema({
  review_id: { type: Number, index: true },
  rating: { type: Number, min: 0, max: 5 },
  summary: { type: String, maxLength: 60 }
  recommend: Boolean,
  response: String,
  body: { type: String, minLength: 50, maxLength: 1000},
  date: { type: Date, default: Date.now },
  reviewer_name: { type: String, maxLength: 60 },
  helpfulness: Number,
  photos: [{id: Number, url: String}]
});

const Product = mongoose.model('Product', productSchema);
const Review = mongoose.model('Review', reviewSchema);
