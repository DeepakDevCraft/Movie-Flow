const mongoose = require("mongoose");

const { Schema } = mongoose;

//A Schema is like a blueprint for a MongoDB collection. It defines the structure of documents, specifying what fields they contain and the type of data each field holds.

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
      name: [String],
      required: true,
    },

    director: {
      name: [String],
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
      default: "ENGLISH",
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model(Movie, movieSchema); // creating a model

module.exports = Movie; //returning model
