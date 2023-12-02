import Link from "next/link";
import React from "react";
import styles from "../../../styles/Grid01.module.css";
import Image from "next/image";

type Props = {
  products?: any;
};
const TopDetailCategory = React.forwardRef<HTMLDivElement, Props>(
  ({ products }: Props, _ref): JSX.Element | null => {
    const formatPrice = (price: number) => {
      //tạo dấu phẩy hàng nghìn cho Price
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (
      <React.Fragment>
        <div className="grid">
          <div className="box">
            {products &&
              products.map((p: any) => {
                const imagePath = p.imagePath || "/image/products/loading.jpg";
                const discountPrice = p.price - (p.price * p.discount) / 100;
                const formatTotalPrice = formatPrice(discountPrice);
                return (
                  <div className="card" key={p.id}>
                    <div className="top">
                      <Link href={`/product/${p.id}`}>
                        <Image
                          priority
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src={p.imagePath}
                          alt="sp"
                          width={188}
                          height={188}
                        />{" "}
                      </Link>
                    </div>
                    <div className="bottom">
                      <Link href={`/product/${p.id}`}>
                        <span> {p.name} </span>
                      </Link>
                      <div>
                        <del> {formatPrice(p.price)}₫ </del>
                      </div>
                      <div className="yellow-box">- {p.discount} %</div>
                      <div className="red-text">
                        <b> {formatTotalPrice}₫ </b>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </React.Fragment>
    );
  }
);

TopDetailCategory.displayName = "TopDetailCategory";
export default TopDetailCategory;
