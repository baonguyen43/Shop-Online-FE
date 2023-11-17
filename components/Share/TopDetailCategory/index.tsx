import Link from "next/link";
import React from "react";
import styles from "../../../styles/Grid01.module.css";
import Image from "next/image";

type Props = {
  products?: any;
};
const TopDetailCategory = React.forwardRef<HTMLDivElement, Props>(
  ({ products }: Props, ref): JSX.Element | null => {
    return (
      <React.Fragment>
        <div className={styles.grid}>
          <div className={styles.box}>
            {products &&
              products.map((p: any) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className={styles.card} key={p.id}>
                    <div className={styles.top}>
                      <Image
                        src="/image/products/loading.jpg"
                        alt="sp"
                        width={188}
                        height={188}
                      />
                    </div>
                    <div className={styles.bottom}>
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
                      <div> Đà Nẵng</div>
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
