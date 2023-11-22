import React from "react";

type Props = {
  subTitle?: string;
  title: string;
  desc?: string;
  className?: string;
};

const SectionTitle = ({
  subTitle,
  title,
  desc,
  className,
}: Props): JSX.Element | null => {
  return (
    <div className={`section-title ${className}`}>
      {subTitle && <span className="sub-title">{subTitle}</span>}
      <h3>{title}​</h3>
      {desc && <p>{desc}</p>}
    </div>
  );
};

export default SectionTitle;
