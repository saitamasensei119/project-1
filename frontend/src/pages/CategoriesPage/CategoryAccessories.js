// src/pages/CategoryAccessories.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "../CategoriesPage/CategoryAccessories.module.css"; // Import CSS module

const CategoryAccessories = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Danh mục Phụ kiện</h2>
      <div className="row">
        {/* Sản phẩm 1 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="img-container">
              <img
                src="https://gomhang.vn/wp-content/uploads/2022/09/Tai-nghe-Bluetooth-Airpods-3-Te-giac-ava.jpg"
                className={`${styles.cardImgTop} img-fluid`}
                alt="AirPods 3"
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">AirPods 3</h5>
              <p className="card-text">Giá: 3.500.000 VND</p>
              <Link to="/product/1" className="btn btn-primary">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>

        {/* Sản phẩm 2 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="img-container">
              <img
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FV1_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=1725492498882"
                className={`${styles.cardImgTop} img-fluid`}
                alt="AirPods Pro 2"
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">AirPods Pro 2</h5>
              <p className="card-text">Giá: 5.200.000 VND</p>
              <Link to="/product/2" className="btn btn-primary">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>

        {/* Sản phẩm 3 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="img-container">
              <img
                src="https://samcenter.vn/images/thumbs/0001518_galaxy-buds-2-pro.jpeg"
                className={`${styles.cardImgTop} img-fluid`}
                alt="Samsung Galaxy Buds2 Pro"
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Galaxy Buds2 Pro</h5>
              <p className="card-text">Giá: 4.500.000 VND</p>
              <Link to="/product/3" className="btn btn-primary">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>

        {/* Sản phẩm 4 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="img-container">
              <img
                src="https://cdn.tgdd.vn/Products/Images/9499/230266/230266-600x600.jpg"
                className={`${styles.cardImgTop} img-fluid`}
                alt="Sạc Anker"
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Sạc Anker</h5>
              <p className="card-text">Giá: 350.000 VND</p>
              <Link to="/product/4" className="btn btn-primary">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>

        {/* Sản phẩm 5 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="img-container">
              <img
                src="https://cdn.tgdd.vn/Products/Images/9499/211866/sac-khong-day-9w-qi-type-c-samsung-ep-p1100-den-avatar-1-1-600x600.jpg"
                className={`${styles.cardImgTop} img-fluid`}
                alt="Sạc không dây Samsung"
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Sạc không dây Samsung</h5>
              <p className="card-text">Giá: 1.200.000 VND</p>
              <Link to="/product/5" className="btn btn-primary">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>

        {/* Sản phẩm 6 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="img-container">
              <img
                src="https://cdn.mediamart.vn/images/Upload/download/2019-4-News/i7VSo4u0URr12ER.jpg"
                className={`${styles.cardImgTop} img-fluid`}
                alt="Chuột Rapoo 7100P"
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Chuột Rapoo 7100P</h5>
              <p className="card-text">Giá: 550.000 VND</p>
              <Link to="/product/6" className="btn btn-primary">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryAccessories;
