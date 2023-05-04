import React from "react";
import vector from "./../utilities/GetStartedvector.svg";

function GetStarted() {
  return (
    <div className="GetStarted">
      <div className="GetStarted__container">
        <h4 className="GetStarted__title">
          {" "}
          Spark AI - the{" "}
          <span className="GetStarted__span">
            most customizable technology provides{" "}
          </span>{" "}
          for building
          <span className="GetStarted__span"> your online business.</span>{" "}
        </h4>
        <button className="GetStarted__button"> Get Started</button>
        <img src={vector} alt="" className="GetStarted__vector" />
      </div>
    </div>
  );
}

export default GetStarted;
