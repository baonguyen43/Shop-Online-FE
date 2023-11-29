import React from "react";

const HomeBanner = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div>
          <img
            sizes="100vw"
            width={1200}
            height={400}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
            src="/image/banner/HomeBanner02.png"
            alt="banner"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeBanner;
