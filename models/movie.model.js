const mongoose = require("mongoose");
const { Schema } = mongoose;

// A Schema is like a blueprint for a MongoDB collection.
// It defines the structure of documents, specifying what fields they contain and the type of data each field holds.

const movieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    casts: {
      type: [String],
      required: true,
    },
    director: {
      type: [String],
      required: true,
    },
    releasedDate: {
      type: String,
    },
    releaseStatus: {
      type: String,
      default: "RELEASED",
    },
    trailerURL: {
      type: String,
    },
    language: {
      type: [String],
      default: ["ENGLISH"],
    },
  },
  { timestamps: true }
);

// Creating and exporting the model
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
