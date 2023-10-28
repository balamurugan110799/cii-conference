import React from 'react'
import Thankyou from "../Components/Asset/Image/Home/thankyou.png"
import { ImMobile } from "react-icons/im";
import { BsMailbox2 } from "react-icons/bs";
import { RiMailFill } from "react-icons/ri";

export default function ThankYou() {
  return (
    <div>
      <div className=' h-[100vh] sm:h-auto smmd:h-auto md:h-auto bg-primary center'>

        <div className=' block'>
          <div className=' grid grid-cols-2 sm:grid-cols-1 smmd:grid-cols-2 md:grid-cols-1 gap-4'>
            <div className=' center'>
              <img src={Thankyou} />

            </div>
            <div className=' bg-white px-6 sm:pb-10 smmd:pb-10'>
              <div className="py-16 pb-0">
                <div className=" text-yellow sm:text-h5  smmd:text-h5 sm:pb-4 smmd:pb-4  text-h1 font-semibold">CONTACT US</div>
                <div className="  py-16 pt-6 sm:py-0 md:px-4">

                  <div className=" container mx-auto sm:px-4 smmd:px-4">
                    <div
                      id="contact-us"
                      className=" grid grid-cols-12 gap-4 sm:grid-cols-full sm:gap-4 smmd:gap-4  md:grid-cols-12 smmd:grid-cols-full"
                    >
                      <div className=" col-span-12 sm:col-span-full md:col-span-full smmd:col-span-full">
                        <h3 className=" text-h3 sm:text-h5 smmd:text-h5 text-primary font-semibold text-left">
                        Thank you for your interest in our conclave.
                        </h3>
                        <p className=" text-h5 text-secondary sm:text-base smmd:text-base text-left pt-1">
                        Our conclave coordinators are ready to assist you with the registration process.
                        </p>
                        <p className=" text-h5 text-secondary sm:text-base smmd:text-base text-left pt-1">
                          For inquiries or to register for the event, please reach out to
                          us
                        </p>
                      </div>
                      <div className=" col-span-12 sm:col-span-12 smmd:col-span-12 md:col-span-12">
                        <div className=" grid grid-cols-2  sm:grid-cols-1 smmd:grid-cols-1 sm:gap-6 smmd:gap-6">
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

            </div>
            {/* <h1 className=' number-font text-[52px] text-white'>Thank You</h1> */}
          </div>


        </div>
      </div>
    </div>
  )
}
