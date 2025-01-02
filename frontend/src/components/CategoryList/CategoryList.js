import React from "react";
import { Link } from "react-router-dom";

function CategoryList() {
  const categories = [
    {
      id: 1,
      name: "Điện thoại",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/329151/iphone-16-pro-max-titan-sa-mac-thumbtgdd-600x600.png",
      link: "/categories/phone",
    },
    {
      id: 2,
      name: "Laptop",
      image:
        "https://surfaceviet.vn/wp-content/uploads/2024/05/Surface-Laptop-7-Platinum-13.8-inch.jpg",
      link: "/categories/laptop",
    },
    {
      id: 3,
      name: "Phụ kiện",
      image:
        "https://gomhang.vn/wp-content/uploads/2022/09/Tai-nghe-Bluetooth-Airpods-3-Te-giac-ava.jpg",
      link: "/categories/accessories",
    },
    {
      id: 4,
      name: "Đồng hồ",
      image:
        "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/7264/329997/citizen-aw1780-84a-nam-thumb-638629580911781236-600x600.jpg",
      link: "/categories/watch",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Danh mục sản phẩm</h2>
      <div className="row">
        {categories.map((category) => (
          <div className="col-md-3 mb-4" key={category.id}>
            <Link to={category.link} className="text-decoration-none">
              <div className="card h-100">
                <img
                  src={category.image}
                  className="card-img-top"
                  alt={category.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{category.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
