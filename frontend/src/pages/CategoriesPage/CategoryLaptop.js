// src/pages/CategoryLaptop.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryLaptop.module.css"; // Import CSS module

const CategoryLaptop = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Danh mục Laptop</h2>
      <div className="row">
        {/* Sản phẩm 1 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://surfaceviet.vn/wp-content/uploads/2024/05/Surface-Laptop-7-Platinum-13.8-inch.jpg"
              className={`${styles.cardImgTop} img-fluid`}
              alt="Surface Laptop 7"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Surface Laptop 7</h5>
              <p className="card-text">Giá: 28.000.000 VND</p>
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
              src="https://cdn.tgdd.vn/Products/Images/44/314630/acer-aspire-5-a515-58gm-51lb-i5-nxkq4sv002-170923-015941-600x600.jpg"
              className={`${styles.cardImgTop} img-fluid`}
              alt="Acer Aspire 5"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Acer Aspire 5</h5>
              <p className="card-text">Giá: 12.500.000 VND</p>
              <Link to="/product/2" className="btn btn-primary">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>

        {/* Sản phẩm 3 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://bizweb.dktcdn.net/thumb/grande/100/410/941/products/46617-msi-stealth-gs66-ha5.png?v=1661158186473"
              className={`${styles.cardImgTop} img-fluid`}
              alt="MSI GS66 Stealth"
            />
            <div className="card-body text-center">
              <h5 className="card-title">MSI GS66 Stealth</h5>
              <p className="card-text">Giá: 45.000.000 VND</p>
              <Link to="/product/3" className="btn btn-primary">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>

        {/* Sản phẩm 4 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://product.hstatic.net/1000331874/product/dell_xps_9320_722c6227ecc04c648c670f1bbb7b7cfd_1024x1024.jpg"
              className={`${styles.cardImgTop} img-fluid`}
              alt="Dell XPS 13"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Dell XPS 13</h5>
              <p className="card-text">Giá: 32.000.000 VND</p>
              <Link to="/product/4" className="btn btn-primary">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>

        {/* Sản phẩm 5 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://laptoptv.vn/wp-content/uploads/2023/11/2239_laptopaz_asus_rog_strix_g15_g513qm_hq283t_1.jpg"
              className={`${styles.cardImgTop} img-fluid`}
              alt="ASUS ROG Strix G15"
            />
            <div className="card-body text-center">
              <h5 className="card-title">ASUS ROG Strix G15</h5>
              <p className="card-text">Giá: 36.000.000 VND</p>
              <Link to="/product/5" className="btn btn-primary">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>

        {/* Sản phẩm 6 */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://cdn.tgdd.vn/Products/Images/44/302984/hp-elitebook-dragonfly-g3-i7-6z980pa-070323-114211-600x600.jpg"
              className={`${styles.cardImgTop} img-fluid`}
              alt="HP Elite Dragonfly"
            />
            <div className="card-body text-center">
              <h5 className="card-title">HP Elite Dragonfly</h5>
              <p className="card-text">Giá: 52.000.000 VND</p>
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

export default CategoryLaptop;
