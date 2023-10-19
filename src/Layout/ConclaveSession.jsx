import React from "react";
import IMG from "../Components/Asset/Image/Home/ai-chip-artificial-intelligence-future-technology-innovation.jpg";
import { FaLocationArrow } from "react-icons/fa6";

export default function ConclaveSession() {
  return (
    <div className=" container mx-auto pb-16">
      <div className=" grid grid-cols-12">
        <div></div>
        <div className=" col-span-3">
          <img src={IMG} className=" h-[400px] w-full object-cover" />
        </div>
        <div className=" col-span-8 ">
          <div className=" px-10 py-8">
            <div className="text-left font-semibold text-[30px] text-primary">
              Plenary Session on:
            </div>
            <div className=" grid grid-cols-12 pt-3">
              <div className=" col-span-2"></div>
              <div className=" col-span-8">
                <div className=" flex">
                  <FaLocationArrow className="mt-2 text-primary" />
                  <div className=" text-[18px] text-left pt-1  px-2 text-[#686868]">
                    AI and EdTech in Shaping the Future of Higher Education
                  </div>
                </div>

                <div className=" flex">
                  <FaLocationArrow className="mt-2 text-primary" />
                  <div className=" text-[18px] text-left pt-1  px-2 text-[#686868]">
                    Enhancing Teaching and Learning through AI and EdTech
                  </div>
                </div>

                <div className=" flex">
                  <FaLocationArrow className="mt-2 text-primary" />
                  <div className=" text-[18px] text-left pt-1  px-2 text-[#686868]">
                    AI for Academic Administration
                  </div>
                </div>
              </div>
            </div>

            <div className="text-left font-semibold text-[30px] pt-4 text-primary">
              Panel Discussion on
            </div>
            <div className=" grid grid-cols-12 pt-3">
              <div className=" col-span-2"></div>
              <div className=" col-span-8">
                <div className=" flex">
                  <FaLocationArrow className="mt-2 text-primary" />
                  <div className=" text-[18px] text-left pt-1  px-2 text-[#686868]">
                    Student Engagement with AI
                  </div>
                </div>

                <div className=" flex">
                  <FaLocationArrow className="mt-2 text-primary" />
                  <div className=" text-[18px] text-left pt-1  px-2 text-[#686868]">
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
