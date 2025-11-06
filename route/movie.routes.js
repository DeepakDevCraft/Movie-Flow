const createMovie = require("../controllers/movie.controllers.js");

const movie = (app) => {
  app.post("/mba/api/v1/movie", createMovie);
};

module.exports = movie;
