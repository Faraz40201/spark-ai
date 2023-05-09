import React from "react";
import background from "./../utilities/header_background.png";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Details from "../components/Details";
import Goods from "../components/Goods";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <div className="HomeScreen__background">
        <Contact />
        <Nav />
        <Header />
      </div>
      <Details />
      <About />
      <Goods />
      <Testimonials />
      <Services />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default HomeScreen;
