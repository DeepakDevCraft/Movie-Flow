const express = require("express");
const dotenv = require("dotenv");
const connection = require("./db.js");
const movie = require("./route/movie.routes.js");

dotenv.config();

const app = express();
app.use(express.json()); // ✅ Middleware to parse JSON

const PORT = process.env.PORT || 3000;

movie(app);

app.use("/home", (req, res) => {
  res.status(200).json({ message: "route testing" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port-${PORT}`);
  connection();
});
