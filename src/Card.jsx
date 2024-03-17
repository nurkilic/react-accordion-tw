import React from "react";
import staricon from "./assets/images/icon-star.svg";
import "./index.css";
import Question from "./Question";

const Card = () => {
  return (
    <div>
      {/* "h-[650px] w-[600px] bg-white rounded-lg absolute left-[50%] top-[50%]  ml-[-300px] mt-[-325px]" */}
      <div className="bg-white mx-auto max-w-lg mt-[-125px] rounded-lg min-w-72" id="container">
        <div className="flex py-6 px-6 gap-4">
          <span>
            <img src={staricon} alt="" className="mt-1" />
          </span>
          <h1 className="text-5xl font-extrabold" id="faq">FAQs</h1>
        </div>
        <Question />
      </div>
    </div>
  );
};

export default Card;
