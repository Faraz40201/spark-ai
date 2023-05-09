import React, { useState } from "react";
import image1 from "./../utilities/Vpn.png";
import image2 from "./../utilities/Vida.png";
import image3 from "./../utilities/Aanzer.png";

const initialGoods = [
  {
    id: 1,
    img: image1,
    title: "Digital Business Card",
    description:
      "Read their stories here. Make your business grow with Websites.",
    link: "http://play.google.com/store/apps/details?id",
  },
  {
    id: 2,
    img: image2,
    title: "VIDA App, Style your Scooter",
    description:
      "Read their stories here. Make your business grow with Websites.",
    link: "http://play.google.com/store/apps/details?id",
  },
  {
    id: 3,
    img: image3,
    title: "AanZer Website, App & Admin Panel",
    description:
      "Read their stories here. Make your business grow with Websites.",
    link: "http://play.google.com/store/apps/details?id",
  },
  {
    id: 4,
    img: image1,
    title: "VIDA App, Style your Scooter",
    description:
      "Read their stories here. Make your business grow with Websites.",
    link: "http://play.google.com/store/apps/details?id",
  },
  {
    id: 5,
    img: image2,
    title: "Digital Business Card",
    description:
      "Read their stories here. Make your business grow with Websites.",
    link: "http://play.google.com/store/apps/details?id",
  },
  {
    id: 6,
    img: image3,
    title: "AanZer Website, App & Admin Panel",
    description:
      "Read their stories here. Make your business grow with Websites.",
    link: "http://play.google.com/store/apps/details?id",
  },
];

function Goods() {
  const [goods, setGoods] = useState(initialGoods);
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const handleViewLess = () => {
    setShowAll(false);
  };

  const visibleGoods = showAll ? goods : goods.slice(0, 3);

  return (
    <div className="Goods">
      <div className="Goods__header">
        <h2 className="Goods__title">Checking out the Goods huh?</h2>
        <p className="Goods__description">
          We help our partners succeed with high-quality websites. Read their
          stories here. Make your business grow with Websites.
        </p>
      </div>

      <div className="Goods__container">
        {visibleGoods.map((good) => (
          <div className="Goods__item" key={good.id}>
            <img src={good.img} alt="" className="Goods__image"></img>
            <h3 className="Goods__maintitle">{good.title}</h3>
            <p className="Goods__maindescription">{good.description} </p>
            <a href={good.link} target="_blank" rel="noopener noreferrer">
              {good.link}
            </a>
          </div>
        ))}
      </div>
      {!showAll && (
        <button className="Goods__button" onClick={handleViewMore}>
          View More
        </button>
      )}
      {showAll && (
        <button className="Goods__button" onClick={handleViewLess}>
          View Less
        </button>
      )}
    </div>
  );
}

export default Goods;
