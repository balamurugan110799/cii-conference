import React from "react";
import CII from "../Components/Asset/Image/Home/CII_Logo.png";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiInvisionFill,
} from "react-icons/ri";

export default function Navbar() {
  return (
    <div>
      {/* <div className=" bg-[#c1982e]">
        <div className=" container mx-auto">
          <div className=" grid grid-cols-2 py-2">
            <div className=" flex text-white title text-tiny tracking-wider">
              Next Event on November 2nd, 2023
            </div>
            <div>
              <div className=" flex justify-end">
                <RiFacebookBoxFill className="text-h4 ml-3 text-white hover:text-primary duration-300 cursor-pointer" />
                <RiInstagramFill className="text-h4 ml-3 text-white hover:text-yellow duration-300 cursor-pointer" />
                <RiInvisionFill className="text-h4 ml-3 text-white hover:text-yellow duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="  bg-primary">
        <div className=" container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className=" col-span-2">
            <img src={CII} alt="CII" className=" object-cover h-[80px]" />
            </div>
            <div className=" col-span-10 ">
            <div className="flex justify-end  py-7">
                <div className=" title text-base font-medium hover:text-yellow duration-300 text-white pr-10 tracking-wider cursor-pointer">
                  HOME
                </div>
                <div className="title center text-base font-medium hover:text-yellow duration-300 text-white px-10 tracking-wider cursor-pointer">
                EVENT INFO
                </div>
                <div className="title  text-base font-medium hover:text-yellow duration-300 text-white px-10 tracking-wider cursor-pointer">
                  SPEAKER
                </div>
                <div className=" title text-base font-medium hover:text-yellow duration-300 text-white px-10 tracking-wider cursor-pointer">
                SPONSORS
                </div>
                <div className="title  text-base font-medium hover:text-yellow duration-300 text-white px-10 tracking-wider cursor-pointer">
                  CONTACT US
                </div>
                <div>
                  
                </div>
            
              </div>
            </div>

          </div>
        
        
        </div>
        
        {/* <div className=" border-t boder-white border-yellow-sec ">
          <div className=" container mx-auto">
            <div className=" grid grid-cols-2">
              <div className="flex  py-3">
                <div className="  text-base font-medium hover:text-yellow duration-300 text-white pr-10 tracking-wider cursor-pointer">
                  Home
                </div>
                <div className="  text-base font-medium hover:text-yellow duration-300 text-white px-10 tracking-wider cursor-pointer">
                  About Us
                </div>
                <div className="  text-base font-medium hover:text-yellow duration-300 text-white px-10 tracking-wider cursor-pointer">
                  Speaker
                </div>
                <div className="  text-base font-medium hover:text-yellow duration-300 text-white px-10 tracking-wider cursor-pointer">
                  News
                </div>
                <div className="  text-base font-medium hover:text-yellow duration-300 text-white px-10 tracking-wider cursor-pointer">
                  Contact Us
                </div>
                <div></div>
              </div>
              <div className=" flex justify-end px-10">
                <button className="bg-yellow cursor-pointer title  hover:bg-[#c2a55b] text-h4 text-white tracking-wider center px-10">
                  Next Event
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
