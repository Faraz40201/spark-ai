import React from "react";
import vector1 from "./../utilities/servicevector1.svg";
import vector2 from "./../utilities/servicevector2.svg";
import vector3 from "./../utilities/servicevector3.svg";
import vector4 from "./../utilities/servicevector4.svg";
import vector5 from "./../utilities/servicevector5.svg";

const servicesData = [
  {
    id: 1,
    img: vector1,
    title: "Design Consultation",
    description:
      "Our application development services are focused on helping our customers in delivering better quality services but in a very cost-effective way.",
  },
  {
    id: 2,
    img: vector2,
    title: "Corporate Website Development",
    description:
      "Ensure an effective online presence for your business with a corporate site. FitOutFit Software Technologies provides creative and professional web applications to empower your business online.",
  },
  {
    id: 3,
    img: vector3,
    title: "MVP Development",
    description:
      "Take the first step on the way to a successful business with an MVP. FitOutFit Software Technologies provides creative and professional web applications to empower your business online.",
  },
  {
    id: 4,
    img: vector4,
    title: "Corporate Saas Website Development",
    description:
      "Ensure an effective online presence for your business with a corporate site. FitOutFit Software Technologies provides creative and professional web applications to empower your business online.",
  },
  {
    id: 5,
    img: vector4,
    title: "Corporate Website Development",
    description:
      "Ensure an effective online presence for your business with a corporate site. FitOutFit Software Technologies provides creative and professional web applications to empower your business online.",
  },
  {
    id: 6,
    img: vector5,
    title: "UX/UI & Product Design",
    description:
      "Take the first step on the way to a successful business with an MVP. FitOutFit Software Technologies provides creative and professional web applications to empower your business online.",
  },
];

function Services() {
  return (
    <div className="Services">
      <div className="Services__container1">
        <h1 className="Services__title">
          {" "}
          4 Year of Services Development, Testing, and Quality{" "}
        </h1>
        <div className="Services__container2">
          {servicesData.map((service) => (
            <div className="Services__card">
              <img src={service.img} alt="" className="Services__icon" />
              <h4 className="Services__maintitle">{service.title}</h4>
              <p className="Services__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
