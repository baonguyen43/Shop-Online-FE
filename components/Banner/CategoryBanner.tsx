import React from "react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  { id: 1, imagePath: "/image/banner/bannerDM00.jpg" },
  { id: 2, imagePath: "/image/banner/bannerDM01.jpg" },
  { id: 3, imagePath: "/image/banner/bannerDM00.jpg" },
  { id: 4, imagePath: "/image/banner/bannerDM01.jpg" },
];
export default function CategoryBanner() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="pt-3 text-center">
          <Swiper
            loop={true}
            modules={[Autoplay, Pagination]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={30}
            // slidesPerView={1}
            grabCursor
          >
            {slides.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="d-block d-xs-block d-sm-block d-md-block d-lg-none">
                    <Image
                      priority
                      src={item.imagePath}
                      sizes="(max-width:1230px) 100vw,33vw"
                      width={500}
                      height={500}
                      alt="image"
                    />
                  </div>

                  <div className="d-none d-lg-block d-xl-block">
                    <Image
                      priority
                      src={item.imagePath}
                      style={{
                        width: "84%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      sizes="100vw"
                      width={500}
                      height={500}
                      alt="image"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
}
