import React from "react";
import AI from "../Components/Asset/Image/Home/AI.png";
import AIG from "../Components/Asset/Image/Home/AIF.jpg";
import AI_BRAIN from "../Components/Asset/Image/Home/4402944_18296.jpg";
import AI_TECH from "../Components/Asset/Image/Home/AI_TECH.jpg";

import CII from "../Components/Asset/Image/Home/CII_Logo.png";

function Home() {
  return (
    <div>
      <section className=" ">
        <div className=" relative ">
          <div className=" absolute top-0 h-[100vh]  w-full">
            {/* <div className="bg-[#c29729c7]  cursor-pointer title w-full py-2 text-h1  hover:bg-[#c2a55b]  text-white tracking-wider center px-10">
              National Higher Education Conclave 2023 7th - Edition
            </div> */}

            <div className="  py-6">
              <div className=" container mx-auto">
                <div className="grid grid-cols-12 gap-4">
                  <div className=" col-span-2">
                    <img
                      src={CII}
                      alt="CII"
                      className=" object-cover h-[80px]"
                    />
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
                        Contact Us
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" container mx-auto">
              <div className=" grid  grid-cols-2">
                <div></div>
                <div className="">
                  <div className="  my-12 pl-10  mx-auto">
                    <div className="text-white font-semibold title text-left py-4 pb-2 text-h1 ">
                      National Higher Education Conclave 2023{" "}
                      <span className=" text-white">7th - Edition</span>
                    </div>
                    <h2 className=" text-h2 text-left text-secondary pb-4">
                      Artificial Intelligence & Educational Technology for
                      Transforming Higher Education
                    </h2>
                    <div className=" grid grid-cols-2 py-4">
                      <div>
                        <div className=" text-primary title text-h3 text-left font-semibold">
                          VENUE
                        </div>
                        <p className=" text-h4 text-secondary text-left">
                          Hotel Le Meridien,
                        </p>
                        <p className=" text-h4 text-secondary text-left">
                          Neelambur,Coimbatore,{" "}
                        </p>
                        <p className=" text-h4 text-secondary text-left">
                          Tamilnadu, India - 641062
                        </p>
                      </div>
                      <div>
                        <div className=" text-primary title text-h3 text-left font-semibold">
                          DATE AND TIME
                        </div>
                        <p className=" text-h4 text-secondary text-left">
                          November 2nd, 2023
                        </p>
                        <p className=" text-h4 text-secondary text-left">
                          9.30 a.m. to 6.00 p.m
                        </p>
                      </div>
                    </div>
                    <div></div>

                    {/* <section class="portfolio-experiment absolute">
                      <a>
                        <span class="text">Register now!</span>
                        <span class="line -right"></span>
                        <span class="line -top"></span>
                        <span class="line -left"></span>
                        <span class="line -bottom"></span>
                      </a>
                    </section> */}

                    <div className="py-2 my-2 px-10 mx-auto text-h2 shadow  bg-primary hover:bg-yellow cursor-pointer duration-300 rounded-lg font-semibold title tracking-wider text-white">
                      Register now!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img src={AIG} className=" h-[100vh]  object-cover w-full" />
        </div>
      </section>

      <section className=" container mx-auto">
        <div className=" py-16 ">
          <h1 className=" font-semibold text-yellow text-h1">EVENT INFO</h1>
          <div className=" grid grid-cols-12 py-2 gap-10">
            <div className=" col-span-4">
              <img src={AI_BRAIN} />
            </div>

            <div className=" col-span-8  h-full center">
              <h3 className=" text-h3 text-left text-[#363636] font-semibold">
                CII is organizing the 7th edition of National Higher Education
                Conclave (NHEC) with the theme,{" "}
                <span className="  text-primary  ">
                  “Artificial Intelligence and Educational Technology for
                  Transforming Higher Education”
                </span>{" "}
                on 02 November 2023 at Hotel Le Meridien, Coimbatore.
              </h3>
            </div>
          </div>

          <div>
            <p>
              Technology adoption in higher education has advanced significantly
              in many ways and technology is poised to drive delivery of higher
              education in the future. In particular, the role of Artificial
              Intelligence in the Teaching-Learning process in Higher Education
              is expected to undergo a tectonic, era-defining shift. From
              digital content and curation to pedagogical approaches to
              evaluation and assessment of outcomes, artificial intelligence
              will determine the effectiveness of the teaching-learning process.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default React.memo(Home);
