import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  bgClassName?: string;
  sectionTitle?: JSX.Element;
};

export default function Grid01({ bgClassName, sectionTitle }: Props) {
  return (
    <div className={`features pt-100 pb-70 ${bgClassName}`}>
      <div className="container">
        {sectionTitle}
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-box">
              <div className="box-image">
                <Link legacyBehavior href={"/"}>
                  <a className="d-block">
                    <Image
                      src="/image/products/loading.jpg"
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
                  </a>
                </Link>
              </div>

              <div className="box-content">
                <h3>
                  <Link legacyBehavior href={""}>
                    <a>name</a>
                  </Link>
                </h3>

                <p>DESSSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
