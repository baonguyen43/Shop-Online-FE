import Link from "next/link";
import React from "react";
import styles from "../../../styles/Grid01.module.css";
import Image from "next/image";

type Props = {
  products?: any;
};
const ListProducts = React.forwardRef<HTMLDivElement, Props>(
  ({ products }: Props, ref): JSX.Element | null => {
    return (
      <React.Fragment>
        <div className={styles.grid}>
          <div className={styles.box}>
            {products &&
              products.map((p: any) => {
                const imagePath = p.imagePath || "/image/products/loading.jpg";
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className={styles.card} id={p.id}>
                    <div className={styles.top}>
                      <Link href={`/product/${p.id}`}>
                        <Image
                          src={imagePath}
                          alt="sp"
                          width={188}
                          height={188}
                        />
                      </Link>
                    </div>
                    <div className={styles.bottom}>
                      <Link href={`/product/${p.id}`}>
                        <span> {p.name} </span>
                        <div>
                          <del> đ {p.price} </del>
                        </div>
                        <div className={styles["yellow-box"]}>
                          - {p.discount} %
                        </div>
                        <div className={styles["red-text"]}>
                          <b>đ 80000 </b>
                        </div>
                      </Link>
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

ListProducts.displayName = "ListProducts";
export default ListProducts;
