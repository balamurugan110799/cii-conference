import React, { useState } from "react";

export default function Session() {
  const [Inaugural, setInaugural] = useState([
    {
      id: 0,
      time: "9.30 AM - 9.35 AM",
      content: "Welcome Address",
      speaker:
        "Dr K Senthil Ganesh, Chairman, CII Coimbatore Zone & CEO, Transform Tech(I) Pvt Ltd",
    },
    {
      id: 0,
      time: "9.35 AM - 9.40 AM",
      content: "Theme Address",
      speaker:
        "Dr R Nandini, Co-Chairperson, National Higher Education Conclave 2023 & Founder Trustee, GRG Trust",
    },
    {
      id: 0,
      time: "9.40 AM - 9.50 AM",
      content: "Address",
      speaker:
        "Mr Shankar Vanavarayar, Chairman, CII Tamil Nadu State Council & Executive Director, ABT Industries Ltd",
    },
    {
      id: 0,
      time: "9.50 AM - 10.05 AM",
      content: "Special Address",
      speaker:
        "Ms Swati Salgaocar*, Deputy Chairperson, CII Western Region & 	President, V M Salgaocar and Brothers Pvt Ltd",
    },
    {
      id: 0,
      time: "10.05 AM - 10.20 AM",
      content: "Special Address",
      speaker: "Mr Abilash Misra, CEO, NSE Academy",
    },
    {
      id: 0,
      time: "10.20 AM - 10.35 AM ",
      content: "Special Address",
      speaker: "Mr Abilash Misra, CEO, NSE Academy",
    },
    {
      id: 0,
      time: "10.35 AM - 10.40 AM",
      content: "Vote of Thanks ",
      speaker:
        "Ms S Malarvizhi, Co-Chairperson, National Higher Education Conclave 2023 & Managing Trustee, Sri Krishna Institutions",
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
      content: "Eminent Panelists",
      speaker: "Dr Gururaj H Kidiyoor, Director, NITTE Institution",
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
      speaker:"Prof S Balasubramanian, Director, GRG Centre for Advancing Studies",
    },
    {
        id: 0,
        time: "17.00 PM - 17.30 PM ",
        content: "Eminent Panellists:",
        speaker:"Mr Sang Won Yoon*, Professor, Binghamton University, USA",
      },
      {
        id: 0,
        time: "17.30 PM - 17.40 PM",
        content: "Interaction and Q&A",
        speaker:"",
      },
      {
        id: 0,
        time: "17.40 PM- 17.50 PM",
        content: "Summing up & Conference close",
        speaker:"",
      },
  ]);
  return (
    <div className=" container mx-auto" >
      {/* <div className="  py-16"></div> */}

      <div className=" grid grid-cols-12 ">
        {Inaugural?.map((v, i) => {
          return (
            <>
              <div className=" col-span-2">{v?.time}</div>
              <div className=" col-span-10">
                <div className=" text-left">{v?.content}</div>
                <div className=" text-left">Speaker:</div>
                <div className=" text-left">{v?.speaker}</div>
              </div>
            </>
          );
        })}
      </div>

      <div className=" grid grid-cols-12 ">
        {Learning?.map((v, i) => {
          return (
            <>
              <div className=" col-span-2">{v?.time}</div>
              <div className=" col-span-10">
                <div className=" text-left">{v?.content}</div>
                <div className=" text-left">Speaker:</div>
                <div className=" text-left">{v?.speaker}</div>
              </div>
            </>
          );
        })}
      </div>



      <div className=" grid grid-cols-12 ">
        {StudentEngagement?.map((v, i) => {
          return (
            <>
              <div className=" col-span-2">{v?.time}</div>
              <div className=" col-span-10">
                <div className=" text-left">{v?.content}</div>
                <div className=" text-left">Speaker:</div>
                <div className=" text-left">{v?.speaker}</div>
              </div>
            </>
          );
        })}
      </div>


      <div className=" grid grid-cols-12 ">
        {AcademicAdministration?.map((v, i) => {
          return (
            <>
              <div className=" col-span-2">{v?.time}</div>
              <div className=" col-span-10">
                <div className=" text-left">{v?.content}</div>
                <div className=" text-left">Speaker:</div>
                <div className=" text-left">{v?.speaker}</div>
              </div>
            </>
          );
        })}
      </div>




      <div className=" grid grid-cols-12 ">
        {FutureWork?.map((v, i) => {
          return (
            <>
              <div className=" col-span-2">{v?.time}</div>
              <div className=" col-span-10">
                <div className=" text-left">{v?.content}</div>
                <div className=" text-left">Speaker</div>
                <div className=" text-left">{v?.speaker}</div>
              </div>
            </>
          );
        })}
      </div>


    </div>
  );
}
