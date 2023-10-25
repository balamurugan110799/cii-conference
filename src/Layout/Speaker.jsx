import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css';
import Abhilash from "../Components/Asset/Image/Speakers/Abhilash Misra.png";
import Nandini from "../Components/Asset/Image/Speakers/Dr R Nandini.png";
import Shankar from "../Components/Asset/Image/Speakers/Mr Shankar Vanavarayar.png";
import Senthil from "../Components/Asset/Image/Speakers/Dr K Senthil Ganesh.png";
import Christopher from "../Components/Asset/Image/Speakers/6 Dr Christopher Abraham.png";
import Dulles from "../Components/Asset/Image/Speakers/7 Mr Dulles Krishnan, Managing, Coursera India (1).png";
import Gururaj from "../Components/Asset/Image/Speakers/8 Dr Gururaj H.png";
import Vasanthi from "../Components/Asset/Image/Speakers/9 Ms Vasanthi Srinivasan,.png";
import Senthilnathan from "../Components/Asset/Image/Speakers/11 Dr S Senthilnathan.png";
import Hemamalini from "../Components/Asset/Image/Speakers/12 Ms HemamaliniTechnologies Ltd.png";
import Malarvizhi from "../Components/Asset/Image/Speakers/Rectangle 25 (1).png";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function Speaker() {
  return (
    <div className=" container mx-auto">
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
   
        <SwiperSlide className="h-full">
          <div className="group h-full">
            <div className=" relative h-full ">
              <img src={Abhilash}  className="sm:object-cover smmd:object-cover w-full"/>
            </div>
            <div className="bg-[#e6e6e6]  group-hover:bg-primary duration-300 py-4">
              <div className=" block ">
                <div className=" text-center text-h4 sm:text-h5 smmd:text-h5  text-primary group-hover:text-white font-semibold">
                  Mr Abhilash Misra
                </div>
                <div className=" text-center text-yellow sm:text-base smmd:text-base text-h5 font-semibold">
                  CEO <br/>NSE Academy
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className=" relative ">
              <img src={Nandini} className="sm:object-cover smmd:object-cover w-full"/>
            </div>
            <div className="bg-[#e6e6e6] px-2 group-hover:bg-primary duration-300 py-4">
              <div className=" text-center text-h4 sm:text-h5 smmd:text-h5  text-primary group-hover:text-white font-semibold">
                Dr R Nandini
              </div>
              <div className=" text-center text-yellow sm:text-base smmd:text-base text-h5 font-semibold">
                Co-Chairperson, National Higher Education Conclave 2023 &<br/> 
                Founder Trustee, GRG Trust
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className=" relative ">
              <img src={Shankar} className="sm:object-cover smmd:object-cover w-full"/>
            </div>
            <div className="bg-[#e6e6e6]  px-2 group-hover:bg-primary duration-300 py-4">
              <div className=" text-center text-h4 sm:text-h5 smmd:text-h5  text-primary group-hover:text-white font-semibold">
                Mr Shankar Vanavarayar
              </div>
              <div className=" text-center text-yellow sm:text-base smmd:text-base text-h5 font-semibold">
                Chairman, CII Tamil Nadu State Council & Executive Director,<br/>  ABT
                Industries Ltd
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className=" relative ">
              <img src={Malarvizhi} className="sm:object-cover smmd:object-cover w-full"/>
            </div>
            <div className="bg-[#e6e6e6]  px-2 group-hover:bg-primary duration-300 py-4">
              <div className=" text-center text-h4 sm:text-h5 smmd:text-h5  text-primary group-hover:text-white font-semibold">
                Ms S Malarvizhi
              </div>
              <div className=" text-center text-yellow sm:text-base smmd:text-base text-h5 font-semibold">
                Co-Chairperson, National Higher Education Conclave 2023 & <br/>
                Managing Trustee, Sri Krishna Institutions
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="group">
            <div className=" relative ">
              <img src={Senthil} className="sm:object-cover smmd:object-cover w-full"/>
            </div>
            <div className="bg-[#e6e6e6]  px-2  group-hover:bg-primary duration-300 py-4">
              <div className=" block">
                <div className=" text-center text-h4 sm:text-h5 smmd:text-h5  text-primary group-hover:text-white font-semibold">
                  Dr K Senthil Ganesh
                </div>
                <div className=" text-center text-yellow sm:text-base smmd:text-base text-h5 font-semibold">
                  Chairman, CII Coimbatore Zone & <br/> CEO, Transform Tech (I) Pvt
                  Ltd
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="group">
            <div className=" relative ">
              <img src={Christopher} className="sm:object-cover smmd:object-cover w-full"/>
            </div>
            <div className="bg-[#e6e6e6] px-2 group-hover:bg-primary duration-300 py-4">
              <div className=" text-center text-h4 sm:text-h5 smmd:text-h5  text-primary group-hover:text-white font-semibold">
                Dr Christopher Abraham
              </div>
              <div className=" text-center text-yellow sm:text-base smmd:text-base text-h5 font-semibold">
                CEO & Head - Dubai Campus <br/> S P Jain School of Global Management
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className=" relative ">
              <img src={Dulles} className="sm:object-cover smmd:object-cover w-full" />
            </div>
            <div className="bg-[#e6e6e6] px-2 group-hover:bg-primary duration-300 py-4">
              <div className=" text-center text-h4 sm:text-h5 smmd:text-h5  text-primary group-hover:text-white font-semibold">
                Mr Dulles Krishnan
              </div>
              <div className=" text-center text-yellow sm:text-base smmd:text-base text-h5 font-semibold">
                Managing Director - Enterprise<br/>  Coursera India
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className=" relative ">
              <img src={Gururaj} className="sm:object-cover smmd:object-cover w-full"/>
            </div>
            <div className="bg-[#e6e6e6] px-2 group-hover:bg-primary duration-300 py-4">
              <div className=" text-center text-h4 sm:text-h5 smmd:text-h5  text-primary group-hover:text-white font-semibold">
                Dr Gururaj H Kidiyoor
              </div>
              <div className=" text-center text-yellow sm:text-base smmd:text-base text-h5 font-semibold">
                Director<br/>  NITTE Institutions
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className=" relative ">
              <img src={Vasanthi} className="sm:object-cover smmd:object-cover w-full"/>
            </div>
            <div className="bg-[#e6e6e6] px-2 group-hover:bg-primary duration-300 py-4">
              <div className=" text-center text-h4 sm:text-h5 smmd:text-h5  text-primary group-hover:text-white font-semibold">
                Ms Vasanthi Srinivasan
              </div>
              <div className=" text-center text-yellow sm:text-base smmd:text-base text-h5 font-semibold">
                Professor<br/>  IIM Bangalore
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className=" relative ">
              <img src={Senthilnathan} className="sm:object-cover smmd:object-cover w-full"/>
            </div>
            <div className="bg-[#e6e6e6] px-2 group-hover:bg-primary duration-300 py-4">
              <div className=" text-center text-h4 sm:text-h5 smmd:text-h5  text-primary group-hover:text-white font-semibold">
                Dr S Senthilnathan
              </div>
              <div className=" text-center text-yellow sm:text-base smmd:text-base text-h5 font-semibold">
                Professor <br/> Educational Technology, Bharathidasan University
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className=" relative ">
              <img src={Hemamalini} className="sm:object-cover smmd:object-cover w-full" />
            </div>
            <div className="bg-[#e6e6e6] px-2 group-hover:bg-primary duration-300 py-4">
              <div className=" text-center text-h4 sm:text-h5 smmd:text-h5  text-primary group-hover:text-white font-semibold">
                Ms Hemamalini S
              </div>
              <div className=" text-center text-yellow sm:text-base smmd:text-base text-h5 font-semibold">
                Director - Planning and Operations,<br/>  Numentica Technologies Ltd
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
