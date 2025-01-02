import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="bg-light py-3 border-bottom">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="navbar-brand fw-bold">
          <img
            src={
              "https://e7.pngegg.com/pngimages/684/352/png-clipart-one-punch-man-saitama-anime-superhero-one-punch-child-face.png"
            }
            alt="Shop Logo"
            className="rounded-circle"
            style={{ height: "50px", width: "50px" }}
          />
        </Link>

        {/* Search Bar */}
        <form className="d-flex flex-grow-1 mx-3">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <button className="btn btn-primary" type="submit">
            Tìm kiếm
          </button>
        </form>

        {/* Navigation Menu */}
        <nav className="d-none d-md-flex">
          <Link to="/categories" className="nav-link px-2">
            Danh mục
          </Link>
          <Link to="/promotions" className="nav-link px-2">
            Khuyến mãi
          </Link>
          <Link to="/contact" className="nav-link px-2">
            Liên hệ
          </Link>
        </nav>

        {/* User & Cart */}
        <div className="d-flex">
          <Link to="/login" className="btn btn-outline-primary me-2">
            Đăng nhập
          </Link>
          <Link to="/cart" className="btn btn-primary">
            Giỏ hàng
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
