import React, { useRef, useState } from "react";
import "../../App.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.png";

const Home = () => {
  return (
    <main>
      <div className="max-w-[1192px] px-[32px] mx-auto">
        <div className="fullscreen">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={banner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Home;
