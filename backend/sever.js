// src/server.js
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Kết nối database
connectDB();

// Middleware
app.use(express.json());

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
