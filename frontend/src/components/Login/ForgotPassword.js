import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi yêu cầu quên mật khẩu tại đây
    alert("Đã gửi yêu cầu quên mật khẩu!");
  };

  return (
    <div className={styles.PageContainer}>
      <div className={`container ${styles.container}`}>
        <h2 className="text-center">Quên Mật Khẩu</h2>
        <div className={styles.formGroup}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${styles.button}`}
            >
              Gửi yêu cầu
            </button>
          </form>
        </div>

        <div className={styles.link}>
          <p>
            Bạn đã nhớ mật khẩu? <Link to="/login">Đăng nhập ngay!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
