import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleGoogleLogin = () => {
    // Xử lý logic đăng nhập Google tại đây
    alert("Đăng nhập bằng Google chưa được triển khai!");
  };

  const handleFacebookLogin = () => {
    // Xử lý logic đăng nhập Facebook tại đây
    alert("Đăng nhập bằng Facebook chưa được triển khai!");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.header}>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className={`form-group ${styles.inputGroup}`}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={`form-group ${styles.inputGroup}`}>
            <label htmlFor="password">Mật khẩu:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.btnSubmit}>
            Đăng nhập
          </button>
          <a href="/forgot-password" className={styles.link}>
            Quên mật khẩu?
          </a>
          <button
            className={`btn btn-outline-danger w-100 ${styles.socialButton}`}
            onClick={handleGoogleLogin}
          >
            <i className="bi bi-google"></i> Login with Google
          </button>
          <button
            className={`btn btn-outline-primary w-100 ${styles.socialButton}`}
            onClick={handleFacebookLogin}
          >
            <i className="bi bi-facebook"></i> Login with Facebook
          </button>
          <a href="/register" className={styles.link}>
            Chưa có tài khoản? Đăng kí
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
