import React from "react";
import image1 from "./assets/images/background-pattern-desktop.svg";
import './index.css';
import Card from "./Card";

const Desktop = () => {
  return (
    <div className="h-screens"  >
      <div
        style={{ backgroundImage: `url(${image1})` }}
        className="h-72 w-full "
      >
      </div>
      
      <Card/>
    </div>
  );
};

export default Desktop;
