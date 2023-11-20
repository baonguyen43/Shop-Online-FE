import { Form, InputNumber } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  productDetail?: any;
};
const DetailProduct = React.forwardRef<HTMLDivElement, Props>(
  ({ productDetail }: Props, ref): JSX.Element | null => {
    return (
      <React.Fragment>
        {Array.isArray(productDetail) &&
          productDetail.map((p: any) => {
            const imagePath = p.imagePath || "/image/products/loading.jpg";
            return (
              <div className="detail-product" key={p.id}>
                <div className="container">
                  {/* IMAGE */}
                  <div className="left-column">
                    {" "}
                    <Image
                      src={imagePath}
                      alt="sp"
                      width={350}
                      height={450}
                    />{" "}
                  </div>
                  {/* CONTENT */}
                  <div className="right-column">
                    <div className="right-top">
                      <div className="body">
                        <div className="header">name</div>
                        <div className="section" style={{ marginTop: "10px" }}>
                          <div className="price">
                            <span
                              style={{
                                fontSize: "1.5rem",
                                marginRight: "10px",
                                textDecoration: "line-through",
                              }}
                            >
                              PRICE
                            </span>{" "}
                            <div className="flex items-center">
                              <span
                                style={{
                                  fontSize: "1.875rem",
                                  fontWeight: "500",
                                  color: "#01255D",
                                }}
                              >
                                {" "}
                                235.000 đ{" "}
                              </span>
                              <span
                                style={{
                                  marginLeft: "8px",
                                  backgroundColor: "#01255D",
                                  color: "white",
                                }}
                              >
                                DISCOUNT
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                        <div className="section">
                          <p> Vận chuyển: </p>
                        </div>
                        <div className="section">
                          <p> Size </p>
                        </div>{" "}
                        <div className="section">
                          <span style={{ marginRight: "65px" }}>
                            {" "}
                            Số lượng:{" "}
                          </span>
                          <span>
                            <Form.Item name="input-number" noStyle>
                              <InputNumber min={1} max={10} />
                            </Form.Item>{" "}
                            <i style={{ fontSize: "12px" }}>
                              {" "}
                              Số lượng sản phẩm có sẵn STOCK{" "}
                            </i>{" "}
                          </span>
                        </div>{" "}
                        {/* BUTTON */}
                        <div className="section">
                          <div>
                            {" "}
                            <Link legacyBehavior href="/">
                              <a className="default-btn gap-2">
                                <i className="flaticon-history"></i> Thêm vào
                                giỏ hàng <span></span>
                              </a>
                            </Link>
                          </div>
                          <div style={{ paddingLeft: "20px" }}>
                            <Link legacyBehavior href="/">
                              <a className="default-btn">
                                <i className="flaticon-home"></i> Mua ngay{" "}
                                <span></span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            );
          })}
      </React.Fragment>
    );
  }
);

DetailProduct.displayName = "DetailProduct";
export default DetailProduct;
