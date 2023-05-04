import React from "react";
import emailImage from "../utilities/email.svg";
import facebook from "../utilities/facebook.svg";
import dribble from "../utilities/dribble.svg";
import instagram from "../utilities/instagram.svg";
import linkedIn from "../utilities/linkedin.svg";
import behance from "../utilities/behance.svg";

function Contact() {
  return (
    <div className="Contact">
      <div className="Contact__container">
        <div className="Contact__email">
          <img className="Contact__email_logo" src={emailImage} alt="" />
          <p className="Contact__contactus">Email us at:contact@sparkai.ca</p>
        </div>

        <div className="Contact__logos">
          <img src={facebook} alt="" />
          <img src={dribble} alt="" />
          <img src={linkedIn} alt="" className="Contact__linkedin" />
          <img src={instagram} alt="" />
          <img src={behance} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
