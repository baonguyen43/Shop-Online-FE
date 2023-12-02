import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

type Props = {
  products?: any;
  bgClassName?: string;
  sectionTitle?: JSX.Element;
};
const ListProducts = React.forwardRef<HTMLDivElement, Props>(
  (
    { products, bgClassName, sectionTitle }: Props,
    _ref
  ): JSX.Element | null => {
    //Format Price
    const formatPrice = (price: number) => {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
      <React.Fragment>
        <div className={`features pt-50 pb-50 ${bgClassName}`}>
          <div className="container">
            {sectionTitle}
            <div className="grid">
              <div className="box">
                {products &&
                  products.map((p: any) => {
                    const imagePath =
                      p.imagePath || "/image/products/loading.jpg";
                    const discountPrice =
                      p.price - (p.price * p.discount) / 100;
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
                              src={imagePath}
                              alt="sp"
                              width={188}
                              height={188}
                            />
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
                            <b> {formatTotalPrice} ₫</b>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
);

ListProducts.displayName = "ListProducts";
export default ListProducts;
