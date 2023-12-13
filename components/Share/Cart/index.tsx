import { createOrder } from "@/#@/api/createOrder";
import { useCartStore } from "@/#@/hook/useCartStore";
import { Button, InputNumber, message } from "antd";
import React from "react";
import numeral from "numeral";
import { useRouter } from "next/router";
type Props = {};
const Cart = React.forwardRef<HTMLDivElement>(
  ({}: Props, _ref): JSX.Element | null => {
    const { items, itemCount, removeItem } = useCartStore();

    const router = useRouter();

    //tạo dấu phẩy hàng nghìn cho Price
    const formatPrice = (price: number) => {
      // return numeral(price).format("0,0");
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const calculateTotalPrice = (items: any) => {
      let totalPrice = 0;
      items.forEach((item: any) => {
        totalPrice += item.price * item.quantity;
      });
      return totalPrice;
    };
    // GET CUSTOMERID
    const [user, setUser] = React.useState<{
      id: number;
      address: string;
      phoneNumber: number;
      lastName: string;
    }>();

    React.useEffect(() => {
      if (typeof window !== "undefined") {
        const item: string | null = localStorage?.getItem("user");
        if (item) {
          const parsedItem = JSON.parse(item);
          setUser(parsedItem);
        }
      }
    }, []);

    // CREATE ORDER
    const handleCheckout = async () => {
      const orderData = {
        orderDetails: items.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
          discount: item.discount,
        })),
        shippingAddress: user?.address,
        shippingCity: "Giao hàng nhanh",
        customerId: user?.id,
        paymentType: "CASH",
        employeeId: 2,
      };
      // console.log("orderData :>> ", orderData);
      try {
        // Gửi yêu cầu POST để tạo đơn hàng
        const createdOrder = await createOrder(orderData);
        console.log("Đơn hàng đã được tạo:", createdOrder);
        message.success("Mua hàng thành công!");
        router.push("/");
      } catch (error) {
        console.error("Lỗi khi tạo đơn hàng:", error);
        message.info("Lỗi mua hàng!");
      }
    };
    return (
      <React.Fragment>
        <div className="container">
          <div className="cart-details">
            <div> Thông tin khách hàng </div>
            <div style={{ fontSize: "14px" }}>
              <div>
                {" "}
                <span>Tên: {user?.lastName} </span>
              </div>
              <div>
                <span>Số điện thoại: {user?.phoneNumber} </span>
              </div>
              <div>Địa chỉ: {user?.address} </div>
            </div>

            {/* TITLE */}
            {/* <div className="cart-header">GIỎ HÀNG</div> */}

            {itemCount > 0 ? (
              /* MAIN */
              <div className="cart-body">
                <div className="body-top">
                  <div className="flex align-items-center"> GIỎ HÀNG </div>
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <p>
                    Tổng thanh toán: {formatPrice(calculateTotalPrice(items))} đ{" "}
                  </p>
                  <Button onClick={handleCheckout}>Mua hàng</Button>
                </div>
              </div>
            ) : (
              // INFO CUSTOMER

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
