import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
const slides = [
  { id: 1, imagePath: "/image/banner/HomeBanner01.png" },
  { id: 2, imagePath: "/image/banner/HomeBanner02.png" },
  { id: 3, imagePath: "/image/banner/HomeBanner03.png" },
];

const Banner = (): JSX.Element | null => {
  return (
    <div style={{ paddingTop: "1px" }}>
      <Swiper
        loop={true}
        modules={[Autoplay]}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        spaceBetween={0}
      >
        {slides &&
          slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image
                priority
                src={slide.imagePath}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                sizes="100vw"
                width={1920}
                height={1080}
                alt="image"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
export default Banner;
