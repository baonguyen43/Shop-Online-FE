import { InputNumber } from "antd";
import React from "react";

const Cart = React.forwardRef<HTMLDivElement>(({}): JSX.Element | null => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="cart-details">
          {/* TITLE */}
          <div className="cart-header">TITLE</div>

          <div className="cart-body">
            <div className="body-top">
              <div className="flex align-items-center">
                <a>NHA2 CUNG CAP</a>
              </div>
            </div>

            <div className="body-mid">
              <div className="mid-container">
                <div className="mid-cdisplay">
                  <div className="mid-product">
                    <img />
                    Ảnh sản phẩm
                    <div className="cart-title">
                      <a> Tên sản phẩm </a>
                    </div>
                    <div className="mid-price">
                      <div>
                        <span>giá cũ </span>
                        <span>giá đã giảm </span>
                      </div>
                    </div>
                    <div className="mid-quantity">
                      <InputNumber />
                    </div>
                    <div className="mid-total-price">
                      <a style={{ color: "red" }}>119, 200 d</a>
                    </div>
                    <div className="mid-del">
                      <span>XOA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});

Cart.displayName = "Cart";
export default Cart;
