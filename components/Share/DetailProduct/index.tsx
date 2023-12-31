import { useCartStore } from "@/#@/hook/useCartStore";
import axiosClient from "@/#@/libraries/axiosClient";
import { Form, InputNumber } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";

type Props = {
  productDetail?: any;
};
const DetailProduct = React.forwardRef<HTMLDivElement, Props>(
  ({ productDetail }: Props, _ref): JSX.Element | null => {
    const { addItem } = useCartStore();

    const [user, setUser] = React.useState();

    const [quantity, setQuantity] = useState<number>(1);
    //FORMAT GIÁ
    const formatPrice = (price: number) => {
      //tạo dấu phẩy hàng nghìn cho Price
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const discountedPrice =
      productDetail?.price -
      (productDetail?.price * productDetail?.discount) / 100;

    //Giá sau giảm giá
    const formatTotal = formatPrice(discountedPrice);

    const numericPrice = parseFloat(formatTotal.replace(/[^0-9.-]+/g, ""));

    // GET CUSTOMERID
    React.useEffect(() => {
      if (typeof window !== "undefined") {
        const item: string | null = localStorage?.getItem("user");
        if (item) {
          const parsedItem = JSON.parse(item);
          setUser(parsedItem);
        }
      }
    }, []);
    // console.log("user state :>> ", user);

    // const addToCart = async (productDetail: any, user: any) => {
    //   const customerId = user?.id; // Lấy customerId từ user state
    //   const productId = productDetail.id;
    //   // console.log("productDetail:>> ", productDetail);
    //   // console.log("Customer:>> ", user);
    //   if (quantity !== null) {
    //     // console.log("quantity:>> ", quantity);
    //     console.log("productId:>> ", productId);
    //     console.log("quantity:>> ", quantity);
    //     // await axiosClient
    //     //   .post("/cart", {
    //     //     customerId: customerId,
    //     //     productId: productId,
    //     //     quantity: quantity,
    //     //   })

    //     //   .then((response) => {
    //     //     console.log("data:>> ", response.data);
    //     //   })
    //     //   .catch((error) => {
    //     //     console.error("Lỗi:", error);
    //     //   });
    //   }
    // };

    return (
      <React.Fragment>
        <div className="detail-product">
          {productDetail && (
            <div className="container">
              {/* IMAGE */}

              <div className="left-column">
                {" "}
                <Image
                  priority
                  style={{ borderRadius: "10px" }}
                  src={productDetail.imagePath}
                  alt="sp"
                  width={350}
                  height={450}
                />{" "}
              </div>

              {/* CONTENT */}
              <div className="right-column">
                <div className="right-top">
                  <div className="body">
                    <div className="header">{productDetail.name} </div>
                    <div className="section" style={{ marginTop: "10px" }}>
                      {/* PRICE */}
                      <div className="price">
                        <span
                          style={{
                            fontSize: "1.5rem",
                            marginRight: "10px",
                            textDecoration: "line-through",
                          }}
                        >
                          {formatPrice(productDetail.price)}₫
                        </span>{" "}
                        <div className="flex items-center">
                          <span
                            style={{
                              fontSize: "1.875rem",
                              fontWeight: "500",
                              color: "#821920",
                            }}
                          >
                            {formatTotal}₫
                          </span>
                          <span
                            style={{
                              marginLeft: "8px",
                              backgroundColor: "#821920",
                              color: "white",
                              borderRadius: "5px",
                            }}
                          >
                            -{productDetail.discount}%
                          </span>{" "}
                        </div>
                      </div>
                    </div>

                    {/* SỐ LƯỢNG */}
                    <div className="section">
                      <span style={{ marginRight: "65px" }}> Số lượng: </span>
                      <span>
                        <Form>
                          {" "}
                          <Form.Item name="input-number" noStyle>
                            <InputNumber
                              min={1}
                              max={100}
                              defaultValue={quantity ?? 1}
                              onChange={(value) => setQuantity(value as number)}
                            />
                          </Form.Item>{" "}
                        </Form>
                        <i style={{ fontSize: "12px" }}>
                          Số lượng sản phẩm có sẵn {productDetail.stock}
                        </i>{" "}
                      </span>
                    </div>

                    {/* BUTTON */}
                    <div className="section">
                      <div>
                        <div
                          style={{ cursor: "pointer" }}
                          className="default-btn gap-2"
                          onClick={() =>
                            // addToCart(productDetail, user)
                            {
                              console.log(
                                "Thêm vào giỏ hàng",
                                productDetail.id
                              );
                              addItem({
                                id: productDetail.id,
                                name: productDetail.name,
                                price: numericPrice,
                                quantity: quantity,
                                discount: productDetail.discount,
                                // thumb: productDetail.imagePath,
                              });
                            }
                          }
                        >
                          Thêm vào giỏ hàng
                        </div>
                      </div>
                      <div style={{ paddingLeft: "20px" }}>
                        <Link legacyBehavior href="/cart">
                          <div className="default-btn">Mua ngay</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
);

DetailProduct.displayName = "DetailProduct";
export default DetailProduct;
