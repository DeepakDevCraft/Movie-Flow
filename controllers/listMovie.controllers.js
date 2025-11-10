const Movie = require("../models/movie.model.js");

const listMovieController = async (req, res) => {
  try {
    const movies = await Movie.find();

    return res.status(200).json({
      success: true,
      error: {},
      response: movies,
      message: "Fetched all movies successfully",
    });
  } catch (err) {
    console.error("❌ Error fetching movies:", err);

    return res.status(500).json({
      success: false,
      error: err.message,
      response: [],
      message: "Something went wrong while fetching movies",
    });
  }
};

module.exports = listMovieController;
