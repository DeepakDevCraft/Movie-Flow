const listMovieController = require("../controllers/listMovie.controllers.js");
const listMovie = (app) => {
  app.get("/mba/api/v1/movies", listMovieController);
};

module.exports = listMovie;
