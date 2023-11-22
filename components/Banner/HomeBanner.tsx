const HomeBanner = () => {
  return (
    <>
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
            src="/image/banner/TestBanner03.png"
            alt="banner"
          />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
