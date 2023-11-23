import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  bgClassName?: string;
  sectionTitle?: JSX.Element;
  disProduct?: any;
};

const SaleProducts = React.forwardRef<HTMLDivElement, Props>(
  ({ bgClassName, sectionTitle, disProduct }: Props): JSX.Element | null => {
    const formatPrice = (price: number) => {
      //tạo dấu phẩy hàng nghìn cho Price
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
      <div className={`features pt-50 pb-50 ${bgClassName}`}>
        <div className="container">
          {sectionTitle}
          <div className="row">
            {disProduct &&
              disProduct.map((d: any) => {
                const discountPrice = d.price - (d.price * d.discount) / 100;
                const formatTotalPrice = formatPrice(discountPrice);
                return (
                  <div className="col-lg-4 col-md-6" key={d.id}>
                    <div className="single-box">
                      <div className="box-image">
                        <a className="d-block">
                          <Link href={`/product/${d.id}`}>
                            <Image
                              priority
                              src={d.imagePath || "/image/products/loading.jpg"}
                              sizes="100vw"
                              style={{
                                height: "70%",
                                width: "100%",
                                objectFit: "cover",
                              }}
                              width={400}
                              height={300}
                              alt="image"
                            />
                          </Link>
                        </a>
                      </div>

                      <div className="box-content">
                        <h3>
                          <Link legacyBehavior href={`/product/${d.id}`}>
                            <a>{d.name}</a>
                          </Link>
                        </h3>
                        <p>{d.discount}%</p>
                        <a>{formatTotalPrice} ₫</a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
);
SaleProducts.displayName = "SaleProducts";
export default SaleProducts;
