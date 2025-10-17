const express = require("express");
const app = express(); //app is a object which return express() function. but if you check the typeof app it will show function.

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use("/home", (req, res) => {
  return res.status(200).json({
    message: "route testing",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port-${PORT}`);
});
