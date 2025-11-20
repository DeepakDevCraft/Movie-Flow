const { Model } = require("mongoose");
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

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params; // extract id from route params

    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        error: "Movie not found",
        response: {},
        message: "No movie found with the given ID",
      });
    }

    return res.status(200).json({
      success: true,
      error: {},
      response: movie,
      message: "Movie fetched successfully",
    });
  } catch (err) {
    console.error("❌ Error fetching movie by ID:", err);
    return res.status(500).json({
      success: false,
      error: err.message,
      response: {},
      message: "Something went wrong while fetching the movie",
    });
  }
};

// list all movies

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

const deleteMovieById = async (req, res) => {
  try {
    const { id } = req.params; // extract id from route params
    console.log("movie deleted", id);

    const movie = await Movie.deleteOne({ __id: id });

    if (!movie) {
      return res.status(404).json({
        success: false,
        error: "Movie not found",
        response: {},
        message: "No movie found with the given ID",
      });
    }

    return res.status(200).json({
      success: true,
      error: {},
      response: movie,
      message: "Movie deleted successfully",
    });
  } catch (err) {
    console.error("❌ Error deleting movie by ID:", err);
    return res.status(500).json({
      success: false,
      error: err.message,
      response: {},
      message: "Something went wrong while deleting the movie",
    });
  }
};
module.exports = {
  createMovie,
  listMovieController,
  getMovieById,
  deleteMovieById,
};

//module.exports = { createMovie, listMovieController };
