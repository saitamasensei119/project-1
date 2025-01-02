import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../CategoriesPage/CategoryWatch.module.css"; // Import CSS module

const CategoryWatch = () => {
     const { category } = "watch";
  // State để lưu ảnh được chọn
  const [selectedImage, setSelectedImage] = useState(null);

  // Dữ liệu sản phẩm đồng hồ
  const products = [
    {
      id: 1,
      name: "Citizen AW1780",
      image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7264/329997/citizen-aw1780-84a-nam-thumb-638629580911781236-600x600.jpg",
      price: "7.500.000 VND",
    },
    {
      id: 2,
      name: "Casio MTP-V002D",
      image: "https://product.hstatic.net/1000122386/product/mtp-v002d-1b_master.png",
      price: "1.800.000 VND",
    },
    {
      id: 3,
      name: "Citizen AW1780",
      image: "https://product.hstatic.net/1000223154/product/z2983814425616_0cd8c821bf9ae796e317ef8e75ce9b7e_40e14a907374487d9e41c964ee6c9da3_master.jpg",
      price: "7.500.000 VND",
    },
    {
      id: 4,
      name: "Citizen AW1780",
      image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7264/329997/citizen-aw1780-84a-nam-thumb-638629580911781236-600x600.jpg",
      price: "7.500.000 VND",
    },
    {
      id: 5,
      name: "Citizen AW1780",
      image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7264/329997/citizen-aw1780-84a-nam-thumb-638629580911781236-600x600.jpg",
      price: "7.500.000 VND",
    },
    {
      id: 6,
      name: "Citizen AW1780",
      image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7264/329997/citizen-aw1780-84a-nam-thumb-638629580911781236-600x600.jpg",
      price: "7.500.000 VND",
    },
  ];

  // Hàm mở modal
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Danh mục Đồng hồ</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card">
              <div
                className="img-container"
                onClick={() => openModal(product.image)}
              >
                <img
                  src={product.image}
                  className={`${styles.cardImgTop} img-fluid`}
                  alt={product.name}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <Link
                  to={`/categories/watch/${product.id}`}
                  className="btn btn-primary"
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className={styles.modalImage}
            />
            <button className={styles.closeButton} onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryWatch;
