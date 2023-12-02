import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  desc?: string;
  categories?: any;
};
const TopCategories = React.forwardRef<HTMLDivElement, Props>(
  ({ categories }: Props, _ref): JSX.Element | null => {
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
                              priority
                              width={50}
                              height={50}
                              src={c.iconPath}
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

TopCategories.displayName = "TopCategories";
export default TopCategories;
