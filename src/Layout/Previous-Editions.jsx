import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Fifth from "../Components/Asset/Image/Count/Fifth.jpg";
import Sixth from "../Components/Asset/Image/Count/Sixth.jpg";
import First from "../Components/Asset/Image/Count/First.png";
import Second from "../Components/Asset/Image/Count/Second.png";
import Third from "../Components/Asset/Image/Count/Third.png";
import Forth from "../Components/Asset/Image/Count/Forth.png";

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function PreviousEditions() {
  return (
    <div>
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
            slidesPerView: 4.5,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="group">
          <div className="bg-primary duration-300 group-hover:bg-primary p-4">
            <div className=" text-[80px] number-font text-white group-hover:text-white text-left font-bold">
              01
            </div>
            <div className="text-secondary font-semibold text-left ">
              1st Edition: 2013
            </div>
            <div className="  text-[20px] pb-1 text-secondary group-hover:text-secondary font-normal pt-2 leading-[26px] text-left">
              Global Excellence through Governance, Research and Innovation
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-4">
            <div className=" text-[80px] number-font text-primary text-left font-bold">
              02
            </div>
            <div className="text-secondary font-semibold text-left ">
              2nd Edition: 2015
            </div>
            <div className="  text-[20px] pb-1 text-[#686868] font-normal pt-2 leading-[26px] text-left">
              Governance and Quality Systems in Higher Education
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white p-4">
            <div className=" text-[80px] number-font text-primary text-left font-bold">
              03
            </div>
            <div className="text-secondary font-semibold text-left ">
              3rd Edition: 2017
            </div>
            <div className="  text-[20px] pb-1 text-[#686868] font-normal pt-2 leading-[26px] text-left">
              Transforming in Higher Education
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-4">
            <div className=" text-[80px] number-font text-primary text-left font-bold">
              04
            </div>
            <div className="text-secondary font-semibold text-left ">
              4th Edition: 2019
            </div>
            <div className="  text-[20px] pb-1 text-[#686868] font-normal pt-2 leading-[26px] text-left">
              Transforming and Challenges in Higher Education - New Normal and
              Beyond
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-4">
            <div className=" text-[80px] number-font text-primary text-left font-bold">
              05
            </div>
            <div className="text-secondary font-semibold text-left ">
              5th Edition: 2021
            </div>
            <div className="  text-[20px] pb-1 text-[#686868] font-normal pt-2 leading-[26px] text-left">
              The Future of Higher Education: Challenges and Opportunities
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-4">
            <div className=" text-[80px] number-font text-primary text-left font-bold">
              06
            </div>
            <div className="text-secondary font-semibold text-left ">
              6th Edition: 2022
            </div>
            <div className=" text-[20px] pb-1 text-[#686868] font-normal pt-2 leading-[26px] text-left">
              Reimagining Higher Education for the Future of Work
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="bg-white p-4">
            <img src={Sixth} className=" " />
            <div className="text-[#363636] font-semibold text-left ">
              6th Edition: 2022
            </div>
            <div className=" text-[20px] pb-1 text-primary font-semibold pt-2 leading-[26px] text-left">
              Reimagining Higher Education for the Future of Work
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
