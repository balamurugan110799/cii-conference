import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import GRD from "../Components/Asset/Image/Sponsors/GRD.png";
import RVS from "../Components/Asset/Image/Sponsors/RVS.png";
import KRISHNAN from "../Components/Asset/Image/Sponsors/KRISHNAN.png";
import BANNARI from "../Components/Asset/Image/Sponsors/BANNARI.png";
import CIT from "../Components/Asset/Image/Sponsors/CIT.png";
import COURSERA from "../Components/Asset/Image/Sponsors/COURSERA.png";
import NGP from "../Components/Asset/Image/Sponsors/NGP.png";






function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={GRD}  className=" h-[100px] mx-auto grayscale duration-3000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RVS}  className=" h-[100px] mx-auto grayscale duration-3000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={KRISHNAN}  className=" h-[100px] mx-auto grayscale duration-3000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BANNARI}  className=" h-[100px] mx-auto grayscale duration-3000" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={CIT}  className=" h-[100px] mx-auto grayscale duration-3000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={COURSERA}  className=" h-[100px] mx-auto grayscale duration-3000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={COURSERA}  className=" h-[100px] mx-auto grayscale duration-3000" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default React.memo(Slider);
