import React, { useState } from "react";
import AI from "../Components/Asset/Image/Home/AI.png";
import AIG from "../Components/Asset/Image/Home/AIF.jpg";
import AI_BRAIN from "../Components/Asset/Image/Home/4402944_18296.jpg";
import AI_TECH from "../Components/Asset/Image/Home/4546131_3922.jpg";
import { IoIosArrowDown } from "react-icons/io";
import CII from "../Components/Asset/Image/Home/CII_Logo.png";
import SVG from "../Layout/SVG";
import Abhilash from "../Components/Asset/Image/Speakers/Abhilash Misra.png";
import Nandini from "../Components/Asset/Image/Speakers/Dr R Nandini.png";
import Shankar from "../Components/Asset/Image/Speakers/Mr Shankar Vanavarayar.png";
import Speaker from "../Layout/Speaker";

// import {SVG} from "../Components/SVG/rrreplicate.svg"

function Home() {
  const [faq, setFAQ] = useState([
    {
      id: 0,
      question:
        "What is the date and time of the National Higher Education Conclave 2023?",
      answer: (
        <div className="bg-[#fee9cf] rounded-[10px] my-2 px-10 p-4">
          <p className=" text-[#784503] text-left text-[18px] ">
            The event is on November 2, 2023, from 9.30 AM to 6.00 PM.
          </p>
        </div>
      ),
      status: false,
    },
    {
      id: 1,
      question:
        "Where will the event take place? Please provide the venue details.",
      answer: (
        <div className="bg-[#fee9cf] rounded-[10px] my-2 px-10 p-4">
          <p className=" text-[#784503] text-left text-[18px] ">
            The event is on November 2, 2023, from 9.30 AM to 6.00 PM.
          </p>
        </div>
      ),
      status: false,
    },
    {
      id: 2,
      question:
        "Could you provide more information about the NHEC, such as its objectives and the expected number of attendees?",
      answer: (
        <div className="bg-[#fee9cf] rounded-[10px] my-2 px-10 p-4">
          <p className=" text-[#784503] text-left text-[18px] ">
            The event is on November 2, 2023, from 9.30 AM to 6.00 PM.
          </p>
        </div>
      ),
      status: false,
      // answer: "The National Higher Education Conclave (NHEC) is an event organized by CII, with a focus on AI and EdTech for transforming higher education. With an expected attendance of 500+, it serves as a platform for dialogue between education and industry stakeholders."
    },
    {
      id: 3,
      question:
        "How much is the registration fee to attend the National Higher Education Conclave 2023?",
      answer: (
        <div className="bg-[#fee9cf] rounded-[10px] my-2 px-10 p-4">
          <p className=" text-[#784503] text-left text-[18px] ">
            Industry Attendees: ₹7,500 + GST per person.
          </p>
          <p className=" text-[#784503] text-left text-[18px] ">
            Institutional Faculty: ₹3,500 + GST per person.
          </p>
          <p className=" text-[#784503] text-left text-[18px] ">
            Please note that these fees are applicable per person for respective
            categories.
          </p>
        </div>
      ),
      status: false,
    },
    {
      id: 4,
      question:
        "What are the key sessions and discussions that will occur during the conclave, particularly concerning AI and EdTech in higher education?",
      answer: (
        <div className="bg-[#fee9cf] rounded-[10px] my-2 px-10 p-4">
          <p className=" text-[#784503] text-left text-[18px] ">
            Plenary Session on AI and EdTech
          </p>
          <p className=" text-[#784503] text-left text-[18px] ">
            Enhancing Teaching and Learning (Discussion)
          </p>
          <p className=" text-[#784503] text-left text-[18px] ">
            AI for Academic Administration
          </p>
          <p className=" text-[#784503] text-left text-[18px] ">
            Student Engagement with AI
          </p>
          <p className=" text-[#784503] text-left text-[18px] ">
            Future of Work and Education (Discussion)
          </p>
        </div>
      ),
      status: false,
    },
    {
      id: 5,
      question:
        "What are the key sessions and discussions that will occur during the conclave, particularly concerning AI and EdTech in higher education?",
      answer: (
        <div className="bg-[#fee9cf] rounded-[10px] my-2 px-10 p-4">
          <p className=" text-[#784503] text-left text-[18px] ">
            CII NHEC is designed for Institutional Correspondents, Trustees,
            Secretaries, Industry Board Members, CEOs, Directors, and Senior
            Officials.
          </p>
        </div>
      ),
      status: false,
    },
  ]);

  const [forceRender, serForcerender] = useState(false);

  const handleFaq = (v, i) => {
    // console.log(v)
    faq.forEach((el) => {
      if (el.id === v.id) {
        el.status = !el.status;
        console.log(el.status);
      } else {
        el.status = false;
      }
    });
    serForcerender(!forceRender);

    setFAQ(faq);
  };

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
                          Neelambur, Coimbatore,{" "}
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
          <h1 className=" font-semibold text-yellow text-h1 pb-4">
            EVENT INFO
          </h1>
          <div className=" grid grid-cols-12 py-2 gap-10">
            <div className=" col-span-4">
              <img src={AI_BRAIN} />
            </div>

            <div className=" col-span-8  h-full center">
              <h3 className=" text-h3 text-left text-[#4f4f4f] ">
                <span className=" ml-16">CII </span>is organizing the 7th
                edition of National Higher Education Conclave (NHEC) with the
                theme,{" "}
                <span className="  text-primary  font-semibold">
                  “Artificial Intelligence and Educational Technology for
                  Transforming Higher Education”
                </span>{" "}
                on 02 November 2023 at Hotel Le Meridien, Coimbatore.
              </h3>
            </div>
          </div>

          <div className=" grid grid-cols-12 pt-8 gap-6">
            <div className=" col-span-8 py-16">
              <div>
                <p className=" text-[18px] text-left pt-4 text-[#686868] ">
                  <span> Technology</span> adoption in higher education has
                  advanced significantly in many ways and technology is poised
                  to drive delivery of higher education in the future. In
                  particular, the role of{" "}
                  <span className=" text-primary font-semibold">
                    Artificial Intelligence in the Teaching-Learning process in
                    Higher Education{" "}
                  </span>
                  is expected to undergo a tectonic, era-defining shift. From
                  digital content and curation to pedagogical approaches to
                  evaluation and assessment of outcomes, artificial intelligence
                  will determine the effectiveness of the teaching-learning
                  process.
                </p>
              </div>

              <div>
                <div>
                  <p className=" text-[18px] text-left pt-4 text-[#686868] ">
                    Accordingly, NHEC will provide an opportunity for
                    constructive dialogues and deliberation among all the
                    stakeholders, including the industry, in the education
                    sector in line with the theme of the conclave.
                  </p>
                </div>
              </div>

              <div>
                <p className=" text-[18px] text-left pt-4 text-[#686868] ">
                  The conclave is expected to be attended by 500+ delegates
                  consisting of a mix of{" "}
                  <span className=" font-semibold text-primary">
                    Correspondents, Trustees, Secretaries, Board Members, CEOs,
                    Directors and Senior Officials from industry and academia
                    across the country.
                  </span>
                </p>
              </div>
            </div>

            <div className=" col-span-4 h-full">
              <img src={AI_TECH} className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" py-16 ">
          <h1 className=" font-semibold text-yellow text-h1 pb-4">SPEAKERS</h1>
          <div className="py-10">

          <Speaker/>
          </div>
        </div>

        {/* <img src={SVG}/> */}
      </section>
      <section>
        <div className=" py-10 pb-8">
          <h1 className=" font-semibold text-yellow text-h1">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="pb-16">
          <div className=" grid grid-cols-12">
            <div className=" col-span-2"></div>
            <div className=" col-span-8 ">
              {faq?.map((v, i) => {
                return (
                  <div key={i}>
                    <div
                      onClick={() => handleFaq(v, i)}
                      className={`${
                        v?.status === true
                          ? "border-primary text-primary"
                          : "border-secondary text-[#6d6d6d] mb-2"
                      } cursor-pointer duration-3000 text-left px-10 relative border-2   py-2 text-h4 rounded-[10px] `}
                    >
                      {v?.question}
                      <div
                        className={` ${
                          v?.status === true ? "rotate-180" : "rotate-0	"
                        } duration-500 absolute right-0 top-0 p-3 `}
                      >
                        <IoIosArrowDown />
                      </div>
                    </div>

                    <div
                      className={` ${v?.status === true ? "block" : "hidden"}`}
                    >
                      {v?.answer}
                    </div>
                  </div>
                );
              })}
              <div></div>
            </div>
            <div className=" col-span-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default React.memo(Home);
