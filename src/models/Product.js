const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      require: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 1,
    },
    shipping: {
      type: Array,
    },
    digitalProduct: {
      type: Boolean,
      required: true,
    },
    rating: {
      type: Number,
    },
    ownerId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
