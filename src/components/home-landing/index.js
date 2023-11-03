import React from "react";
import BgLanding from "../../assets/images/bg-landingpage.jpg";
const HomeLanding = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="bg-cover bg-center h-full w-full"
        style={{
          backgroundImage: `url(${BgLanding})`,
        }}
      >
        <div className="flex flex-col justify-center items-center w-full h-full mx-auto text-3xl">
          <h1 className="xl:text-8xl lg:text-7xl md:text-2xl translate-x-1 text-white font-bold">
            My Journey My Story
          </h1>
          <p className="xl:text-3xl md:text-1xl text-white font-medium">my choice in a piece of writing</p>
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
