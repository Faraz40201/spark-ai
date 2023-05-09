import React, { useEffect, useState } from "react";
import image1 from "./../utilities/headerimage1.png";
import image2 from "./../utilities/headerimage2.png";
import image3 from "./../utilities/headerimage3.png";
import image4 from "./../utilities/headerimage4.png";
import image5 from "./../utilities/headerimage5.png";
import vector from "./../utilities/headervector.svg";
import vector1 from "./../utilities/headervector1.svg";
import vector2 from "./../utilities/headervector2.svg";
import arrow from "./../utilities/arrowvector.png";
import { useMediaQuery } from "@mui/material";

const headerCards = [
  {
    id: 1,
    img: vector,
    title: "Requirement Analysis and Design",
    description:
      "This involves gathering information about the client's business processes, goals, and objectives.",
    vector: arrow,
  },
  {
    id: 2,
    img: vector1,
    title: "Development, Integration and Deployment",
    description:
      "After the development phase, the software is integrated with other systems and deployed to the client's infrastructure.",
    vector: arrow,
  },
  {
    id: 3,
    img: vector2,
    title: "Maintenance and Support",
    description:
      "Custom software requires ongoing maintenance and support to ensure that it continues to function as intended.",
    vector: arrow,
  },
];

function Header() {
  const matches = useMediaQuery("(max-width: 600px)");

  const images = [
    { image: image1, flex: 1 },
    { image: image2, flex: 2 },
    { image: image3, flex: 2 },
    { image: image4, flex: 2 },
    { image: image5, flex: 1 },
  ];

  const fewimages = images.slice(0, 2).concat(images.slice(4, 5));

  return (
    <div className="Header">
      <div className="Header__upper">
        <h1 className="Header__title">
          Growing your organization with <br /> the help of
          <span className="Header__primary"> technology</span> is our goal.
        </h1>
      </div>

      <div className="Header__middle">
        {(matches ? fewimages : images).map(({ image, flex }, index) => (
          <div className="Header__container1" style={{ flex }} key={index}>
            <img
              className="Header__images"
              src={image}
              alt=""
              style={{
                width: "auto",
                maxWidth: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      <div className="Header__bottom">
        <div className="Header__container2">
          {headerCards.map((card) => (
            <div className="Header__process" key={card.id}>
              <img src={card.img} alt="" className="Header__vector" />

              <h2 className="Header__explore"> {card.title}</h2>
              <p className="Header__description">{card.description}</p>
              <button className="Header__button">
                Explore
                <img src={card.vector} alt="" className="Header__arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
