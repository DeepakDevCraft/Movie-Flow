const express = require("express");
const dotenv = require("dotenv");
const connection = require("./db.js");
const { movie } = require("./route/movie.routes.js");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

movie(app); // ✅ includes both POST and GET

app.use("/home", (req, res) => {
  res.status(200).json({ message: "route testing" });
});

app.listen(PORT, async () => {
  console.log(`Server is running on port-${PORT}`);
  connection(); // ✅ ensure DB connects before handling requests
});
