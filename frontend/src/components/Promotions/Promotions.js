import React from "react";
import { Link } from "react-router-dom";
import styles from "./Promotions.module.css";

const promotions = [
  {
    id: 1,
    title: "Khuyến mãi bạt ngàn",
    description: "Áp dụng cho tất cả các sản phẩm vào thứ 6 hàng tuần.",
    image:
      "https://cdn.tuoitre.vn/thumb_w/480/2021/12/10/anh-2-1639135312277431980256.png",
  },
  {
    id: 2,
    title: "Flash sale vô địch",
    description: "Dành riêng cho khách hàng thành viên VIP.",
    image:
      "https://images.bloggiamgia.vn/full/08-02-2023/Flash-sale-gia-re-vo-djich-1-1675866602786.png",
  },
  {
    id: 3,
    title: "Miễn phí giao hàng",
    description: "Áp dụng cho đơn hàng trên 500.000đ.",
    image:
      "https://stc.shopiness.vn/deal/2020/12/18/b/9/8/6/1608260808085_540.png",
  },
];

function Promotions() {
  return (
    <div className={styles.PageContainer}>
      <div className={`container ${styles.container}`}>
        <h2 className="text-center mb-4">Chương Trình Khuyến Mãi</h2>
        <div className="row">
          {promotions.map((promo) => (
            <div key={promo.id} className="col-md-4">
              <div className={`card ${styles.card}`}>
                <img
                  src={promo.image}
                  className={`card-img-top ${styles["card-img-top"]}`}
                  alt={promo.title}
                />
                <div className="card-body">
                  <h5 className={`card-title ${styles["card-title"]}`}>
                    {promo.title}
                  </h5>
                  <p className={styles.cardText}>{promo.description}</p>
                  <Link
                    to={`/promotions/${promo.id}`}
                    className="btn btn-primary"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Promotions;
