const mongoose = require("mongoose");
const accomodationSchema = new mongoose.Schema({
  housingType: { type: String, required: true },
  address: { type: String, required: true },
  distance: { type: String },
  photos: { type: [String] },
  desc: { type: String, required: true },
  bedrooms: { type: String },
  bathrooms: { type: String },
  price: { type: Number, required: true },
  featured: { type: Boolean, default: false },
  furnished: { type: Boolean, default: false },
});

const Accomodation = mongoose.model("Accomodation", accomodationSchema);
module.exports.Accomodation = Accomodation;
