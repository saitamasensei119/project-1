// src/pages/ProductDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { category, id } = useParams(); // Lấy category và id từ URL
  const products = {
    phone: {
      1: {
        name: "iPhone 13 Pro",
        description: "Mô tả chi tiết về iPhone 13 Pro",
        price: "2000",
        image: "https://link_to_image_of_phone1.jpg",
      },
      2: {
        name: "Samsung Galaxy S21",
        description: "Mô tả chi tiết về Samsung Galaxy S21",
        price: "1800",
        image: "https://link_to_image_of_phone2.jpg",
      },
      // Thêm các sản phẩm điện thoại khác...
    },
    laptop: {
      1: {
        name: "MacBook Pro M1",
        description: "Mô tả chi tiết về MacBook Pro M1",
        price: "2500",
        image: "https://link_to_image_of_laptop1.jpg",
      },
      2: {
        name: "Dell XPS 13",
        description: "Mô tả chi tiết về Dell XPS 13",
        price: "2200",
        image: "https://link_to_image_of_laptop2.jpg",
      },
      // Thêm các sản phẩm laptop khác...
    },
    watch: {
      1: {
        name: "Citizen AW1780",
        description: [ "Đồng hồ Citizen 40 mm Nam AW1780-84L thuộc thương hiệu Citizen của Nhật Bản.",
    "Đồng hồ sở hữu đường kính mặt 40 mm, phù hợp với các bạn nam.",
    "Chất liệu mặt kính là kính khoáng (Mineral), có độ cứng và độ chịu lực tốt khi bị va đập, dễ dàng đánh bóng khi bị trầy xước nhẹ.",
    "Khung viền của đồng hồ làm từ thép không gỉ - chắc chắn và sáng bóng, hạn chế trầy xước.",
    "Chất liệu dây đeo được làm từ thép không gỉ - sang trọng và hạn chế ăn mòn, tạo cảm giác mát tay cho người dùng khi đeo.",
    "Đồng hồ được trang bị bộ máy Eco-Drive, hoạt động nhờ năng lượng ánh sáng, không cần thay pin."
        ],
        price: "7.500.000 ",
        image:
          "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7264/329997/citizen-aw1780-84a-nam-thumb-638629580911781236-600x600.jpg",
      },
      2: {
        name: "Samsung Galaxy Watch 4",
        description: "Mô tả chi tiết về Samsung Galaxy Watch 4",
        price: "350",
        image: "https://link_to_image_of_watch2.jpg",
      },
      // Thêm các sản phẩm đồng hồ khác...
    },
    // Thêm các danh mục khác nếu cần...
  };
const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

// Lưu giỏ hàng vào localStorage khi có thay đổi
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const addToCart = (product) => {
  setCart((prevCart) => [...prevCart, product]);
  alert("Sản phẩm đã được thêm vào giỏ hàng!");
};
const removeFromCart = (productId) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  alert("Sản phẩm đã được xóa khỏi giỏ hàng!");
};
  // Lấy sản phẩm theo danh mục và ID
  const product = products[category]?.[id];

  if (!product) {
    return <div>Không tìm thấy sản phẩm này!</div>;
  }


  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <div className="description">
            {product.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <h3>Giá: {product.price} VND</h3>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary"
          >
            Thêm vào giỏ hàng
          </button>
          <Link to="/cart" className="btn btn-secondary ml-2">
            Xem giỏ hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
