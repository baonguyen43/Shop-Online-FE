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
            src="/image/banner/banner.jpg"
            alt="banner"
          />
        </div>
        {/* <div>
          <div>
            <Image
              priority
              sizes="100vw"
              width={400}
              height={198}
              style={{ height: "100%", display: "auto" }}
              src="/image/banner/banner1.png"
              alt="banner"
            />
          </div>
          <div>
            <Image
              priority
              sizes="100vw"
              width={400}
              height={198}
              style={{ display: "auto", height: "100%" }}
              src="/image/banner/banner1.png"
              alt="banner"
            />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HomeBanner;
