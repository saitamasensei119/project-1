import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="jumbotron text-center bg-light">
      <div className="container py-5">
        <h1 className="display-4">Chào mừng đến với Shop của chúng tôi!</h1>
        <p className="lead">
          Tìm kiếm sản phẩm bạn yêu thích với giá cả hợp lý và dịch vụ tuyệt
          vời.
        </p>
        <Link to="/shop" className="btn btn-primary btn-lg">
          Khám phá ngay
        </Link>
      </div>
    </div>
  );
}

export default Banner;
