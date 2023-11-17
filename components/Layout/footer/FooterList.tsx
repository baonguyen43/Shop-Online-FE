import Link from "next/link";
import React from "react";

interface Props {
  children?: React.ReactNode;
}
const FooterList: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="col-lg-3 col-md-6 col-sm-6"> {children} </div>
    </React.Fragment>
  );
};

export default FooterList;
