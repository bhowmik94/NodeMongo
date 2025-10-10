const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("🔍 Using Mongo URI:", process.env.MONGO_URI);
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("✅ MongoDB Connected"))
      .catch((err) => console.error("❌ MongoDB Connection Error:", err));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
