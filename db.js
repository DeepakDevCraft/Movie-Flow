const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/Movie")
    .then(() => {
      console.log("✅ Connected to MongoDB successfully!");
    })
    .catch(() => {
      console.error("❌ Error connecting to MongoDB:", err);
    });
};

module.exports = connectDB;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/Movie");
//     console.log("✅ Connected to MongoDB successfully!");
//   } catch (err) {
//     console.error("❌ Error connecting to MongoDB:", err);
//   }
// };

// module.exports = connectDB;
