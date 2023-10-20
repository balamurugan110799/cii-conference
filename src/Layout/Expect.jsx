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
      <div className=" container mx-auto">
        <div className=" grid grid-cols-12 gap-6">
          <div className=" col-span-7">
            <div className=" text-left  pb-6 pt-6 text-yellow text-h1 font-semibold">
              What you can Expect
            </div>
            <div className=" grid grid-cols-12 gap-4">
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
              <div className="col-span-3 ">
                <div className="center shadow rounded-lg bg-primary py-2 ">
                  <div className=" block py-10">
                    <RiUserStarLine className="text-yellow text-[64px]" />
                  </div>
                </div>
                <div className=" text-[#686868] py-2 text-[18px]">
                Thought Leadership
                </div>
              </div>
              <div className="col-span-3 ">
                <div className="center shadow rounded-lg bg-primary py-2 ">
                  <div className=" block py-10">
                    <RiCpuLine className="text-yellow text-[64px]" />
                  </div>
                </div>
                <div className=" text-[#686868] py-2 text-[18px]">
                Future Technology
                </div>
              </div>
              <div className="col-span-3 ">
                <div className="center shadow rounded-lg bg-primary py-2 ">
                  <div className=" block py-10">
                    <RiBaseStationLine className="text-yellow text-[64px]" />
                  </div>
                </div>
                <div className=" text-[#686868] py-2 text-[18px]">
                Networking Opportunity
                </div>
              </div>
              <div className="col-span-3 ">
                <div className="center shadow rounded-lg bg-primary py-2 ">
                  <div className=" block py-10">
                    <RiSwapBoxLine className="text-yellow text-[64px]" />
                  </div>
                </div>
                <div className=" text-[#686868] py-2 text-[18px]">
                Academic Exchange
                </div>
              </div>
              <div className="col-span-3 ">
                <div className="center shadow rounded-lg bg-primary py-2 ">
                  <div className=" block py-10">
                    <RiLightbulbFlashLine className="text-yellow text-[64px]" />
                  </div>
                </div>
                <div className=" text-[#686868] py-2 text-[18px]">
                Innovation Showcase
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-5 h-full">
            <div className=" relative h-full">
              <img src={conference} className=" h-full object-cover" />
              <div className=" absolute top-0 p-10 h-full w-full">
                <div className=" p-10 border-2 border-white h-full w-full">
                  <div className=" text-left font-semibold text-h2 tracking-wider text-primary">
                    Who Should Attend
                  </div>

                  <div className=" py-6  px-16">
                    <div className="pb-2 flex">
                      <div className="text-h4 px-2 text-white">
                        Institution Owners
                      </div>
                    </div>

                    <div className="pb-2 flex">
                      <div className="text-h4 px-2 text-white">
                        Teaching Faculties
                      </div>
                    </div>

                    <div className=" flex">
                      <div className="text-h4 px-2 text-white">
                        Industrialist
                      </div>
                    </div>
                  </div>

                  <div>
                      <video  poster={CII} className="mx-auto h-[200px]" autoPlay controls>
                        {/* <source src={vid}  type="video/mp4" /> */}
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
