import React from "react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// const slides = [
//   { id: 1, imagePath: "/image/banner/HomeBanner01.png" },
//   { id: 2, imagePath: "/image/banner/HomeBanner02.png" },
// ];

const Banner = (): JSX.Element | null => {
  return (
    <div style={{ margin: 0, padding: 0, objectFit: "cover" }}>
      <Swiper
        loop={true}
        modules={[Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Banner;
