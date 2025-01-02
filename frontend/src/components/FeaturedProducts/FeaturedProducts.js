import React from "react";
import styles from "./FeaturedProducts.module.css";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "Điện thoại iPhone 13",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-midnight-2-600x600.jpg",
      price: "20,000,000 VND",
      link: "/product/iphone-13",
    },
    {
      id: 2,
      name: "Laptop Dell XPS 13",
      image:
        "https://bizweb.dktcdn.net/thumb/grande/100/512/769/products/dell-xps-13-9340-2.webp?v=1716793972937",
      price: "25,000,000 VND",
      link: "/product/dell-xps-13",
    },
    {
      id: 3,
      name: "Tai nghe AirPods Pro",
      image:
        "https://cdn.tgdd.vn/Products/Images/54/315014/s16/tai-nghe-bluetooth-airpods-pro-2nd-gen-usb-c-charge-apple-thumb-12-1-650x650.png",
      price: "6,000,000 VND",
      link: "/product/airpods-pro",
    },
    {
      id: 4,
      name: "Smartwatch Samsung Galaxy Watch 4",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/vn/2108/gallery/vn-galaxy-watch4-398976-sm-r870nzkaxxv-thumb-481128228",
      price: "8,000,000 VND",
      link: "/product/galaxy-watch-4",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Sản phẩm nổi bật</h2>
      <div className="row">
        {featuredProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className={`card ${styles.card}`}>
              <img
                src={product.image}
                className="card-img-top img-fluid"
                alt={product.name}
              />
              <div className={`card-body ${styles.cardBody}`}>
                <h5 className={styles.cardTitle}>{product.name}</h5>
                <p className="card-text text-center">{product.price}</p>
                <Link to={product.link} className="btn btn-primary">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
