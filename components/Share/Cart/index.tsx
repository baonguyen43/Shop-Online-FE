import { useCartStore } from "@/#@/hook/useCartStore";
import { Button, InputNumber } from "antd";
import React from "react";

type Props = {};
const Cart = React.forwardRef<HTMLDivElement>(
  ({}: Props, _ref): JSX.Element | null => {
    const {
      items,
      total,
      itemCount,
      removeItem,
      increaseQuantity,
      decreaseQuantity,
    } = useCartStore();

    //tạo dấu phẩy hàng nghìn cho Price
    const formatPrice = (price: number) => {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (
      <React.Fragment>
        <div className="container">
          <div className="cart-details">
            {/* TITLE */}
            <div className="cart-header">GIỎ HÀNG</div>

            {itemCount > 0 ? (
              /* MAIN */
              <div className="cart-body">
                <div className="body-top">
                  <div className="flex align-items-center">
                    <span>NHÀ CUNG CẤP</span>
                  </div>
                </div>

                {/* DATA HERE  */}
                {items.map((item: any) => {
                  return (
                    <div className="body-mid" key={item.id}>
                      <div className="mid-container">
                        <div className="mid-cdisplay">
                          <div className="mid-product">
                            {/* <img src={item.thumb} alt="Ảnh sản phẩm" /> */}
                            <div className="mid-title">
                              <p>{item.name}</p>
                            </div>
                          </div>
                          <div className="mid-price">
                            <div>
                              <span> {formatPrice(item.price)}đ </span>
                            </div>
                          </div>
                          <div className="mid-quantity">
                            SỐ LƯỢNG
                            <InputNumber value={item.quantity} />
                          </div>
                          <div className="mid-total-price">
                            <a style={{ color: "red" }}>
                              {formatPrice(item.price * item.quantity)}đ
                            </a>
                          </div>
                          <div className="mid-del">
                            <Button onClick={() => removeItem(item.id)}>
                              XÓA
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* TINH TIEN */}
                <div>
                  <p>Tổng thanh toán: {formatPrice(total)} đ </p>
                  <Button>Mua hàng</Button>
                </div>
              </div>
            ) : (
              <div>CART EMPTY</div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
);

Cart.displayName = "Cart";
export default Cart;
