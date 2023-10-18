import React from "react";
import CIIA from "../Components/Asset/Image/Home/download.jpg";
import { ImMobile } from "react-icons/im";
import { BsMailbox2 } from "react-icons/bs";
import { RiMailFill } from "react-icons/ri";
import Slider from "./Slider";

function Footer() {
  return (
    <div>
      <div className=" bg-[#e6e6e6] py-10">
        <div className=" container mx-auto">
            <div className=" pt-10 pb-8">
            <div className=" font-semibold text-[#6d6d6d] text-h3 ">SPONSORS</div>
            <div className=" grid grid-cols-12 py-10">
                <div className=" col-span-2">
            
                </div>
                <div className=" col-span-8">
                <Slider/>
                </div>
                <div className=" col-span-2">
                
                </div>

            </div>
            </div>
       
          <div className=" grid grid-cols-12">
            <div className=" col-span-5">
              <h3 className=" text-h3 text-primary font-semibold text-left">
                Confederation of Indian Industry Coimbatore
              </h3>
              <p className=" text-h5 text-[#6d6d6d] text-left pt-1">
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
                    <p className=" text-[14px] mx-2 text-[#6d6d6d] text-left pt-2 pb-2">
                      +91 9790964043
                    </p>
                  </div>

                  <div className=" flex">
                    <div className="h-[30px] rounded-lg w-[30px] center bg-primary mt-2">
                      <RiMailFill className=" text-[#fff]" />
                    </div>
                    <p className=" text-[16px] mx-2 text-[#6d6d6d] text-left pt-2.5 pb-2">
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
                    <p className=" text-[14px] mx-2 text-[#6d6d6d] text-left pt-2 pb-2">
                      +91 9047781716
                    </p>
                  </div>

                  <div className=" flex">
                    <div className="h-[30px] rounded-lg w-[30px] center bg-primary mt-2">
                      <RiMailFill className=" text-[#fff]" />
                    </div>
                    <p className=" text-[16px] mx-2 text-[#6d6d6d] text-left pt-2.5 pb-2">
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
