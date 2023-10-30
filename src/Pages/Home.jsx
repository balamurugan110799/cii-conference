import React, { useEffect, useState } from "react";
import AI from "../Components/Asset/Image/Home/AI.png";
import AIG from "../Components/Asset/Image/Home/AI_BRAN.png";
import AI_BRAIN from "../Components/Asset/Image/Home/4402944_18296.jpg";
import AI_BRAINMobile from "../Components/Asset/Image/Home/mobile-view.png";

import AI_TECH from "../Components/Asset/Image/Home/4546131_3922.jpg";
import { IoIosArrowDown } from "react-icons/io";
import CII from "../Components/Asset/Image/Home/CII_Logo.png";
import NHEC from "../Components/Asset/Image/Home/NHEC.png";
import SVG from "../Layout/SVG";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

import Abhilash from "../Components/Asset/Image/Speakers/Abhilash Misra.png";
import Nandini from "../Components/Asset/Image/Speakers/Dr R Nandini.png";
import Shankar from "../Components/Asset/Image/Speakers/Mr Shankar Vanavarayar.png";
import Speaker from "../Layout/Speaker";
import PreviousEditions from "../Layout/Previous-Editions";
import { BsPlayCircleFill, BsFillPauseFill } from "react-icons/bs";
// import { BiSolidTimeFive } from "react-icons/bi";
import { HiLocationMarker, HiClock } from "react-icons/hi";
import ConclaveSession from "../Layout/ConclaveSession";
import Expect from "../Layout/Expect";
import Sponser from "../Layout/Sponser";
import Gallery from "../Layout/Gallery";
import vid from "../Components/Asset/Image/video/VID.mp4";
import CIIE from "../Components/Asset/Image/Home/Background.png";
import Loader from "../Layout/Loader";
import Footer from "../Layout/Footer";
import Session from "../Layout/Session";
import axios from "axios";

// import {SVG} from "../Components/SVG/rrreplicate.svg"

function Home() {
  const navigate = useNavigate();

  const [controlVideo, setVideoControl] = useState(false);

  const [data, setData] = useState({
    name: "",
    Phonenumber: "",
    email: "",
    Inst_CompanyName: ""
  })

  const [errors, setErrors] = useState({
    name: "",
    Phonenumber: "",
    email: "",
    Inst_CompanyName: ""
  })

  const [vaild, setValid] = useState(true)
  const [vaildStatus, setVaildStatus] = useState(false)

  const [submitDisable, setSubmitDisable] = useState(false)

  const [messageStatus,setMessageStatus]=useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  if (vaild === true) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (data.name === "") {
      errors.name = "required"
    } else if (data.name === undefined) {
      errors.name = "required"
    } else {
      errors.name = true
    }

    if (data.Phonenumber === "") {
      errors.Phonenumber = "required"
    } else if (data.Phonenumber === undefined) {
      errors.Phonenumber = "required"
    } else if (data.Phonenumber.length < 10 || data.Phonenumber.length > 20) {
      errors.Phonenumber = "vaild required"
    } else {
      errors.Phonenumber = true
    }

    if (data.email === "") {
      errors.email = "required"
    } else if (data.email === undefined) {
      errors.email = "required"
    } else if (!regex.test(data.email)) {
      errors.email = "vaild email required"
    } else {
      errors.email = true
    }

    if (data.Inst_CompanyName === "") {
      errors.Inst_CompanyName = "required"
    } else if (data.Inst_CompanyName === undefined) {
      errors.Inst_CompanyName = "required"
    } else {
      errors.Inst_CompanyName = true
    }
  }



  const handleSubmit = (e) => {
    // const error = handleError(data)
    setVaildStatus(true)

    if (errors.name === true && errors.Inst_CompanyName === true && errors.Phonenumber === true && errors.email === true) {
      setSubmitDisable(true)
      setMessageStatus(true)
      axios.post("https://rvscas.com/api/createciiform", data)
        .then((res) => {
          setSubmitDisable(false)
          console.log("Success")
          sessionStorage.setItem("status", "success");
          // window.location = "/thank-you"
          navigate('/thank-you')
        })
        .catch((err) => {
          setSubmitDisable(false)
          alert("Error")
          console.log(err)
        })
    }
    e.preventDefault();
    setSubmitDisable(true)
  }

  const [faq, setFAQ] = useState([
    {
      id: 0,
      question:
        "What is the date and time of the National Higher Education Conclave 2023?",
      answer: (
        <div className="bg-[#fee9cf] rounded-[10px] my-2 px-10 p-4">
          <p className=" text-[#784503] text-left text-[18px]  sm:text-base smmd:text-base ">
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
          <p className=" text-[#784503] text-left text-[18px]  sm:text-base smmd:text-base ">
            The event will be hosted at Hotel Le Meridien in Coimbatore, Tamil
            Nadu.
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
          <p className=" text-[#784503] text-left text-[18px]  sm:text-base smmd:text-base ">
            The National Higher Education Conclave (NHEC) is an event organized
            by CII, with a focus on AI and EdTech for transforming higher
            education. With an expected attendance of 500+, it serves as a
            platform for dialogue between education and industry stakeholders.
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
          <p className=" text-[#784503] text-left text-[18px]  sm:text-base smmd:text-base ">
            Industry Attendees: ₹7,500 + GST per person.
          </p>
          <p className=" text-[#784503] text-left text-[18px]  sm:text-base smmd:text-base ">
            Institutional Faculty: ₹3,500 + GST per person.
          </p>
          <p className=" text-[#784503] text-left text-[18px]  sm:text-base smmd:text-base ">
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
          <p className=" text-[#784503] text-left text-[18px]  sm:text-base smmd:text-base ">
            Plenary Session on AI and EdTech
          </p>
          <p className=" text-[#784503] text-left text-[18px]  sm:text-base smmd:text-base ">
            Enhancing Teaching and Learning (Discussion)
          </p>
          <p className=" text-[#784503] text-left text-[18px]  sm:text-base smmd:text-base ">
            AI for Academic Administration
          </p>
          <p className=" text-[#784503] text-left text-[18px]  sm:text-base smmd:text-base ">
            Student Engagement with AI
          </p>
          <p className=" text-[#784503] text-left text-[18px]  sm:text-base smmd:text-base ">
            Future of Work and Future Work (Discussion)
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
          <p className=" text-[#784503] text-left text-[18px]  sm:text-base smmd:text-base ">
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

  const [loaderState, setLoaderState] = useState(true);

  const LoaderFunction = () => {
    setTimeout(() => {
      setLoaderState(false);
    }, 3000);
  };

  useEffect(() => {
    LoaderFunction();

    window.addEventListener("scroll", (event) => {
      var y = window.scrollY;
      if (y >= 600) {
        $("#scrolling").fadeIn("slow");
      } else if (y <= 600) {
        $("#scrolling").fadeOut(2000);
      }
    })
  }, []);

  // const [data, setData] = useState({
  //   username: "",
  // });

  const handleVideoContoller = () => {
    var ciiVideo = document.getElementById("video");

    if (ciiVideo.paused) {
      ciiVideo.play();
    } else {
      ciiVideo.pause();
    }
    setVideoControl(!controlVideo);
  };

  // const handleKeypressEvent = (e) => {
  //   console.log(e);
  //   data.username = "hello";
  //   serForcerender(!forceRender);
  // };
  // const handleKeyDown = (e) => {
  //   document.getElementById("keydown").style.background = "yellow";
  // };
  // const handleKeyUp = (e) => {
  //   document.getElementById("keydown").style.background = "red";
  // };
  return (
    <div>
      {loaderState ? <Loader /> : <>


        <div className=" relative">



          <section className=" ">
            <div className=" relative ">
              <div className=" absolute md:bottom-[0%] top-0 h-[100vh]  md:h-auto  sm:h-auto smmd:h-auto w-full">
                <div className="  py-6 sm:py-0 smmd:py-0">
                  <div className=" container mx-auto">
                    <div className="grid grid-cols-12 gap-4 sm:grid-cols-1 smmd:grid-cols-1 md:grid-cols-1 ">
                      <div className="sm:col-span-12 col-span-2"></div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                // onClick={() => handleVideoContoller()}
                class=" absolute w-[100%] mx-auto h-full  top-0 left-0 bg-[#033c895c]   z-40"
              >
                <div className="grid grid-cols-12 gap-4 sm:grid-cols-1 smmd:grid-cols-1 md:grid-cols-1 ">
                  <div className="sm:col-span-12 col-span-2">
                    <div className=" flex z-50 top-0 py-2 sm:py-0 smmd:py-0 absolute left-0">
                      <div className>
                        <img
                          src={CII}
                          alt="CII"
                          className="z-50 sm:h-[50px] smmd:h-[50px]  h-[80px] md:h-[80px] pr-4 object-cover "
                        />
                      </div>
                      <div>
                        <img
                          src={NHEC}
                          alt="CII"
                          className="z-50 sm:h-[50px] smmd:h-[50px] h-[80px] md:h-[80px] object-cover "
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" top-0 py-2 right-0 absolute col-span-10 sm:hidden smmd:hidden md:hidden ">
                    <div className="flex justify-end  py-10">
                      <div className=" title text-base  font-bold tracking-widest hover:text-yellow duration-300 text-white pr-6 cursor-pointer">
                        HOME
                      </div>
                      <a href="#event-info">
                        <div className="title center text-base font-bold hover:text-yellow duration-300 text-white px-6 tracking-widest cursor-pointer">
                          EVENT INFO
                        </div>
                      </a>
                      <a href="#speaker">
                        <div className="title  text-base font-bold hover:text-yellow duration-300 text-white px-6 tracking-widest cursor-pointer">
                          SPEAKERS
                        </div>
                      </a>
                      <a href="#sponsors">
                        <div className=" title text-base font-bold hover:text-yellow duration-300 text-white px-6 tracking-widest cursor-pointer">
                          SPONSORS
                        </div>
                      </a>
                      <a href="#contact-us">
                        <div className="title  text-base font-bold hover:text-yellow duration-300 text-white px-6 tracking-widest cursor-pointer">
                          CONTACT US
                        </div>
                      </a>

                      <div></div>
                    </div>
                  </div>
                </div>
                <div id="form" className="">
                  <div className=" grid grid-cols-12 md:grid-col-full sm:grid-col-full smmd:grid-col-full gap-10">
                    <div className=" col-span-6 md:mx-4 sm:mx-4  sm:hidden smmd:hidden md:hidden  smmd:mx-4 md:col-span-full sm:col-span-full smmd:col-span-full bg-[#033c89f2]  md:p-4 p-6 sm:p-4 smmd:p-4 border-yellow-header">
                      <div className=" text-left text-white tracking-wide text-[30px] md:text-[24px] sm:text-[24px] smmd:text-[24px] leading-[38px]  font-semibold ">
                        National Higher Education Conclave 2023 7<sup>th</sup> Edition
                      </div>
                      <div className=" text-left text-yellow tracking-wide sm:hidden md:hidden smmd:hidden sm:pt-0 smmd:pt-0 md:pt-0  pt-4 text-[20px] sm:text-[18px] smmd:text-[18px]  font-semibold ">
                        Artificial Intelligence & Educational Technology for
                        Transforming Higher Education
                      </div>

                      <div>
                        <form  className=" pt-4">
                          <div className=" grid grid-cols-12 gap-4">
                            <div className=" col-span-6">
                              <input name="name" onChange={(e) => handleChange(e)} type="text" className=" w-full p-2 text-[#4f4f4f] placeholder:text-[#4f4f4f]" placeholder="* Name " />
                              {vaildStatus ? <div className=" text-sm  text-left text-yellow">
                                {errors.name}
                              </div> : null}



                            </div>
                            <div className=" col-span-6">
                              <input name="Phonenumber" onChange={(e) => handleChange(e)} type="number" className=" w-full p-2 text-[#4f4f4f] placeholder:text-[#4f4f4f]" placeholder="* Phone Number " />
                              {vaildStatus ? <div className=" text-sm  text-left text-yellow">
                                {errors.Phonenumber}
                              </div> : null}

                            </div>
                            <div className=" col-span-full">
                              <input name="email" onChange={(e) => handleChange(e)} type="email" className=" w-full p-2 text-[#4f4f4f] placeholder:text-[#4f4f4f]" placeholder="* Email " />
                              {vaildStatus ? <div className=" text-sm  text-left text-yellow">
                                {errors.email}
                              </div> : null}

                            </div>
                            <div className=" col-span-full">
                              <input name="Inst_CompanyName" onChange={(e) => handleChange(e)} type="text" className=" w-full p-2 text-[#4f4f4f] placeholder:text-[#4f4f4f]" placeholder="* Institution / Company Name " />
                              {vaildStatus ? <div className=" text-sm  text-left text-yellow">
                                {errors.Inst_CompanyName}
                              </div> : null}
                            </div>
                            <div className=" col-span-full">
                              <button  onClick={(e) => handleSubmit(e)} className=" py-2 my-2 sm:text-h5 px-10 sm:text-h4  w-full mx-auto text-h4 shadow hover:text-primary  bg-yellow hover:bg-secondary cursor-pointer duration-300 rounded-lg font-semibold title tracking-wider text-white" >
                                Submit
                              </button>
                              {/* {submitDisable ? <span className=" text-white text-left font-semibold tracking-wider">Loading Please Wait...</span> : null} */}


                            </div>
                          </div>

                        </form>
                      </div>
                    </div>
                    <div className=" col-span-6 md:col-span-full  sm:col-span-full smmd:col-span-full center">
                      {/* {controlVideo ? null : (
                    <div
                      onClick={() => handleVideoContoller()}
                      className="pulse-animation "
                    >
                      {" "}
                      <div className=" border-4 group-hover:border-white p-2 sm:p-[1px] smmd:p-[1px] md:p-[1px] border-yellow rounded-[50%]">
                        <BsPlayCircleFill className=" text-yellow text-[70px] sm:text-[40px] md:text-[40px] smmd:text-[40px] rounderd-[50%] p-1 px-2 group-hover:text-white duration-3000" />
                      </div>
                    </div>
                  )} */}
                    </div>
                  </div>



                </div>

                {controlVideo ? null : (
                  <div onClick={() => handleVideoContoller()} className=" ">
                    {" "}
                  </div>
                )}
              </button>
              <video
                poster={CIIE}
                className="mx-auto h-full w-full  "
                id="video"
                preload="auto"
                loop
                muted
                autoPlay
              >
                <source src={vid} type="video/mp4" className=" " />
              </video>
            </div>
          </section>

          <div className=" grid grid-cols-12 desktop-heading md:grid-col-full sm:grid-col-full smmd:grid-col-full mt-6 sm:mb-6 smmd:mb-6 md:mb-6 gap-10">
            <div className=" col-span-full md:mx-4 sm:mx-4  smmd:mx-4 md:col-span-full sm:col-span-full smmd:col-span-full bg-primary  md:p-4 p-6 sm:p-4 smmd:p-4 border-yellow-header">
              <div className=" text-left text-white tracking-wide text-[30px] md:text-[24px] sm:text-[24px] smmd:text-[24px] leading-[38px]  font-semibold ">
                National Higher Education Conclave 2023 7<sup>th</sup> Edition
              </div>
              <div className=" text-left text-yellow tracking-wide sm:pt-0 smmd:pt-0 md:pt-0  pt-4 text-[20px] sm:text-[18px] smmd:text-[18px]  font-semibold ">
                Artificial Intelligence & Educational Technology for
                Transforming Higher Education
              </div>
              <div>
                <form className=" pt-4">
                  <div className=" grid grid-cols-12 gap-4">
                    <div className=" col-span-6 sm:col-span-full smmd:col-span-full">
                      <input name="name" onChange={(e) => handleChange(e)} type="text" className=" w-full p-2 text-[#4f4f4f] placeholder:text-[#4f4f4f]" placeholder="* Name " />
                      {vaildStatus ? <div className=" text-sm  text-left text-yellow">
                        {errors.name}
                      </div> : null}



                    </div>
                    <div className=" col-span-6 sm:col-span-full smmd:col-span-full">
                      <input name="Phonenumber" onChange={(e) => handleChange(e)} type="number" className=" w-full p-2 text-[#4f4f4f] placeholder:text-[#4f4f4f]" placeholder="* Phone Number " />
                      {vaildStatus ? <div className=" text-sm  text-left text-yellow">
                        {errors.Phonenumber}
                      </div> : null}

                    </div>
                    <div className=" col-span-full">
                      <input name="email" onChange={(e) => handleChange(e)} type="email" className=" w-full p-2 text-[#4f4f4f] placeholder:text-[#4f4f4f]" placeholder="* Email " />
                      {vaildStatus ? <div className=" text-sm  text-left text-yellow">
                        {errors.email}
                      </div> : null}

                    </div>
                    <div className=" col-span-full">
                      <input name="Inst_CompanyName" onChange={(e) => handleChange(e)} type="text" className=" w-full p-2 text-[#4f4f4f] placeholder:text-[#4f4f4f]" placeholder="* Institution / Company Name " />
                      {vaildStatus ? <div className=" text-sm  text-left text-yellow">
                        {errors.Inst_CompanyName}
                      </div> : null}
                    </div>
                    <div className=" col-span-full">
                       
                          <button onClick={(e) => handleSubmit(e)} className=" py-2 my-2 sm:text-h5 px-10 sm:text-h4  w-full mx-auto text-h4 shadow hover:text-primary  bg-yellow hover:bg-secondary cursor-pointer duration-300 rounded-lg font-semibold title tracking-wider text-white" >
                            Submit
                          </button>
                          {/* <div>
                            {submitDisable ? <span className=" text-white text-left font-semibold tracking-wider">Loading Please Wait...</span> : null}
                          </div> */}
                  



                

                    </div>



                  </div>

                </form>
              </div>
            </div>
            <div className=" col-span-6 md:col-span-full  sm:col-span-full smmd:col-span-full center">

            </div>
          </div>

          <div></div>

          <section
            id="event-info"
            className=" container mx-auto sm:px-4 smmd:px-4 md:px-4"
          >
            <div className=" py-16 pb-10  sm:pb-10 smmd:pb-10 sm:pt-0 smmd:pt-0 md:pt-0">
              <h1 className=" font-semibold sm:text-h3 smmd:text-h3  text-yellow text-h1 pb-4">
                EVENT INFO
              </h1>
              <div></div>

              <div className=" container mx-auto  md:px-4">
                <div className=" grid  grid-cols-12 sm:grid-cols-full smmd:grid-cols-full md:grid-cols-12 md:pt-2 gap-4">
                  <div className=" col-span-4 sm:col-span-full smmd:col-span-full md:col-span-full ">
                    <div className="bg-primary rounded-lg p-10">
                      <div className=" mx-auto">
                        <div className=" grid grid-cols-full py-4">
                          <div>
                            <div className=" text-white title text-h4 pb-2 sm:text-h5  smmd:text-h5 text-left font-semibold">
                              VENUE
                            </div>
                            <p className=" text-h6 text-white sm:text-h6 smmd:text-h6 text-left">
                              Hotel Le Meridien
                            </p>
                            <p className=" text-h6 text-white sm:text-h6 smmd:text-h6 text-left">
                              Neelambur, Coimbatore{" "}
                            </p>
                            <p className=" text-h6 text-white sm:text-h6 smmd:text-h6 text-left">
                              Tamilnadu, India - 641062
                            </p>
                          </div>
                          <div>
                            <div className="  pt-4 text-white pb-2 title text-h4 sm:text-h5 smmd:text-h5 text-left font-semibold">
                              DATE AND TIME
                            </div>
                            <p className=" text-h6 text-white sm:text-h6 smmd:text-h6 text-left">
                              November 02<sup className="">nd </sup>  2023
                            </p>
                            <p className=" text-h6 text-white sm:text-h6 smmd:text-h6 text-left">
                              9.30 a.m to 6.00 p.m
                            </p>
                          </div>
                        </div>
                        <div></div>

                        <div className=" text-white sm:pt-10 smmd:pt-10 text-left">
                          *fee applicable
                        </div>
                        <a
                        href="#form"
                      >
                          <div className="py-2 my-2 px-10 sm:text-h4 smmd:text-h4 mx-auto text-h2 shadow hover:text-primary  bg-yellow hover:bg-yellow cursor-pointer duration-300 rounded-lg font-semibold title tracking-wider text-white">
                            Register now!
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className=" col-span-8  sm:col-span-full smmd:col-span-full md:col-span-full py-4 px-8 sm:px-0 smmd:px-0 md:px-0 md:pb-0">
                    <div className=" grid grid-cols-12 sm:grid-cols-1 smmd:grid-cols-1 md:grid-cols-1 py-2 gap-10 sm:gap-0 smmd:gap-0 ">
                      <div className=" col-span-12 sm:col-span-12 smmd:col-span-12 md:col-span-12">
                        <img
                          src={AI_BRAIN}
                          className=" h-[200px]  sm:w-full smmd:w-full md:mx-auto"
                        />

                        <div>
                          <a href="#" class="playBut"></a>
                        </div>
                      </div>

                      <div className=" col-span-12 sm:col-span-12 smmd:col-span-12 md:col-span-12 sm:pt-10 smmd:pt-10  h-full center">
                        <h3 className=" text-h3 sm:text-h5 text-justify smmd:text-h5  text-[#4f4f4f] ">
                          <span className=" ">CII </span>is organizing the 7th
                          edition of National Higher Education Conclave (NHEC) with
                          the theme,{" "}
                          <span className="  text-primary  font-semibold">
                            “Artificial Intelligence and Educational Technology for
                            Transforming Higher Education”
                          </span>{" "}
                          on 02 November 2023 at Hotel Le Meridien, Coimbatore.
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-12 sm:grid-cols-1 smmd:grid-cols-12 md:grid-cols-full pt-8 gap-6">
                <div className=" col-span-8 sm:col-span-12 smmd:col-span-12 md:col-span-full sm:py-8 smmd:py-8 sm:pt-0 smmd:pt-0 py-16 md:pt-0">
                  <div>
                    <p className=" text-[18px] sm:text-base text-justify smmd:text-base pt-4 text-[#686868] ">
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
                      <p className=" text-[18px]  text-justify sm:text-base smmd:text-base  pt-4 text-[#686868] ">
                        Accordingly, NHEC will provide an opportunity for
                        constructive dialogues and deliberation among all the
                        stakeholders, including the industry, in the education
                        sector in line with the theme of the conclave.
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className=" text-[18px]  sm:text-base smmd:text-base text-left pt-4 text-[#686868] ">
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

                <div className=" col-span-4 sm:col-span-12 smmd:col-span-12 md:col-span-12  h-full">
                  <img
                    src={AI_TECH}
                    className="w-full h-full sm:hidden smmd:hidden"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="  py-16  sm:pt-0 smmd:pt-0 pb-0">
              <h1 className=" font-semibold text-yellow text-h1 sm:text-h3  smmd:text-h3 pb-4 sm:pb-10 smmd:pb-10">
                AGENDA
              </h1>
              <div className="py-10 sm:py-0 smmd:py-0 sm:px-4 smmd:px-4">
                <Session />
              </div>
            </div>
          </section>

          <section id="speaker">
            <div className="  py-16  sm:pt-0 smmd:pt-0 pb-0">
              <h1 className=" font-semibold text-yellow text-h1 sm:text-h3  smmd:text-h3 pb-4 sm:pb-10 sm:pt-10 smmd:pt-10 smmd:pb-10">
                SPEAKERS
              </h1>
              <div className="py-10 sm:py-0 smmd:py-0 sm:px-4 smmd:px-4">
                <Speaker />
              </div>
            </div>
          </section>

          <section className=" md:px-4">
            <div className="pt-0 py-16">
              <div className=" pt-6">
                <h1 className=" font-semibold text-yellow text-h1 sm:pt-10 smmd:pt-10 sm:pb-0 smmd:pb-0 sm:text-h3 smmd:text-h3 pb-10">
                  CONCLAVE SESSION
                </h1>
                <ConclaveSession />
              </div>
            </div>
          </section>
          <div className=" sm:hidden smmd:hidden bg-primary">
            <input
              type="text"
              // onKeyPress={(e) => handleKeypressEvent(e)}
              // onKeyDown={(e) => handleKeyDown(e)}
              // onKeyUp={(e) => handleKeyUp(e)}
              id="keydown"
            />
            <input type="text" value={data.username} disbled />
          </div>

          <section className="pb-10 ">
            <div className="pt-0 py-16 sm:pb-0 smmd:pb-0">
              <div className=" ">
                <Expect />
              </div>
            </div>
          </section>

          <section className=" bg-yellow sm:px-4 smmd:px-4">
            <div className="">
              <div className=" pt-6">
                <h1 className=" font-semibold text-white  sm:text-h3 smmd:text-h3 text-h1 pb-10 ">
                  PREVIOUS EDITIONS
                </h1>
                <PreviousEditions />
              </div>
            </div>
          </section>

          <section className=" backgrond py-8 sm:py-12 smmd:py-12 w-full sm:px-4 smmd:px-4">
            <div className=" py-10">
              <div className=" container mx-auto">
                <div className=" grid grid-cols-12  smmd:grid-cols-12 sm:grid-cols-full gap-2">
                  <div className=" col-span-8 sm:col-span-full smmd:col-span-full md:col-span-full">
                    <h4 className=" text-white text-h2  px-2 sm:text-h5 smmd:text-h5 text-left">
                    It's time to enrich your knowledge with the 7th edition of CCI's National Higher Education Conclave 
                    </h4>
                    {/* <h4 className=" text-white text-h4 text-left">
                  Artificial Intelligence & Educational Technology for
                  Transforming Higher Education
                </h4> */}
                    <div>
                      {/* <div className=" grid grid-cols-2 py-4 sm:pt-8 smmd:pt-8">
                    <div className=" text-white  text-left">
                      {" "}
                      <div className=" bg-primary  mb-2 rounded-lg center h-[40px] w-[40px]">
                        <HiLocationMarker className=" text-h2 text-yellow" />
                      </div>
                      <div>
                        Hotel Le Meridien, Coimbatore, <br /> Neelambur,
                        Tamilnadu, India - 641062
                      </div>
                    </div>{" "}
                    <div className=" text-white  text-left">
                      {" "}
                      <div className=" bg-primary  mb-2 rounded-lg center h-[40px] w-[40px]">
                        <HiClock className=" text-h2 text-yellow" />
                      </div>
                      <div>November <sup>2nd</sup> <br/> 2023 9.30 a.m  to 6.00 p.m</div>
                    </div>{" "}
                  </div> */}
                    </div>
                    <div></div>
                  </div>
                  <div className=" col-span-4 sm:col-span-full smmd:col-span-full md:col-span-full h-full relative">
                    <div className=" absolute sm:relative smmd:relative md:relative bottom-0 w-full">
                      <div className=" text-secondary  text-sm sm:pt-4 smmd:pt-4 text-left">
                        *fee applicable
                      </div>
                      <a
                        href="#form"
                      >
                        <div className="py-2 my-2 sm:text-h5 smmd:text-h5 px-10 sm:text-h4 smmd:text-h4 mx-auto text-h2 shadow hover:text-primary  bg-yellow hover:bg-yellow cursor-pointer duration-300 rounded-lg font-semibold title tracking-wider text-white">
                        Grab Your Slot
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className=" bg-white sm:px-4 smmd:px-4">
            <div className="py-16 pb-4">
              <div className=" pt-6">
                <h1 className=" font-semibold text-yellow  sm:text-h3 smmd:text-h3 text-h1 pb-10">
                  GALLERY
                </h1>
                <Gallery />
              </div>
            </div>
          </section>

          <section className=" ">
            <Sponser />
          </section>
          <section id="" className="md:px-4">
            <div className=" py-10 pb-8 ">
              <h1 className=" font-semibold sm:text-h3 smmd:text-h3 text-yellow text-h1">
                Frequently Asked Questions
              </h1>
            </div>

            <div className="pb-16 sm:px-4 smmd:px-4">
              <div className=" grid grid-cols-12 sm:grid-cols-1 smmd:grid-cols-1 md:grid-cols-1">
                <div className=" col-span-2 sm:hidden smmd:hidden md:hidden"></div>
                <div className=" col-span-8  ">
                  {faq?.map((v, i) => {
                    return (
                      <div key={i}>
                        <div
                          onClick={() => handleFaq(v, i)}
                          className={`${v?.status === true
                            ? "border-primary text-primary"
                            : "border-secondary text-[#6d6d6d] mb-2"
                            } cursor-pointer duration-3000 text-left px-10 relative border-2  sm:text-h5 smmd:text-h5  py-2 text-h4 rounded-[10px] `}
                        >
                          {v?.question}
                          <div
                            className={` ${v?.status === true ? "rotate-180" : "rotate-0	"
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

          <Footer />


          <div id="scrolling" className="sticky z-50 bottom-0 bg-[#c29729f2] py-8 sm:py-4 sm:p-2 smmd:p-2 md:p-2  smmd:py-4">

            <div className=" container mx-auto">
              <div className=" grid grid-cols-12  smmd:grid-cols-12 sm:grid-cols-full gap-2">
                <div className=" col-span-8 sm:col-span-full sm:hidden smmd:hidden smmd:col-span-full md:col-span-full">
                  <h4 className=" text-white  text-h4 md:text-h5 sm:text-h5 smmd:text-h5 text-left">
                    To Enhance Your Knowledge on “Artificial Intelligence &
                    Educational Technology for Transforming Higher Education”
                  </h4>
                  <div>
                  </div>
                  <div></div>
                </div>
                <div className=" col-span-4 sm:col-span-full smmd:col-span-full md:col-span-full h-full relative">
                  <div className="mt-4 sm:mt-0 smmd:mt-0 md:mt-0 absolute sm:relative smmd:relative md:relative bottom-0 w-full">
                    <div className=" text-primary  text-sm text-left">
                      *fee applicable
                    </div>
                    <a
                      href="#form"
                    >
                      <div className="py-2 my-2 sm:text-h5px-10 sm:text-h4  mx-auto text-h4 shadow hover:text-primary  bg-primary hover:bg-secondary cursor-pointer duration-300 rounded-lg font-semibold title tracking-wider text-white">
                        Reserve Your Spot
                      </div>
                    </a>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </>}
    </div>
  );
}

export default React.memo(Home);
