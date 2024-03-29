import React, { useState, useEffect } from "react";
import img1 from "../../../assets/images/hero1.jpeg";
import img2 from "../../../assets/images/heroUpdate2.jpeg";
import img3 from "../../../assets/images/hero3.jpeg";
import img4 from "../../../assets/images/hero4.jpeg";

import "./styles/Hero.scss";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const dataHome = [
    {
      title: "BioStar 2",
      description:
        "Powerfull,Friendly,Secure Open integrated Security Platform",
      imgBackground: img1,
    },
    {
      title: "BioStation 3",
      description: "The new Door Access Experience",
      imgBackground: img2,
    },
    {
      title: "BioStation 2a ",
      description: "BioStation 2a I Feel the Power of AI",
      imgBackground: img3,
    },
    {
      title: "Global Leading",
      description: "Provider of Security Solutions",
      imgBackground: img4,
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % dataHome.length);
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div
      className="hero-container flex items-center justify-center h-screen bg-cover bg-center transition-all"
      style={{
        backgroundImage: `url(${dataHome[currentSlide].imgBackground})`,
      }}
    >
      <div
        className={`hero-content w-[1000px] items-start flex flex-col justify-center h-full text-left p-8 transition-all `}
      >
        <h1
          className={`text-[80px] font-bold mb-4 ${
            currentSlide === 2 ? "text-white" : "text-black"
          }`}
        >
          {dataHome[currentSlide].title}
        </h1>
        <p
          className={`text-3xl w-[280px] ${
            currentSlide === 2 ? "text-white" : "text-black"
          }`}
        >
          {dataHome[currentSlide].description}
        </p>

        <button className={`ounded-3xl mt-10 px-5 py-2 border-[1px] border-black ${currentSlide === 2  ? "border-white text-white rounded-2xl":" border-black rounded-2xl"}`}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
