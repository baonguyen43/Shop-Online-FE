import React from "react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// type Props = (
//   slides : [
//     { id: 1, imagePath: "/image/banner/HomeBanner01.png" },
//     { id: 2, imagePath: "/image/banner/HomeBanner02.png" },
//   ]
// )

const Banner = (): JSX.Element | null => {
  const slides = [
    { id: 1, imagePath: "/image/banner/HomeBanner01.png" },
    { id: 2, imagePath: "/image/banner/HomeBanner02.png" },
  ];
  return (
    <React.Fragment>
      <div className="container">
        <div className="pt-3 text-center">
          <div className="pt-3 text-center">
            <Swiper
              loop={true}
              modules={[Autoplay]}
              navigation
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              // spaceBetween={30}
              // slidesPerView={5}
              grabCursor
            >
              <SwiperSlide>vip1</SwiperSlide>
              <SwiperSlide>vip1</SwiperSlide>
              <SwiperSlide>vip1</SwiperSlide>
              <SwiperSlide>vip1</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Banner;
