import React from "react";
import IMG from "../Components/Asset/Image/Home/ai-chip-artificial-intelligence-future-technology-innovation.jpg";
import { FaLocationArrow } from "react-icons/fa6";

export default function ConclaveSession() {
  return (
    <div className=" container mx-auto pb-16 sm:px-4 smmd:px-4 sm:pt-10 sm:pb-0 smmd:pb-0 smmd:pt-10">
      <div className=" grid grid-cols-12 sm:grid-cols-1 smmd:grid-cols-1 md:grid-cols-1">
        <div className=" sm:hidden smmd:hidden md:hidden"></div>
        <div className=" col-span-3 sm:col-span-12 smmd:col-span-12">
          <img src={IMG} className=" h-[400px] w-full object-cover" />
        </div>
        <div className=" col-span-8 ">
          <div className=" px-10 py-8 sm:px-4  smmd:px-4">
            <div className="text-left font-semibold sm:text-h4 smmd:text-h4 text-[30px] text-primary">
              Plenary Session on:
            </div>
            <div className=" grid grid-cols-12 sm:grid-cols-1 smmd:grid-cols-1 pt-3">
              <div className=" col-span-2 sm:hidden smmd:hidden"></div>
              <div className=" col-span-8">
                <div className=" flex">
                  <FaLocationArrow className="mt-2 text-primary" />
                  <div className=" text-[18px] text-left pt-1 sm:text-base smmd:text-base  px-2 text-[#686868]">
                    AI and EdTech in Shaping the Future of Higher Education
                  </div>
                </div>

                <div className=" flex">
                  <FaLocationArrow className="mt-2 text-primary" />
                  <div className=" text-[18px] text-left pt-1 sm:text-base smmd:text-base  px-2 text-[#686868]">
                    Enhancing Teaching and Learning through AI and EdTech
                  </div>
                </div>

                <div className=" flex">
                  <FaLocationArrow className="mt-2 text-primary" />
                  <div className=" text-[18px] text-left pt-1 sm:text-base smmd:text-base  px-2 text-[#686868]">
                    AI for Academic Administration
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left sm:text-h4 smmd:text-h4 font-semibold text-[30px] pt-4 text-primary">
              Panel Discussion on
            </div>
            <div className=" grid grid-cols-12 pt-3">
              <div className=" col-span-2"></div>
              <div className=" col-span-8">
                <div className=" flex">
                  <FaLocationArrow className="mt-2 text-primary" />
                  <div className=" text-[18px] sm:text-base smmd:text-base text-left pt-1  px-2 text-[#686868]">
                    Student Engagement with AI
                  </div>
                </div>

                <div className=" flex">
                  <FaLocationArrow className="mt-2 text-primary" />
                  <div className=" text-[18px] sm:text-base smmd:text-base text-left pt-1  px-2 text-[#686868]">
                    Future of Work and Future Work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
