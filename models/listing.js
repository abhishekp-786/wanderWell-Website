const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const DEFAULT_IMAGE =
  "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=612x612&w=0&k=20&c=Rm1HG5Vw9gcYhn1oD2mvnpu_IvBaQem1qdpbE8ekHDQ=";

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
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
  },

  location: {
    type: String,
  },

  country: {
    type: String,
  },
  reviews:[
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

});

listingSchema.post("findOneAndDelete", async (listing)=>{
  if(listing){
    await Review.deleteMany({_id : {$in : listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
