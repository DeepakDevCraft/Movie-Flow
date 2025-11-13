const {
  createMovie,
  listMovieController,
  getMovieById,
} = require("../controllers/movie.controllers.js");

const movie = (app) => {
  // Create movie
  app.post("/mba/api/v1/movie", createMovie);

  // List all movies
  app.get("/mba/api/v1/movies", listMovieController);

  // Get movie by ID (either as path param or query param)
  app.get("/mba/api/v1/movie/:id", getMovieById);
};

module.exports = { movie };
