import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container text-center">
        <p className="mb-2">© 2025 Shop của Đạt. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="/privacy-policy">Chính sách bảo mật</a>
          <a href="/terms">Điều khoản sử dụng</a>
          <a href="/contact">Liên hệ</a>
        </div>
        <div className="mt-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="me-2"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="me-2"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
