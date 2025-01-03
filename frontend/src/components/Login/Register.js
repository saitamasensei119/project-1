import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "", // Thêm trường số điện thoại
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký tại đây
    alert("Đăng ký thành công!");
  };

  return (
    <div className={styles.RegisterContainer}>
      <div className={`container ${styles.container}`}>
        <h2 style={{ textAlign: "center" }}>Đăng Ký</h2>
        <form onSubmit={handleSubmit}>
          <div className={`form-group ${styles["form-group"]}`}>
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              type="text"
              id="username"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`form-group ${styles["form-group"]}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`form-group ${styles["form-group"]}`}>
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="text"
              id="phone"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={`form-group ${styles["form-group"]}`}>
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={`btn btn-primary ${styles.button}`}>
            Đăng ký
          </button>
        </form>

        <div className="mt-3">
          <p>
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập ngay!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
