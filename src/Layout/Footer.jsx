import React from "react";
import CIIA from "../Components/Asset/Image/Home/download.jpg";
import { ImMobile } from "react-icons/im";
import { BsMailbox2 } from "react-icons/bs";
import { RiMailFill } from "react-icons/ri";
import Slider from "./Slider";

function Footer() {
  return (
    <div className="bg-[#e6e6e6] py-16">
      <div className="  py-16 sm:py-0">
        <div className=" container mx-auto sm:px-4 smmd:px-4">
          <div id="contact-us" className=" grid grid-cols-12 gap-10 sm:grid-cols-1  md:grid-cols-1 smmd:grid-cols- 1">
            <div className=" col-span-5">
              <h3 className=" text-h3 sm:text-h5 smmd:text-h5 text-primary font-semibold text-left">
                Confederation of Indian Industry Coimbatore
              </h3>
              <p className=" text-h5 text-[#6d6d6d] sm:text-base smmd:text-base text-left pt-1">
                For inquiries or to register for the event, please reach out to
                us
              </p>
            </div>
            <div className=" col-span-7">
              <div className=" grid grid-cols-2">
                <div>
                  <p className=" text-[16px] text-primary font-semibold text-left pt-1 pb-2">
                    {" "}
                    Ms. Sangeetha
                  </p>
                  <div className=" flex">
                    <div className="h-[30px] rounded-lg w-[30px] center bg-primary">
                      <ImMobile className=" text-[#fff]" />
                    </div>
                    <p className=" text-[14px] mx-2  sm:text-base smmd:text-base text-[#6d6d6d] text-left pt-2  sm:pt-1 smmd:pt-1 pb-2">
                      +91 9790964043
                    </p>
                  </div>

                  <div className=" flex">
                    <div className="h-[30px] rounded-lg w-[30px] center bg-primary mt-2">
                      <RiMailFill className=" text-[#fff]" />
                    </div>
                    <p className=" text-[16px] mx-2  sm:text-base smmd:text-base text-[#6d6d6d] text-left pt-2.5 pb-2">
                      sangeetha.a@cii.in
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className=" text-[16px] text-primary font-semibold text-left pt-1 pb-2">
                      {" "}
                      Mr. Vinod Shenoy
                    </p>
                    <div className=" flex">
                      <div className="h-[30px] rounded-lg w-[30px] center bg-primary">
                        <ImMobile className=" text-[#fff]" />
                      </div>
                      <p className=" text-[14px] mx-2  sm:text-base smmd:text-base text-[#6d6d6d] text-left pt-2 sm:pt-1 smmd:pt-1 pb-2">
                        +91 9047781716
                      </p>
                    </div>

                    <div className=" flex">
                      <div className="h-[30px] rounded-lg w-[30px] center bg-primary mt-2">
                        <RiMailFill className=" text-[#fff]" />
                      </div>
                      <p className=" text-[16px] mx-2 sm:text-base smmd:text-base text-[#6d6d6d] text-left pt-2.5 pb-2">
                        vinod.shenoy@cii.in
                      </p>
                    </div>
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
export default React.memo(Footer);
