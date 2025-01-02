// src/pages/CategoryPhone.js
import React from "react";
import { Link } from "react-router-dom";


const CategoryPhone = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Danh mục Điện thoại</h2>
      <div className="row">
        {/* Sản phẩm 1 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/329151/iphone-16-pro-max-titan-sa-mac-thumbtgdd-600x600.png"
              className="card-img-top"
              alt="iPhone 16 Pro Max"
            />
            <div className="card-body text-center">
              <h5 className="card-title">iPhone 16 Pro Max</h5>
              <p className="card-text">Giá: 25.000.000 VND</p>
              <Link to="/product/1" className="btn btn-primary">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>

        {/* Sản phẩm 2 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://product.hstatic.net/200000525189/product/dien-thoai-iphone-13-pro-max-512gb-xam-1_88ccb92595e544f79821cc1c483de4c2.jpg"
              className="card-img-top"
              alt="iPhone 13 Pro Max"
            />
            <div className="card-body text-center">
              <h5 className="card-title">iPhone 13 Pro Max</h5>
              <p className="card-text">Giá: 22.000.000 VND</p>
              <Link to="/product/2" className="btn btn-primary">
                Xem chi tiết
              </Link >
            </div>
          </div>
        </div>

        {/* Sản phẩm 3 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://cdn2.cellphones.com.vn/x/media/catalog/product/s/m/sm-g990_s21fe_backfront_lg.png"
              className="card-img-top"
              alt="Samsung Galaxy S21 FE"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Samsung Galaxy S21 FE</h5>
              <p className="card-text">Giá: 14.990.000 VND</p>
              <Link to="/product/3" className="btn btn-primary">
                Xem chi tiết
              </Link >
            </div>
          </div>
        </div>

        {/* Sản phẩm 4 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://product.hstatic.net/1000259254/product/iphone_12_pro_gold_a721213859a34b9ebc35d46c15024acf_grande.jpg"
              className="card-img-top"
              alt="iPhone 12 Pro Max"
            />
            <div className="card-body text-center">
              <h5 className="card-title">iPhone 12 Pro Max</h5>
              <p className="card-text">Giá: 18.500.000 VND</p>
              <Link to="/product/4" className="btn btn-primary">
                Xem chi tiết
              </Link >
            </div>
          </div>
        </div>

        {/* Sản phẩm 5 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/258167/realme-gt-2-pro-050122-080902-600x600.jpg"
              className="card-img-top"
              alt="Realme GT 2 Pro"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Realme GT 2 Pro</h5>
              <p className="card-text">Giá: 13.500.000 VND</p>
              <Link to="/product/5" className="btn btn-primary">
                Xem chi tiết
              </Link >
            </div>
          </div>
        </div>

        {/* Sản phẩm 6 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/235440/samsung-galaxy-a52-5g-thumb-black-600x600-600x600.jpg"
              className="card-img-top"
              alt="Samsung Galaxy A52 5G"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Samsung Galaxy A52 5G</h5>
              <p className="card-text">Giá: 10.990.000 VND</p>
              <Link to="/product/6" className="btn btn-primary">
                Xem chi tiết
              </Link >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPhone;
