import React, { useState } from "react";
import image1 from "./../utilities/testimonialimage.png";
import forwardbutton from "./../utilities/testimonialforwardbutton.svg";
import backbutton from "./../utilities/testimonialbackbutton.svg";
import background from "./../utilities/testimonialbackground.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Southee Plessis",
    message:
      "I would definitely recommend Spark AI. The team’s understanding of our business goals, and ability to support in the long term is an extremely valuable part of our relationship.",
    img: image1,
    position: "Head of Brand & Marketing Factory Berlin",
  },
  {
    id: 2,
    name: "Jane Smith",
    message:
      "I would definitely recommend Spark AI. The team’s understanding of our business goals, and ability to support in the long term is an extremely valuable part of our relationship.",
    place: "",
    img: image1,
    position: "Head of Brand & Marketing Factory Berlin",
  },
  {
    id: 3,
    name: "Tom Wilson",
    message:
      "I would definitely recommend Spark AI. The team’s understanding of our business goals, and ability to support in the long term is an extremely valuable part of our relationship.",
    place: "",
    img: image1,
    position: "Head of Brand & Marketing Factory Berlin",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    message:
      "I would definitely recommend Spark AI. The team’s understanding of our business goals, and ability to support in the long term is an extremely valuable part of our relationship.",
    place: "",
    img: image1,
    position: "Head of Brand & Marketing Factory Berlin",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = (event) => {
    event.preventDefault();
    setCurrentIndex(
      currentIndex === 0 ? testimonialData.length - 1 : currentIndex - 1
    );
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    setCurrentIndex(
      currentIndex === testimonialData.length - 1 ? 0 : currentIndex + 1
    );
  };

  const testimonial = testimonialData[currentIndex];

  return (
    <div className="Testimonials">
      <div className="Testimonials__container">
        <img src={background} alt="" className="Testimonials__background" />
        <div className="Testimonials__header">
          <h3 className="Testimonials__title"> Partner Testimonials</h3>
          <p className="Testimonials__description">
            Our partners are with us for the long term. Hear about collaboration
            straight from the source. Check out some of the highlights of our
            collaboration so far.
          </p>
        </div>
        <div className="Testimonials__middle" key={testimonial.id}>
          <img src={testimonial.img} alt="" className="Testimonials__image" />
          <p className="Testimonials__message">“{testimonial.message}”</p>
        </div>
        <div className="Testimonials__details">
          <div className="Testimonials__detail">
            <p className="Testimonials__name">{testimonial.name}</p>
            <p className="Testimonials__jobtitle">{testimonial.position}</p>
          </div>
        </div>
        <div className="Testimonials__bottom">
          <div className="Testimonials__checkboxes">
            {testimonialData.map((testimonial, index) => (
              <div key={testimonial.id}>
                <input
                  className="Testimonials__radio"
                  type="radio"
                  checked={currentIndex === index}
                />
              </div>
            ))}
          </div>
          <div className="Testimonials__buttons">
            <button className="Testimonials__button" onClick={handlePrevClick}>
              <img src={backbutton} alt="" />
            </button>
            <button className="Testimonials__button" onClick={handleNextClick}>
              <img src={forwardbutton} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
