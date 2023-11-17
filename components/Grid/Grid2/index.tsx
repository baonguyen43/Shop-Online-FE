import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  imageSrc: string;
  desc?: string;
  categories?: any;
};
const Grid02 = React.forwardRef<HTMLDivElement, Props>(
  ({ imageSrc, categories }: Props, ref): JSX.Element | null => {
    return (
      <React.Fragment>
        <div className="features pt-70">
          <div className="align-items-center">
            <div className="category-features">
              <ul className="row feature-details justify-content-center">
                {categories &&
                  categories.map((c: any) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <li className="feature-item" key={c.id}>
                        <div className="feature-image">
                          <Link href={`/category/${c.id}`} legacyBehavior>
                            <Image
                              width={50}
                              height={50}
                              src={imageSrc}
                              alt={`${c.name}`}
                            />
                          </Link>
                        </div>
                        <Link href={`/category/${c.id}`} legacyBehavior>
                          <p>{c.name}</p>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
);

Grid02.displayName = "Grid02";
export default Grid02;
