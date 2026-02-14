const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DEFAULT_IMAGE =
  "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=612x612&w=0&k=20&c=Rm1HG5Vw9gcYhn1oD2mvnpu_IvBaQem1qdpbE8ekHDQ=";

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: DEFAULT_IMAGE,
      set: (v) => (v === "" || v === null || v === undefined ? DEFAULT_IMAGE : v),
    },
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  location: {
    type: String,
    trim: true,
  },

  country: {
    type: String,
    trim: true,
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
