import React from "react";
import image1 from "./../utilities/headerimage1.png";
import image2 from "./../utilities/headerimage2.png";
import image3 from "./../utilities/headerimage3.png";
import image4 from "./../utilities/headerimage4.png";
import image5 from "./../utilities/headerimage5.png";
import vector from "./../utilities/headervector.svg";
import vector1 from "./../utilities/headervector1.svg";
import vector2 from "./../utilities/headervector2.svg";
import arrow from "./../utilities/arrowvector.png";

function Header() {
  return (
    <div className="Header">
      <div className="Header__upper">
        <h1 className="Header__title">
          Growing your organization with <br /> the help of
          <span className="Header__primary"> technology</span> is our goal.
        </h1>
      </div>

      <div className="Header__middle">
        <img src={image1} alt="" className="Header__image1" />
        <img src={image2} alt="" className="Header__image2" />
        <img src={image3} alt="" className="Header__image3" />
        <img src={image4} alt="" className="Header__image4" />
        <img src={image5} alt="" className="Header__image5" />
      </div>

      <div className="Header__bottom">
        <div className="Header__container2">
          <div className="Header__process1">
            <img src={vector} alt="" className="Header__vector" />

            <h2 className="Header__explore">Requirement Analysis and Design</h2>
            <p className="Header__description">
              This involves gathering information about the client's business
              processes, goals, and objectives.
            </p>
            <button className="Header__button">
              Explore
              <img src={arrow} alt="" className="Header__arrow" />
            </button>
          </div>

          <div className="Header__process2">
            <img src={vector1} alt="" className="Header__vector" />

            <h2 className="Header__explore">
              Development, Integration and Deployment{" "}
            </h2>
            <p className="Header__description">
              After the development phase, the software is integrated with other
              systems and deployed to the client's infrastructure.
            </p>
            <button className="Header__button">
              Explore
              <img src={arrow} alt="" className="Header__arrow" />
            </button>
          </div>

          <div className="Header__process3">
            <img src={vector2} alt="" className="Header__vector" />

            <h2 className="Header__explore">Maintenance and Support</h2>
            <p className="Header__description">
              Custom software requires ongoing maintenance and support to ensure
              that it continues to function as intended.
            </p>
            <button className="Header__button">
              Explore
              <img src={arrow} alt="" className="Header__arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
