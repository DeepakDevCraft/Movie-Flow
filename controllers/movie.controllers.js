const Movie = require("../models/movie.model.js");

const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();

    return res.status(201).json({
      success: true,
      error: {},
      response: newMovie,
      message: "Successfully created new movie",
    });
  } catch (err) {
    console.error("❌ Error creating movie:", err);

    return res.status(500).json({
      success: false,
      error: err.message,
      response: {},
      message: "Something went wrong",
    });
  }
};

module.exports = createMovie;
