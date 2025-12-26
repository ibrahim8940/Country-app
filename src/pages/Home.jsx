import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Home.css";
import About from "./About";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
    </>
  );
};

export default Home;
