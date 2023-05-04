import React from "react";
import vector1 from "./../utilities/footervector1.svg";
import vector2 from "./../utilities/footervector2.svg";
import vector3 from "./../utilities/footervector3.svg";
import logo from "./../utilities/Logo.svg";
import twitter from "./../utilities/twitter.svg";
import facebook from "./../utilities/footerfb.svg";
import instagram from "./../utilities/footerinsta.svg";
import wifi from "./../utilities/wifi.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <div className="Footer__upper">
          <div className="Footer__title">
            <img src={vector1} alt="" className="Footer__vector" />
            <p className="Footer__description"> 30 day money back guarantee </p>
          </div>
          <div className="Footer__title">
            <img src={vector2} alt="" className="Footer__vector" />
            <p className="Footer__description">
              {" "}
              Support teams across the world{" "}
            </p>
          </div>
          <div className="Footer__title">
            <img src={vector3} alt="" className="Footer__vector" />
            <p className="Footer__description">
              {" "}
              Safe & Secure online payment{" "}
            </p>
          </div>
        </div>
        <div className="Footer__middle">
          <img src={logo} alt="" className="Footer__sparkai" />
        </div>

        <div className="Footer__bottom">
          <div className="Footer__logos">
            <img src={twitter} alt="" className="Footer__logo" />
            <img src={facebook} alt="" className="Footer__logo" />
            <img src={instagram} alt="" className="Footer__logo" />
            <img src={wifi} alt="" className="Footer__logo" />
          </div>
          <p className="Footer__copyright">
            {" "}
            COPYRIGHT SPARKAI 2023 - TERMS & CONDITIONS PRIVACY POLICY{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
