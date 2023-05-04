import React from "react";
import logo from "./../utilities/Logo.svg";

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav__container">
        <div className="Nav__left">
          <img src={logo} alt="" />
        </div>
        <div className="Nav__right">
          <button className="Nav__button1"> Contact Us</button>
          <button className="Nav__button2">
            <span className="Nav__buttoninside"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
