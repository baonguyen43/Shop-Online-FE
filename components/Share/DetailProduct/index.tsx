import Link from "next/link";
import React from "react";
import styles from "../../../styles/Grid01.module.css";
import Image from "next/image";

type Props = {
  products?: any;
};
const DetailProduct = React.forwardRef<HTMLDivElement, Props>(
  ({ products }: Props, ref): JSX.Element | null => {
    return (
      <React.Fragment>
        <div className="detail-product">
          <div className="container">
            <div className="left-column">
              {" "}
              <Image
                src="/image/products/loading.jpg"
                alt="sp"
                width={350}
                height={450}
              />{" "}
            </div>{" "}
            <div className="right-column">
              <div className="right-top">
                <div className="body">
                  <div className="header">
                    Áo Sweater Chất Len , Áo Len Cổ Tròn Form Rộng{" "}
                  </div>
                  <div className="section">
                    <div style={{ paddingTop: "5px", gap: "2px" }}>
                      {" "}
                      <div>
                        {" "}
                        <span> price</span>{" "}
                      </div>
                      <div>
                        {" "}
                        <b> 999.999.999 đ </b>
                      </div>
                      <span> 20%</span>{" "}
                    </div>
                  </div>
                  <div className="section">
                    <span> Vận chuyển </span>
                  </div>
                  <div className="section">
                    <span> Kích thước </span>
                  </div>
                  <div className="section">
                    <span> Màu sắc </span>
                  </div>{" "}
                  <div className="section">
                    <span> Size </span>
                  </div>{" "}
                  <div className="section">
                    <span> Số lượng </span>
                  </div>{" "}
                  <div className="section">
                    <div>
                      {" "}
                      <Link legacyBehavior href="/">
                        <a className="default-btn gap-2">
                          <i className="flaticon-history"></i> Thêm vào giỏ hàng{" "}
                          <span></span>
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
      </React.Fragment>
    );
  }
);

DetailProduct.displayName = "DetailProduct";
export default DetailProduct;
