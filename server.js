const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const app = require("./app");

connectDB();

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));