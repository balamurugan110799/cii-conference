import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

export default function Session() {
  const [sessionFirst, setSessionFirst] = useState(true)
  const [sessionSecond, setSessionSecond] = useState(false)
  const [sessionThird, setSessionThird] = useState(false)
  const [sessionFourth, setSessionFourth] = useState(false)
  const [sessionFixth, setSessionFifth] = useState(false)
  const [sessionSixth, setSessionSixth] = useState(false)

  const [renderForce, setRenderForce] = useState(false)

  const [sesssionFirstState, setSessionFirstSession] = useState(true)
  const [sesssionSecondState, setSessionSecondSession] = useState(false)
  const [sesssionThirdState, setSessionThirdSession] = useState(false)
  const [sesssionFourthState, setSessionFourthSession] = useState(false)
  const [sesssionFifthState, setSessionFifthSession] = useState(false)
  const [sesssionSixthState, setSessionSixthSession] = useState(false)




  const [Inaugural, setInaugural] = useState([
    {
      id: 1,
      time: "9.30 - 9.35",
      content: "Welcome Address",
      speaker:
        "Dr K Senthil Ganesh, Chairman, CII Coimbatore Zone & CEO, Transform Tech(I) Pvt Ltd",
    },
    {
      id: 2,
      time: "9.35 - 9.40",
      content: "Theme Address",
      speaker:
        "Dr R Nandini, Co-Chairperson, National Higher Education Conclave 2023 & Founder Trustee, GRG Trust",
    },
    {
      id: 3,
      time: "9.40 - 9.55 ",
      content: "Address",
      speaker:
        "Mr. Abhilash Misra, CEO, NSE Academy",
    },
    {
      id: 4,
      time: "9.55 - 10.10",
      content: "Special Address",
      speaker:
        "Mr. Hari Subramanian, Managing Director, Colruyt India",
    },
    {
      id: 5,
      time: "10.10 - 10.15",
      content: "Vote of Thanks",
      speaker: "Ms. S. Malarvizhi, Co-Chairperson, National Higher Education Conclave 2023 & Managing Trustee, Sri Krishna Institutions",
    },
    {
      id: 6,
      time: "10.15 - 10.45 ",
      content: "Networking Break",
      speaker: "",
    },
   
  ]);

  const [EdTech, setEdTech] = useState([
    {
      id: 1,
      time: "10.45 - 10.50",
      content: "	Opening Remarks by Panel Chairman",
      speaker: "Mr. Chocko Valliappa, Co-Convenor – Education Panel CII Tamil Nadu & Vice Chairman and Trustee, Sona Group Institutions",
    },
    {
      id: 2,
      time: "10.50 - 11.10",
      content: "Global Perspective on AI in Higher Education ",
      speaker: "Mr Abhilash Misra, CEO, NSE Academy",
    },
    {
      id: 3,
      time: "11.10 - 11.30",
      content: "EdTech Ecosystem in India ",
      speaker:
        "Mr Dulles Krishnan, Managing Director - Enterprise Coursera India",
    },
    {
      id: 4,
      time: "11.30 - 11.40",
      content: "Interaction and Q&A ",
      speaker: "",
    },
    {
      id: 5,
      time: "11.40 - 11.45",
      content: "Session changeover ",
      speaker: "",
    },
  ]);

  const [Learning, setLearning] = useState([
    {
      id: 1,
      time: "12.45  - 11.50",
      content: "Opening Remarks by Session Chairman",
      speaker: "Dr. Wg Cdr A Balachandran, Additional Director, Amrita Vishwa Vidaypeetham",
    },
    {
      id: 2,
      time: "11.50 - 12.10",
      content: "AI-Enhanced Curriculum Development",
      speaker: "Ms Vasanthi Srinivasan (ONLINE), Professor, IIM Bangalore.",
    },
    {
      id: 3,
      time: "12.10 - 12.30",
      content: "AI-Driven Assessment and Feedback",
      speaker: "Mr. Saurabh Nagarkar, AVP – Campus Solutions SHL India Pvt. Ltd.",
    },
    {
      id: 4,
      time: "12.30 - 12.50",
      content: "Interactive Learning with EdTech",
      speaker:
        "Dr Christopher Abraham*, CEO & Head - Dubai Campus, S P Jain School  of Global Management",
    },
    {
      id: 0,
      time: "12.50 - 13.05",
      content: "Interaction & close",
      speaker: "",
    },
    {
      id: 0,
      time: "13.05 - 14.00",
      content: "Lunch Break",
      speaker: "",
    },
  ]);

  const [StudentEngagement, setStudentEngagement] = useState([
    {
      id: 0,
      time: "14.00 - 14.05",
      content: "Opening Remarks by Panel Chairman",
      speaker: "Dr. K. Sundararaman, Chief Executive Officer, Sri Krishna Institutions",
    },
    {
      id: 0,
      time: "14.05 - 14.25",
      content: "Presentation by",
      speaker:
        "Mr. Rahul V Rodriguez, Vice President, Woxsen University",
    },
    {
      id: 0,
      time: "14.25 - 14.45",
      content: <div>

        <div>Presentation by</div>

      </div>,
      speaker:<div>
        
        <div>Mr. Ravin Nair, Chief Operating Officer, QS 1-GAUGE
</div>
      </div>,
    },
    {
      id: 0,
      time: "14.45 - 14.55",
      content: "Interaction & close",
      speaker: "",
    },
    {
      id: 0,
      time: "14.55 - 15.00",
      content: "Session changeover",
      speaker: "",
    },
  ]);

  const [AcademicAdministration, setAcademicAdministration] = useState([
    {
      id: 0,
      time: "15.00 - 15.05",
      content: "Opening Remarks by Session Chairman",
      speaker: "Dr. T. Bina, Director, Happy Valley Bussiness School",
    },
    {
      id: 0,
      time: "15.05 - 15.20",
      content: "Remarks by Lead Speaker",
      speaker: "Mr. Nagesh Subrahmanyam, Partner Solution Architect, Amazon Web Services",
    },
    {
      id: 0,
      time: "15.20 - 15.50",
      content: "Eminent Panelists:",
      speaker: <div>
        <div>
        Dr. Gururaj H Kidiyoor, Director, NITTE Institution
        </div>
        <div>
        Mr. Sakthivel Rajasekar, Director HR & GenC Program, Cognizant
        </div>
        <div>
        Dr. Suresh Ramanatha, Dean & Principal, Great Lakes Institute of Management
        </div>
        <div>
        Dr. S. Senthilnathan, Professor - Educational Technology, Bharathidasan University
        </div>
      </div>,
    },
    {
      id: 0,
      time: "15.50 - 16.05",
      content: "Interaction and closer",
      speaker: "",
    },
    {
      id: 0,
      time: "16.05 - 16.25",
      content: "Networking Break",
      speaker: "",
    },
  ]);

  const [FutureWork, setFutureWork] = useState([
    {
      id: 0,
      time: "16.25 - 16.30 ",
      content: "Opening Remarks by Panel Chairman",
      speaker: "Prof S Balasubramanian, Director, GRG Centre for Advancing Studies",
    },
    {
      id: 0,
      time: "16.30 - 17.00",
      content: "Eminent Panellists",
      speaker: <div>
        <div>
        Dr. K. Senthil Ganesh, CEO, Transform Tech(I) Pvt. Ltd.
        </div>
        <div>
        Ms. S. Hemamalini, Director - Planning and Operations, Numentica Technologies Ltd
        </div>
        <div>
        Mr. V. Venkataraghulan, Co-Founder, Kalvium
        </div>
        <div>
        Dr. B. Somasundaram, Head - Digital Transformation, Elgi Equipments Ltd.
        </div>
      </div>,
    },
    {
      id: 0,
      time: "17.00 - 17.15",
      content: "Interaction and Q&A",
      speaker: "",
    },
    {
      id: 0,
      time: "17.15 - 17.30",
      content: "Summing up & Conference close",
      speaker: "",
    },
  ]);

  const handleClick = (getValues) => {
    console.log(getValues)
    if (getValues === 1) {
      setSessionFirstSession(true)
      setSessionSecondSession(false)
      setSessionThirdSession(false)
      setSessionFourthSession(false)
      setSessionFifthSession(false)
      setSessionSixthSession(false)
    }else if(getValues === 2){
      setSessionFirstSession(false)
      setSessionSecondSession(true)
      setSessionThirdSession(false)
      setSessionFourthSession(false)
      setSessionFifthSession(false)
      setSessionSixthSession(false)
    }else if(getValues === 3){
      setSessionFirstSession(false)
      setSessionSecondSession(false)
      setSessionThirdSession(true)
      setSessionFourthSession(false)
      setSessionFifthSession(false)
      setSessionSixthSession(false)
    }else if(getValues === 4){
      setSessionFirstSession(false)
      setSessionSecondSession(false)
      setSessionThirdSession(false)
      setSessionFourthSession(true)
      setSessionFifthSession(false)
      setSessionSixthSession(false)
    }else if(getValues === 5){
      setSessionFirstSession(false)
      setSessionSecondSession(false)
      setSessionThirdSession(false)
      setSessionFourthSession(false)
      setSessionFifthSession(true)
      setSessionSixthSession(false)
    }else if(getValues === 6){
      setSessionFirstSession(false)
      setSessionSecondSession(false)
      setSessionThirdSession(false)
      setSessionFourthSession(false)
      setSessionFifthSession(false)
      setSessionSixthSession(true)
    }

    setRenderForce(renderForce)

  }

  // console.log(Inaugural[7].status, "status")
  return (
    <div className=" container mx-auto" >
      {/* <div className="  py-16"></div> */}

      <div onClick={() => handleClick(1)} className={` ${sesssionFirstState ? "bg-primary " : " bg-yellow"} cursor-pointer relative w-full sm:text-h5 smmd:text-h6 text-left  p-6 text-h3 font-semibold tracking-wider text-white  `}>
        Inaugural Session
        <div className=" absolute right-0 sm:top-7 smmd:top-7 md:top-7 top-8 px-4">  {sesssionFirstState ?  <><HiMinus/></> :<HiPlus/>}</div>
      </div>
      {sesssionFirstState ? <>
        {sessionFirst ? <>
          <div className=" mb-4 grid grid-cols-12 bg-[#e6e6e6]  pt-4">
            {Inaugural?.map((v, i) => {
              return (
                <>
                  <div className=" col-span-2 sm:col-span-4 smmd:col-span-4 md:col-span-3 p-2 text-left  border-b-2  border-[#d0d0d0] text-[#222] font-semibold">{v?.time}</div>
                  <div className=" col-span-10 sm:col-span-8 smmd:col-span-8 md:col-span-9 p-2 border-b-2  border-[#d0d0d0]">
                    <div className=" text-left text-primary font-semibold">{v?.content}</div>
                    <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#222] font-semibold`}>Speaker</div>
                    <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#686868] `}>{v?.speaker}</div>
                  </div>
                </>
              );
            })}
          </div>

        </> : null}
      </> : null}

      <div onClick={() => handleClick(2)} className={` ${sesssionSecondState ? "bg-primary " : " bg-yellow"} cursor-pointer relative w-full sm:text-h5 smmd:text-h6 text-left  p-6 text-h3 font-semibold tracking-wider text-white   `}>
      AI and EdTech in Shaping the Future of Higher Education
      <div className=" absolute right-0 sm:top-7 smmd:top-7 md:top-7 top-8 px-4">  {sesssionSecondState ?  <><HiMinus/></> :<HiPlus/>}</div>
      </div>
      {sesssionSecondState ? <>
        <div className=" grid grid-cols-12 bg-[#e6e6e6]  pt-4  mb-4">
          {EdTech?.map((v, i) => {
            return (
              <>
                <div className="col-span-2 sm:col-span-4 smmd:col-span-4 md:col-span-3 p-2 text-left  border-b-2  border-[#d0d0d0] text-[#222] font-semibold">{v?.time}</div>
                <div className=" col-span-10 sm:col-span-8 smmd:col-span-8 md:col-span-9 p-2 border-b-2  border-[#d0d0d0]">
                  <div className=" text-left text-primary font-semibold">{v?.content}</div>
                  <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#222] font-semibold`}>Speaker</div>
                  <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#686868] `}>{v?.speaker}</div>
                </div>
              </>
            );
          })}
        </div></> : null}


      <div onClick={() => handleClick(3)} className={` ${sesssionThirdState ? "bg-primary " : " bg-yellow"} cursor-pointer relative w-full sm:text-h5 smmd:text-h6 text-left  p-6 text-h3 font-semibold tracking-wider text-white  `}>
      Enhancing Teaching and Learning through AI and EdTech
      <div className=" absolute right-0 sm:top-7 smmd:top-7 md:top-7 top-8 px-4">  {sesssionThirdState ?  <><HiMinus/></> :<HiPlus/>}</div>
      </div>
      {sesssionThirdState ? <>
        <div className=" grid grid-cols-12 bg-[#e6e6e6]  pt-4 mb-4">
          {Learning?.map((v, i) => {
            return (
              <>
                <div className="col-span-2 sm:col-span-4 smmd:col-span-4 md:col-span-3 p-2 text-left  border-b-2  border-[#d0d0d0] text-[#222] font-semibold">{v?.time}</div>
                <div className="  col-span-10 sm:col-span-8 smmd:col-span-8 md:col-span-9 p-2 border-b-2  border-[#d0d0d0]">
                  <div className=" text-left text-primary font-semibold">{v?.content}</div>
                  <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#222] font-semibold`}>Speaker</div>
                  <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#686868] `}>{v?.speaker}</div>
                </div>
              </>
            );
          })}
        </div></> : null}


      <div onClick={() => handleClick(4)} className={` ${sesssionFourthState ? "bg-primary " : " bg-yellow"}  cursor-pointer relative w-full sm:text-h5 smmd:text-h6 text-left  p-6 text-h3 font-semibold tracking-wider text-white `}>
      Student Engagement with AI
      <div className=" absolute right-0 sm:top-7 smmd:top-7 md:top-7 top-8 px-4">  {sesssionFourthState ?  <><HiMinus/></> :<HiPlus/>}</div>
      </div>

      {sesssionFourthState ? <>   <div className=" grid grid-cols-12 bg-[#e6e6e6]  pt-4 mb-4">
        {StudentEngagement?.map((v, i) => {
          return (
            <>
              <div className="col-span-2 sm:col-span-4 smmd:col-span-4 md:col-span-3 p-2 text-left  border-b-2  border-[#d0d0d0] text-[#222] font-semibold">{v?.time}</div>
              <div className="  col-span-10 sm:col-span-8 smmd:col-span-8 md:col-span-9 p-2 border-b-2  border-[#d0d0d0]">
                <div className=" text-left text-primary font-semibold">{v?.content}</div>
                <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#222] font-semibold`}>Speaker</div>
                <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#686868] `}>{v?.speaker}</div>

              </div>
            </>
          );
        })}
      </div></> : null}


      <div onClick={() => handleClick(5)} className={` ${sesssionFifthState ? "bg-primary " : " bg-yellow"} cursor-pointer relative w-full sm:text-h5 smmd:text-h6 text-left  p-6 text-h3 font-semibold tracking-wider text-white  `}>
      AI for Academic Administration
      <div className=" absolute right-0 sm:top-7 smmd:top-7 md:top-7 top-8 px-4">  {sesssionFifthState ?  <><HiMinus/></> :<HiPlus/>}</div>
      </div>

      {sesssionFifthState ? <>

        <div className=" grid grid-cols-12 bg-[#e6e6e6]  pt-4 mb-4 ">
          {AcademicAdministration?.map((v, i) => {
            return (
              <>
                <div className="col-span-2 sm:col-span-4 smmd:col-span-4 md:col-span-3 p-2 text-left  border-b-2  border-[#d0d0d0] text-[#222] font-semibold">{v?.time}</div>
                <div className="  col-span-10 sm:col-span-8 smmd:col-span-8 md:col-span-9 p-2 border-b-2  border-[#d0d0d0]">
                  <div className=" text-left text-primary font-semibold">{v?.content}</div>
                  <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#222] font-semibold`}>Speaker</div>
                  <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#686868] `}>{v?.speaker}</div>
                </div>
              </>
            );
          })}
        </div></> : null}



        <div onClick={() => handleClick(6)} className={` ${sesssionSixthState ? "bg-primary " : " bg-yellow"}  cursor-pointer relative w-full sm:text-h5 smmd:text-h6 text-left  p-6 text-h3 font-semibold tracking-wider text-white `}>
        Future of Work and Future Work
        <div className=" absolute right-0 sm:top-7 smmd:top-7 md:top-7 top-8 px-4">  {sesssionSixthState ?  <><HiMinus/></> :<HiPlus/>}</div>
      </div>

          {sesssionSixthState ? <><div className=" grid grid-cols-12 bg-[#e6e6e6]  pt-4 mb-4">
        {FutureWork?.map((v, i) => {
          return (
            <>
              <div className="col-span-2 sm:col-span-4 smmd:col-span-4 md:col-span-3 p-2 text-left  border-b-2  border-[#d0d0d0] text-[#222] font-semibold">{v?.time}</div>
              <div className="  col-span-10 sm:col-span-8 smmd:col-span-8 md:col-span-9 p-2 border-b-2  border-[#d0d0d0]">
                <div className=" text-left text-primary font-semibold">{v?.content}</div>
                <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#222] font-semibold`}>Speaker</div>
                <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#686868] `}>{v?.speaker}</div>
              </div>
            </>
          );
        })}
      </div></> :null}
      


    </div>
  );
}
