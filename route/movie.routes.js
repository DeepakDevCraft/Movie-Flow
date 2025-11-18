const {
  createMovie,
  listMovieController,
  getMovieById,
  deleteMovieById,
} = require("../controllers/movie.controllers.js");

const movie = (app) => {
  // Create movie
  app.post("/mba/api/v1/movie", createMovie);

  // List all movies
  app.get("/mba/api/v1/movies", listMovieController);

  // Get movie by ID (either as path param)
  app.get("/mba/api/v1/movie/:id", getMovieById);
  app.delete("/mba/api/v1/movie/:id", deleteMovieById);
};

module.exports = { movie };
