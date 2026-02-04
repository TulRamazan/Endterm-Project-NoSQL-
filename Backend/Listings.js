const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  reviewer_name: String,
  comments: String,
  rating: Number
});

const ListingSchema = new mongoose.Schema({
  name: String,
  summary: String,
  price: Number,
  room_type: String,
  amenities: [String],
  reviews: [ReviewSchema]
});

module.exports = mongoose.model("Listing", ListingSchema);
