import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import GRD from "../Components/Asset/sponsor/GRD.png";
import RVS from "../Components/Asset/sponsor/RVS.png";
import Krishna from "../Components/Asset/sponsor/Krishnana.png";
import Bannari from "../Components/Asset/sponsor/Bannari.png";
import CIT from "../Components/Asset/sponsor/CIT.png";
import Coursa from "../Components/Asset/sponsor/coursera.png";
import NGP from "../Components/Asset/sponsor/NGP.png";
import HICAS from "../Components/Asset/sponsor/HICAS.png";
import REC from "../Components/Asset/sponsor/REC.png";

export default function Sponser() {
  const [sponser, setSponser] = useState([
    {
      id: 0,
      name: "Sponsor",
      img1: GRD,
      img2: RVS,
      img3: Krishna,
      status: true,
    },
    {
      id: 1,
      name: "Co-Sponsor",
      img1: Bannari,
      img2: CIT,
      img3: Coursa,
      img4: NGP,
      status: false,
    },
    {
      id: 2,
      name: "Associate-Sponsor",
      img1: HICAS,
      img2: REC,
      status: false,
    },
  ]);
  const [forcerender, SetForceRender] = useState(false);
  const handleClick = (values) => {
    sponser?.forEach((el) => {
      if (el.id === values) {
        el.status = true;
      } else {
        el.status = false;
      }
    });
    SetForceRender(!forcerender);
    setSponser(sponser);
  };
  return (
    <>
 <div id="sponsors" className=" container mx-auto py-16 sm:pb-10 smmd:pb-10">
        <h1 className=" font-semibold text-yellow text-h1 sm:text-h3 smmd:text-h3 pb-6">SPONSORS</h1>
     
    <div className="">
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
            slidesPerView: 5.5,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={GRD} alt="GRD" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RVS} alt="RVS" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Krishna} alt="Krishna" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Bannari} alt="Bannari" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CIT} alt="CIT" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Coursa} alt="Coursa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NGP} alt="NGP" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HICAS} alt="HICAS" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={REC} alt="REC" />
        </SwiperSlide>
      </Swiper>
    </div>

    </div>
     

      {/* <div id="sponsors" className=" container mx-auto py-16">
        <h1 className=" font-semibold text-yellow text-h1 pb-4">SPONSORS</h1>

        <div className=" felx">
          {sponser?.map((v, i) => {
            return (
              <>
                <button
                  className={` ${
                    v?.status ? "bg-primary" : "bg-yellow "
                  } rounded-lg hover:bg-primary duration-300 py-2 px-8 text-white mr-2 `}
                  onClick={() => handleClick(v?.id)}
                >
                  {v?.name}
                </button>
              </>
            );
          })}
        </div>

        {sponser?.map((v, i) => {
          return (
            <>
              <div className=" relative">
                <div className={` ${v?.status ? "block" : " hidden"}`}>
                  <div className=" py-10">
                    <div className=" grid grid-cols-12 gap-6">
                      <div className=" col-span-2"></div>
                      <div className=" col-span-2">
                        <img src={v?.img1} className="h-[100px] " />
                      </div>
                      <div className=" col-span-2">
                        <img src={v?.img2} className="h-[100px] " />
                      </div>
                      <div className=" col-span-2">
                        <img
                          src={v?.img3}
                          className="h-[100px] object-cover "
                        />
                      </div>
                      <div className=" col-span-2">
                        <img
                          src={v?.img4}
                          className="h-[100px] object-cover "
                        />
                      </div>
                      <div className=" col-span-2"></div>
                    </div>
                  </div>

                </div>
              </div>
            </>
          );
        })}
      </div> */}
    </>
  );
}
