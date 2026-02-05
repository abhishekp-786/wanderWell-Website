const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
  filename: {
    type: String,
    default: "listingimage"
  },
  url: {
    type: String,
    default: "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=612x612&w=0&k=20&c=Rm1HG5Vw9gcYhn1oD2mvnpu_IvBaQem1qdpbE8ekHDQ=",
    set: (v) =>
      v === ""
        ? "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=612x612&w=0&k=20&c=Rm1HG5Vw9gcYhn1oD2mvnpu_IvBaQem1qdpbE8ekHDQ="
        : v,
  }
},
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;
