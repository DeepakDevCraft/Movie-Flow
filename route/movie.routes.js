const Movie = require("../models/movie.model.js");

const movie = (app) => {
  app.post("/api/v1/mba", async (req, res) => {
    const body = req.body;
    console.log("some one calling me");

    try {
      // Create and save the new movie
      const newMovie = new Movie(body);
      await newMovie.save();

      return res.status(201).json({
        success: "true",
        error: {},
        response: newMovie,
        message: "Successfully created new movie",
      });
    } catch (err) {
      console.error(err);

      return res.status(500).json({
        success: "true",
        error: err.message,
        response: {},
        message: "Something went wrong",
      });
    }
  });
};

module.exports = movie;
