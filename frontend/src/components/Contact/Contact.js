import React from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={`container ${styles.contactContainer}`}>
      <h2 className="text-center mb-4">Liên Hệ</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Họ và tên</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập họ và tên"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Nhập email của bạn"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Số điện thoại</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Nhập số điện thoại"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nội dung</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Nhập nội dung liên hệ"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Gửi
        </button>
      </form>

      <div className="text-center mt-3">
        <Link to="/" className="text-decoration-none">
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
}

export default Contact;

