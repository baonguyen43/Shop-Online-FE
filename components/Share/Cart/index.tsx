import { Button, InputNumber } from "antd";
import React from "react";

type Props = {
  cartDetails?: any;
};
const Cart = React.forwardRef<HTMLDivElement>(
  ({ cartDetails }: Props, _ref): JSX.Element | null => {
    return (
      <React.Fragment>
        <div className="container">
          <div className="cart-details">
            {/* TITLE */}
            <div className="cart-header">GIỎ HÀNG </div>

            {/* MAIN   */}

            <div className="cart-body">
              <div className="body-top">
                <div className="flex align-items-center">
                  <>NHÀ CUNG CẤP</>
                </div>
              </div>

              <div className="body-mid">
                <div className="mid-container">
                  <div className="mid-cdisplay">
                    <div className="mid-product">
                      <img />
                      Ảnh sản phẩm
                      <div className="mid-title">
                        <p> Tên sản phẩm </p>
                      </div>
                    </div>
                    <div className="mid-price">
                      <div>
                        <span>GIÁ CŨ </span>
                      </div>
                    </div>
                    <div className="mid-quantity">
                      SỐ LƯỢNG
                      <InputNumber />
                    </div>
                    <div className="mid-total-price">
                      <a style={{ color: "red" }}>119, 200 d</a>
                    </div>
                    <div className="mid-del">
                      <Button>XÓA</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {cartDetails &&
              cartDetails.map((c: any) => {
                <div className="cart-body" key={c.id}>
                  {c.body}
                </div>;
              })}

            <div>
              FOOTER
              <div>
                <p>Tổng thanh toán : </p>
                <Button> Mua hàng </Button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
);

Cart.displayName = "Cart";
export default Cart;
