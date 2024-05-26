import React from "react";
import { icons } from "../../../constants";
import { Link } from "react-scroll";

const Portofolio = () => {
  return (
    <div name="home-portofolio" className="w-full h-screen bg-[#212121]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-500">HI, My name is</p>
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Revo Faris Saifuddin
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Bachelor of majoring in Information Systems at Telkom University
          Bandung.
        </p>
        <div className="">
          <button className="rounded-lg group text-white border-2 px-6 py-3 my-2 flex item-center hover:bg-red-500 hover:border-red-500">
            <Link to="experience-portofolio" smooth={true} duration={500}>
              View Experience
            </Link>
            <span className="mt-1 group-hover:rotate-90 duration-300">
              <icons.HiArrowNarrowRight className="ml-3 text-bold" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
