import React from "react";
import vector1 from "./../utilities/aboutvector.svg";
import image1 from "./../utilities/aboutimage1.png";

const Cards = [
  {
    color: "#E8F0F3",
    vector: vector1,
    img: image1,
    title: "We help our clients to shine online",
    description:
      "We collaborate as a collective of individuals bringing their whole self to a project and, together, create work that none of us would be able to do on our own.",
  },
  {
    color: "#FFF3E9",
    vector: vector1,
    img: image1,
    title: "We translate research into solutions",
    description:
      "We collaborate as a collective of individuals bringing their whole self to a project and, together, create work that none of us would be able to do on our own.",
  },
  {
    color: "#E8F0F3",
    vector: vector1,
    img: image1,
    title: "We translate research into solutions",
    description:
      "We collaborate as a collective of individuals bringing their whole self to a project and, together, create work that none of us would be able to do on our own.",
  },
];

function About() {
  return (
    <div className="About">
      <div className="About__maintitle">
        What About <br />
        Spark Ai?
      </div>
      <div className="About__section">
        {Cards.map((Card, index) => (
          <div
            className="About__element"
            style={{ backgroundColor: Card.color }}
          >
            <img src={Card.img} alt="" className="About__image" />
            <h2 className="About__title"> {Card.title} </h2>
            <div className="About__container">
              <p className="About__description">{Card.description}</p>
              <p className="About__index">
                {(index + 1).toString().padStart(2, "0")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
