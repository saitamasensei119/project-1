// src/config/db.js
const sql = require("mssql");
require("dotenv").config();

const connectDB = async () => {
  try {
    await sql.connect({
      server: process.env.DB_SERVER,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      options: {
        encrypt: true, // Nếu bạn sử dụng Azure hoặc SSL
        trustServerCertificate: true, // Để bỏ qua cảnh báo SSL
      },
    });
    console.log("Kết nối SQL Server thành công");
  } catch (error) {
    console.error("Kết nối SQL Server thất bại", error);
    process.exit(1); // Dừng server nếu không kết nối được
  }
};

module.exports = connectDB;
