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
      time: "9.30 AM - 9.35 AM",
      content: "Welcome Address",
      speaker:
        "Dr K Senthil Ganesh, Chairman, CII Coimbatore Zone & CEO, Transform Tech(I) Pvt Ltd",
    },
    {
      id: 2,
      time: "9.35 AM - 9.40 AM",
      content: "Theme Address",
      speaker:
        "Dr R Nandini, Co-Chairperson, National Higher Education Conclave 2023 & Founder Trustee, GRG Trust",
    },
    {
      id: 3,
      time: "9.40 AM - 9.50 AM",
      content: "Address",
      speaker:
        "Mr Shankar Vanavarayar, Chairman, CII Tamil Nadu State Council & Executive Director, ABT Industries Ltd",
    },
    {
      id: 4,
      time: "9.50 AM - 10.05 AM",
      content: "Special Address",
      speaker:
        "Ms Swati Salgaocar*, Deputy Chairperson, CII Western Region & 	President, V M Salgaocar and Brothers Pvt Ltd",
    },
    {
      id: 5,
      time: "10.05 AM - 10.20 AM",
      content: "Special Address",
      speaker: "Mr Abilash Misra, CEO, NSE Academy",
    },
    {
      id: 6,
      time: "10.20 AM - 10.35 AM ",
      content: "	Keynote Address",
      speaker: "Ms Roshini Nadar Malhotra*, Chairperson, HCL Tech",
    },
    {
      id: 7,
      time: "10.35 AM - 10.40 AM",
      content: "Vote of Thanks ",
      speaker:
        "Ms S Malarvizhi, Co-Chairperson, National Higher Education Conclave 2023 & Managing Trustee, Sri Krishna Institutions",
    },
    {
      id: 8,
      time: "10.40 AM - 11.10 AM",
      content: "Networking Break",
      speaker:
        "",
    },
  ]);

  const [EdTech, setEdTech] = useState([
    {
      id: 0,
      time: "11.10 AM - 11.15 AM",
      content: "Opening Remarks by Panel Chairman ",
      speaker: "",
    },
    {
      id: 0,
      time: "11.15 AM - 11.35 AM",
      content: "Global Perspective on AI in Higher Education ",
      speaker: "Mr Abhilash Misra, CEO, NSE Academy",
    },
    {
      id: 0,
      time: "11.35 AM - 11.55 AM",
      content: "EdTech Ecosystem in India ",
      speaker:
        "Mr Dulles Krishnan, Managing Director - Enterprise Coursera India",
    },
    {
      id: 0,
      time: "11.55 AM - 12.10 PM",
      content: "Interaction and Q&A ",
      speaker: "",
    },
    {
      id: 0,
      time: "12.10 PM - 12.15 PM",
      content: "Session changeover ",
      speaker: "",
    },
  ]);

  const [Learning, setLearning] = useState([
    {
      id: 0,
      time: "12.15 PM - 12.20 PM",
      content: "Opening Remarks by Session Chairman",
      speaker: "",
    },
    {
      id: 0,
      time: "12.20 PM - 12.40 PM",
      content: "AI-Enhanced Curriculum Development",
      speaker: "Ms Vasanthi Srinivasan (ONLINE), Professor, IIM Bangalore.",
    },
    {
      id: 0,
      time: "12.40 PM - 13.00 PM",
      content: "AI-Driven Assessment and Feedback",
      speaker: "Speaker (Name awaited), AMCAT SHL",
    },
    {
      id: 0,
      time: "13.00 PM - 13.20 PM",
      content: "Interactive Learning with EdTech",
      speaker:
        "Dr Christopher Abraham*, CEO & Head - Dubai Campus, S P Jain School  of Global Management",
    },
    {
      id: 0,
      time: "13.20 PM - 13.30 PM",
      content: "Interactive Learning with EdTech",
      speaker: "",
    },
    {
      id: 0,
      time: "13.30 PM - 14.30 PM",
      content: "Lunch Break",
      speaker: "",
    },
  ]);

  const [StudentEngagement, setStudentEngagement] = useState([
    {
      id: 0,
      time: "14.30 PM - 14.35 PM",
      content: "Opening Remarks by Panel Chairman",
      speaker: "",
    },
    {
      id: 0,
      time: "14.35 PM - 14.50 PM",
      content: "Remarks by Lead Speaker",
      speaker:
        "Ms Dhanniya Venkatasalapathy*, Executive Director - Cloud Solutions Microsoft India",
    },
    {
      id: 0,
      time: "14.50 PM - 15.20 PM",
      content: <div>

        <div>Eminent Panelists</div>

      </div>,
      speaker:<div>
        
        <div> Dr Gururaj H Kidiyoor, Director, NITTE Institution</div>
        <div> Ms Maya Sreekumar*, GenC Program Head (India), Cognizant</div>
        <div> Dr Suresh Ramanatha*, Dean & Principal, Great Lakes Institute of Management</div>
        <div> Dr S Senthilnathan*, Professor - Educational Technology, Bharathidasan University</div>
      </div>,
    },
    {
      id: 0,
      time: "15.20 PM - 15.35 PM",
      content: "Interaction & close",
      speaker: "",
    },
    {
      id: 0,
      time: "15.35 PM - 15.55 PM",
      content: "Networking Break",
      speaker: "",
    },
  ]);

  const [AcademicAdministration, setAcademicAdministration] = useState([
    {
      id: 0,
      time: "15.55 PM - 16.00 PM",
      content: "Opening Remarks by Session Chairman",
      speaker: "",
    },
    {
      id: 0,
      time: "16.00 PM - 16.20 PM",
      content: "Presentation by",
      speaker: "Mr Rahul V Rodriguez, Vice President, Woxsen University",
    },
    {
      id: 0,
      time: "16.20 PM - 16.40 PM",
      content: "Presentation by",
      speaker: "Ellucian",
    },
    {
      id: 0,
      time: "16.40 PM - 16.50 PM",
      content: "Interaction and closer",
      speaker: "",
    },
    {
      id: 0,
      time: "16.50 PM - 16.55 PM",
      content: "Session changeover",
      speaker: "",
    },
  ]);

  const [FutureWork, setFutureWork] = useState([
    {
      id: 0,
      time: "16.55 PM - 17.00 PM ",
      content: "Opening Remarks by Panel Chairman",
      speaker: "Prof S Balasubramanian, Director, GRG Centre for Advancing Studies",
    },
    {
      id: 0,
      time: "17.00 PM - 17.30 PM ",
      content: "Eminent Panellists",
      speaker: <div>
        <div>
        Mr Sang Won Yoon*, Professor, Binghamton University, USA
        </div>
        <div>
        Dr K Senthil Ganesh, CEO, Transform Tech(I) Pvt Ltd
        </div>
        <div>
        Mr Samuel Jacob*, Global HR Suite - Program Management, Stellantis
        </div>
        <div>
        Ms Hemamalini S, Director - Planning and Operations, Numentica Technologies Ltd
        </div>
        <div>
        Mr Santhosh Thangavelu
        </div>
      </div>,
    },
    {
      id: 0,
      time: "17.30 PM - 17.40 PM",
      content: "Interaction and Q&A",
      speaker: "",
    },
    {
      id: 0,
      time: "17.40 PM- 17.50 PM",
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

      <div onClick={() => handleClick(1)} className={` ${sesssionFirstState ? "bg-primary " : " bg-yellow"} relative w-full text-left  p-6 text-h3 font-semibold tracking-wider text-white  `}>
        Inaugural Session
        <div className=" absolute right-0 top-8 px-4">  {sesssionFirstState ?  <><HiMinus/></> :<HiPlus/>}</div>
      </div>
      {sesssionFirstState ? <>
        {sessionFirst ? <>
          <div className=" mb-4 grid grid-cols-12 bg-[#e6e6e6]  pt-4">
            {Inaugural?.map((v, i) => {
              return (
                <>
                  <div className=" col-span-2 p-2  border-b-2  border-[#d0d0d0] text-[#222] font-semibold">{v?.time}</div>
                  <div className=" col-span-10 p-2 border-b-2  border-[#d0d0d0]">
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

      <div onClick={() => handleClick(2)} className={` ${sesssionSecondState ? "bg-primary " : " bg-yellow"} text-left relative  p-6 text-h3 font-semibold tracking-wider text-white  `}>
      AI and EdTech in Shaping the Future of Higher Education
      <div className=" absolute right-0 top-8 px-4">  {sesssionSecondState ?  <><HiMinus/></> :<HiPlus/>}</div>
      </div>
      {sesssionSecondState ? <>
        <div className=" grid grid-cols-12 bg-[#e6e6e6]  pt-4  mb-4">
          {EdTech?.map((v, i) => {
            return (
              <>
                <div className=" col-span-2 p-2  border-b-2  border-[#d0d0d0] text-[#222] font-semibold">{v?.time}</div>
                <div className=" col-span-10 p-2 border-b-2  border-[#d0d0d0]">
                  <div className=" text-left text-primary font-semibold">{v?.content}</div>
                  <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#222] font-semibold`}>Speaker</div>
                  <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#686868] `}>{v?.speaker}</div>
                </div>
              </>
            );
          })}
        </div></> : null}


      <div onClick={() => handleClick(3)} className={` ${sesssionThirdState ? "bg-primary " : " bg-yellow"}  relative text-left  p-6 text-h3 font-semibold tracking-wider text-white  `}>
      Enhancing Teaching and Learning through AI and EdTech
      <div className=" absolute right-0 top-8 px-4">  {sesssionThirdState ?  <><HiMinus/></> :<HiPlus/>}</div>
      </div>
      {sesssionThirdState ? <>
        <div className=" grid grid-cols-12 bg-[#e6e6e6]  pt-4 mb-4">
          {Learning?.map((v, i) => {
            return (
              <>
                <div className=" col-span-2 p-2  border-b-2  border-[#d0d0d0] text-[#222] font-semibold">{v?.time}</div>
                <div className=" col-span-10 p-2 border-b-2  border-[#d0d0d0]">
                  <div className=" text-left text-primary font-semibold">{v?.content}</div>
                  <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#222] font-semibold`}>Speaker</div>
                  <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#686868] `}>{v?.speaker}</div>
                </div>
              </>
            );
          })}
        </div></> : null}


      <div onClick={() => handleClick(4)} className={` ${sesssionFourthState ? "bg-primary " : " bg-yellow"} text-left  relative p-6 text-h3 font-semibold tracking-wider text-white  `}>
      Student Engagement with AI
      <div className=" absolute right-0 top-8 px-4">  {sesssionFourthState ?  <><HiMinus/></> :<HiPlus/>}</div>
      </div>

      {sesssionFourthState ? <>   <div className=" grid grid-cols-12 bg-[#e6e6e6]  pt-4 mb-4">
        {StudentEngagement?.map((v, i) => {
          return (
            <>
              <div className=" col-span-2 p-2  border-b-2  border-[#d0d0d0] text-[#222] font-semibold">{v?.time}</div>
              <div className=" col-span-10 p-2 border-b-2  border-[#d0d0d0]">
                <div className=" text-left text-primary font-semibold">{v?.content}</div>
                <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#222] font-semibold`}>Speaker</div>
                <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#686868] `}>{v?.speaker}</div>

              </div>
            </>
          );
        })}
      </div></> : null}


      <div onClick={() => handleClick(5)} className={` ${sesssionFifthState ? "bg-primary " : " bg-yellow"} relative text-left  p-6 text-h3 font-semibold tracking-wider text-white  `}>
      AI for Academic Administration
      <div className=" absolute right-0 top-8 px-4">  {sesssionFifthState ?  <><HiMinus/></> :<HiPlus/>}</div>
      </div>

      {sesssionFifthState ? <>

        <div className=" grid grid-cols-12 bg-[#e6e6e6]  pt-4 mb-4 ">
          {AcademicAdministration?.map((v, i) => {
            return (
              <>
                <div className=" col-span-2 p-2  border-b-2  border-[#d0d0d0] text-[#222] font-semibold">{v?.time}</div>
                <div className=" col-span-10 p-2 border-b-2  border-[#d0d0d0]">
                  <div className=" text-left text-primary font-semibold">{v?.content}</div>
                  <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#222] font-semibold`}>Speaker</div>
                  <div className={` ${v?.speaker === "" ? "hidden" : "block"} text-left  text-[#686868] `}>{v?.speaker}</div>
                </div>
              </>
            );
          })}
        </div></> : null}



        <div onClick={() => handleClick(6)} className={` ${sesssionSixthState ? "bg-primary " : " bg-yellow"}  realtive text-left  p-6 text-h3 font-semibold tracking-wider text-white  `}>
        Future of Work and Future Work
        <div className=" absolute right-0 top-8 px-4">  {sesssionSixthState ?  <><HiMinus/></> :<HiPlus/>}</div>
      </div>

          {sesssionSixthState ? <><div className=" grid grid-cols-12 bg-[#e6e6e6]  pt-4 mb-4">
        {FutureWork?.map((v, i) => {
          return (
            <>
              <div className=" col-span-2 p-2  border-b-2  border-[#d0d0d0] text-[#222] font-semibold">{v?.time}</div>
              <div className=" col-span-10 p-2 border-b-2  border-[#d0d0d0]">
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
