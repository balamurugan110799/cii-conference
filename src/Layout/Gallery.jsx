import React from "react";
import firstImage from "../Components/Asset/gallery/Rectangle 4 (1).png";
import secondImage from "../Components/Asset/gallery/Rectangle 4 (2).png";
import thirdImage from "../Components/Asset/gallery/Rectangle 5 (1).png";
import fourthImage from "../Components/Asset/gallery/Rectangle 5.png";
import fifthImage from "../Components/Asset/gallery/Rectangle 6 (1).png";
import sixthImage from "../Components/Asset/gallery/Rectangle 6.png";
import seventhImage from "../Components/Asset/gallery/Rectangle 7.png";
import eigthImage from "../Components/Asset/gallery/Rectangle 8.png";

export default function Gallery() {
  return (
    <div className=" container mx-auto">
      <div className="gallery  ">
        <div className="group gallery-item mb-4 relative ">
          <div className="group-hover:bg-primary h-full ">
            <img src={firstImage} className="   " />
            <div className=" absolute top-0 h-full group-hover:bg-[#033c89ad] w-full p-3  duration-300">
              <div className=" group-hover:border-2 group-hover:h-full group-hover:w-full border-[#6d6d6d00] group-hover:border-white duration-300"></div>
            </div>
          </div>
        </div>

        <div className=" group gallery-item mb-4 relative">
        <div className="group-hover:bg-primary h-full ">
            <img src={secondImage} className="   " />
            <div className=" absolute top-0 h-full group-hover:bg-[#033c89ad] w-full p-3  duration-300">
              <div className=" group-hover:border-2 group-hover:h-full group-hover:w-full border-[#6d6d6d00] group-hover:border-white duration-300"></div>
            </div>
          </div>
          {/* <img src={secondImage} /> */}
        </div>

        {/* <div className=' gallery-item'>
           <img src={thirdImage}/>
            </div> */}

        <div className=" group gallery-item mb-4 relative">
        <div className="group-hover:bg-primary h-full ">
            <img src={fourthImage} className="   " />
            <div className=" absolute top-0 h-full group-hover:bg-[#033c89ad] w-full p-3  duration-300">
              <div className=" group-hover:border-2 group-hover:h-full group-hover:w-full border-[#6d6d6d00] group-hover:border-white duration-300"></div>
            </div>
          </div>
          {/* <img src={fourthImage} /> */}
        </div>

        <div className="group gallery-item mb-4 relative">
        <div className="group-hover:bg-primary h-full ">
            <img src={fifthImage} className="   " />
            <div className=" absolute top-0 h-full group-hover:bg-[#033c89ad] w-full p-3  duration-300">
              <div className=" group-hover:border-2 group-hover:h-full group-hover:w-full border-[#6d6d6d00] group-hover:border-white duration-300"></div>
            </div>
          </div>
          {/* <img src={fifthImage} /> */}
        </div>

        <div className=" group gallery-item mb-4 relative">
        <div className="group-hover:bg-primary h-full ">
            <img src={sixthImage} className="   " />
            <div className=" absolute top-0 h-full group-hover:bg-[#033c89ad] w-full p-3  duration-300">
              <div className=" group-hover:border-2 group-hover:h-full group-hover:w-full border-[#6d6d6d00] group-hover:border-white duration-300"></div>
            </div>
          </div>
          {/* <img src={sixthImage} /> */}
        </div>

        <div className="group gallery-item mb-4 relative">
        <div className="group-hover:bg-primary h-full ">
            <img src={seventhImage} className="   " />
            <div className=" absolute top-0 h-full group-hover:bg-[#033c89ad] w-full p-3  duration-300">
              <div className=" group-hover:border-2 group-hover:h-full group-hover:w-full border-[#6d6d6d00] group-hover:border-white duration-300"></div>
            </div>
          </div>
          {/* <img src={seventhImage} /> */}
        </div>

        {/* <div className=' gallery-item'>
           <img src={eigthImage}/>
            </div> */}
      </div>
    </div>
  );
}
