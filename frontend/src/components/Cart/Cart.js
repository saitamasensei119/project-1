import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce(
    (acc, product) =>
      acc +
      parseFloat(
        product.price.replace(" VND", "").replace(".", "").replace(",", "")
      ),
    0
  );

  return (
    <div className="container my-5">
      <h2>Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div className="row">
          {cart.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3>Tổng tiền: {total.toLocaleString()} VND</h3>
      <Link to="/checkout" className="btn btn-success">
        Thanh toán
      </Link>
    </div>
  );
};

export default Cart;
