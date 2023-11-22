import { Form, InputNumber } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  productDetail?: any;
};
const DetailProduct = React.forwardRef<HTMLDivElement, Props>(
  ({ productDetail }: Props, ref): JSX.Element | null => {
    const formatPrice = (price: number) => {
      //tạo dấu phẩy hàng nghìn cho Price
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const discountedPrice =
      productDetail.price -
      (productDetail.price * productDetail.discount) / 100;

    const formatTotal = formatPrice(discountedPrice);

    return (
      <React.Fragment>
        <div className="detail-product">
          {productDetail && (
            <div className="container">
              {/* IMAGE */}
              <div className="left-column">
                {" "}
                <Image
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
                          {productDetail.price}₫
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

                    <div className="section">
                      <span style={{ marginRight: "65px" }}> Số lượng: </span>
                      <span>
                        <Form.Item name="input-number" noStyle>
                          <InputNumber min={1} max={10} />
                        </Form.Item>{" "}
                        <i style={{ fontSize: "12px" }}>
                          Số lượng sản phẩm có sẵn {productDetail.stock}
                        </i>{" "}
                      </span>
                    </div>
                    {/* BUTTON */}
                    <div className="section">
                      <div>
                        {" "}
                        <Link legacyBehavior href="/">
                          <a className="default-btn gap-2">
                            <i className="flaticon-history"></i> Thêm vào giỏ
                            hàng
                          </a>
                        </Link>
                      </div>
                      <div style={{ paddingLeft: "20px" }}>
                        <Link legacyBehavior href="/">
                          <a className="default-btn">
                            <i className="flaticon-home"></i> Mua ngay
                          </a>
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
