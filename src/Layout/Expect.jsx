import React from "react";
import conference from "../Components/Asset/Image/Home/img.png";
import { FaLocationArrow } from "react-icons/fa6";
import { BsKey } from "react-icons/bs";
import { RiUserStarLine, RiBaseStationLine, RiLightbulbFlashLine, RiSwapBoxLine, RiCpuLine } from "react-icons/ri";
import CII from "../Components/Asset/Image/Home/cii.png"
import {  } from "react-icons/bi";
import vid from "../Components/Asset/Image/video/VID.mp4"
export default function Expect() {
  return (
    <div>
      <div className=" container mx-auto sm:px-4 smmd:px-4 md:px-4">
        <div className=" grid grid-cols-12 sm:grid-cols-1 smmd:grid-cols-12 md:grid-cols-12 gap-6">
          <div className=" col-span-7 sm:col-span-12 smmd:col-span-full md:col-span-full">
            <div className=" text-left sm:text-h3 sm:text-center smmd:text-center smmd:text-h3 pb-6 pt-6 text-yellow text-h1 font-semibold">
              What you can Expect
            </div>
            <div className=" grid grid-cols-12 sm:grid-cols-6 smmd:grid-cols-6 sm:px-4 md:col-span-12  gap-4 sm:gap-4 smmd:gap-4">
              <div className="col-span-3 ">
                <div className="center shadow rounded-lg bg-primary py-2 ">
                  <div className=" block py-10">
                    <BsKey className="text-yellow text-[64px]" />
                  </div>
                </div>
                <div className=" text-[#686868] py-2 text-[18px]">
                  Inspiring Keynote Sessions
                </div>
              </div>
              <div className="col-span-3   ">
                <div className="center shadow rounded-lg bg-primary py-2 ">
                  <div className=" block py-10">
                    <RiUserStarLine className="text-yellow text-[64px]" />
                  </div>
                </div>
                <div className=" text-[#686868] py-2 text-[18px] sm:text-base smmd:text-base">
                Thought Leadership
                </div>
              </div>
              <div className="col-span-3   ">
                <div className="center shadow rounded-lg bg-primary py-2 ">
                  <div className=" block py-10">
                    <RiCpuLine className="text-yellow text-[64px]" />
                  </div>
                </div>
                <div className=" text-[#686868] py-2 text-[18px] sm:text-base smmd:text-base">
                Future Technology
                </div>
              </div>
              <div className="col-span-3   ">
                <div className="center shadow rounded-lg bg-primary py-2 ">
                  <div className=" block py-10">
                    <RiBaseStationLine className="text-yellow text-[64px]" />
                  </div>
                </div>
                <div className=" text-[#686868] py-2 text-[18px] sm:text-base smmd:text-base">
                Networking Opportunity
                </div>
              </div>
              <div className="col-span-3   ">
                <div className="center shadow rounded-lg bg-primary py-2 ">
                  <div className=" block py-10">
                    <RiSwapBoxLine className="text-yellow text-[64px]" />
                  </div>
                </div>
                <div className="text-[#686868] py-2 text-[18px] sm:text-base smmd:text-base">
                Academic Exchange
                </div>
              </div>
              <div className="col-span-3   ">
                <div className="center shadow rounded-lg bg-primary py-2 ">
                  <div className=" block py-10">
                    <RiLightbulbFlashLine className="text-yellow text-[64px]" />
                  </div>
                </div>
                <div className="text-[#686868] py-2 text-[18px] sm:text-base smmd:text-base">
                Innovation Showcase
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-5 sm:h-full smmd:h-full sm:col-span-12 md:col-span-12  smmd:col-span-12 h-full">
            <div className=" relative h-full sm:h-full smmd:h-full md:h-full md:w-full">
              <img src={conference} className=" h-full object-cover sm:h-full smmd:h-full md:w-full" />
              <div className=" absolute top-0 p-10 h-full w-full">
                <div className=" sm:p-4 smmd:p-4 p-10 border-2 border-white h-full w-full">
                  <div className=" text-left font-semibold sm:pb-2 smmd:pb-2   sm:text-h3 smmd:text-h3 text-h2 tracking-wider text-primary">
                    Who Should Attend
                  </div>

                  <div className=" py-6 sm:px-6 sm:pt-0 smmd:pt-0 smmd:px-6 sm:pb-0 smmd:pb-0  px-16">
                    <div className="pb-2 flex">
                      <div className="text-h4 px-2 sm:text-base smmd:text-base text-white">
                        Institution Owners
                      </div>
                    </div>

                    <div className="pb-2 flex">
                      <div className="text-h4 px-2 sm:text-base smmd:text-base text-white">
                        Teaching Faculties
                      </div>
                    </div>

                    <div className=" flex">
                      <div className="text-h4 px-2 sm:text-base smmd:text-base text-white">
                        Industrialist
                      </div>
                    </div>
                  </div>

                  <div>
                      <video  poster={CII} className="mx-auto h-[200px] sm:h-auto smmd:h-auto sm:mt-2 smmd:mt-2" autoPlay controls>
                        <source src={vid}  type="video/mp4" />
                      </video>
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
