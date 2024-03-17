import React, { useState } from "react";
import plus from "./assets/images/icon-plus.svg"
import minus from "./assets/images/icon-minus.svg"

const Question = () => {
    const Questions = [
        {
          question: "What is Frontend Mentor, and how will it help me?",
          answer:"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        },
        {
          question: "Is Frontend Mentor free?",
          answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
        },
        {
          question: "Can I use Frontend Mentor projects in my portfolio?",
          answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
        },
      
        {
          question:"How can I get help if I'm stuck on a Frontend Mentor challenge?",
          answer:"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
        }
      
      ];
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [open3,setOpen3]=useState(false);
    const [open4,setOpen4]=useState(false);
  return <div>
    <div className="px-6 py-3">
        <div className="flex justify-between " onClick={(e)=>setOpen1(!open1)}><p className="font-bold py-2">{Questions[0].question}</p>{open1 ? <img src={minus} alt="" />:<img src={plus} alt="" />}</div>
        {open1 ?  <p className="px-3 py-3  text-zinc-400 leading-5 tracking-wider">{Questions[0].answer}</p>:"" }
    </div>
    <div className="px-6 py-3">
        <div className="flex justify-between" onClick={(e)=>setOpen2(!open2)}><p className="font-bold py-2">{Questions[1].question}</p>{open2 ? <img src={minus} alt="" />:<img src={plus} alt="" />}</div>
        {open2 ? <p className="px-3 py-3 text-zinc-400 leading-5 tracking-wider">{Questions[1].answer}</p>:"" }
    </div>
    <div className="px-6 py-3">
        <div className="flex justify-between" onClick={(e)=>setOpen3(!open3)}><p className="font-bold py-2">{Questions[2].question}</p>{open3 ? <img src={minus} alt="" />:<img src={plus} alt="" />}</div>
        {open3 ? <p className="px-3 py-3 text-zinc-400 leading-5 tracking-wider">{Questions[2].answer}</p>:"" }
    </div>
    <div className="px-6 py-3">
        <div className="flex justify-between" onClick={(e)=>setOpen4(!open4)}><p className="font-bold py-2">{Questions[3].question}</p>{open4 ? <img src={minus} alt="" />:<img src={plus} alt="" />}</div>
        {open4 ? <p className="px-3 py-3 text-zinc-400 leading-5 tracking-wider">{Questions[3].answer}</p>:"" }
    </div>
       
    </div>;
};

export default Question;
