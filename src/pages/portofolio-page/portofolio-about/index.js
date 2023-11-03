import React from "react";
const AboutPortofolio = () => {
  return (
    <div name="about-portofolio" className="w-full h-screen bg-[#212121] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              About
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Client, nice to meet you. Please take a look around.</p>
          </div>
          <div className="">
            <p>
              Bachelor of majoring in Information Systems at Telkom University
              Bandung. Interest in Information Technology and Data Analytics.
              Have a training certificate to support knowledge about web and
              mobile applications and data analysis for industry standards. Has
              internship experience at PT Kereta Api Indonesia (KAI) Bandung in
              the IT Development section, tasked to process of developing
              desktop applications using the programming language C#. Have boot
              camp experience as full-stack Web and Mobile developer training
              using javascript, react, react js, react native, node js,
              bootstrap, and express js. Having capabilities in the field of
              data analysis and visualization, and application development, and
              supported by system development and statistics capabilities, Revo
              is ready to work in a professional field in Web and Mobile
              Development, data analysis, and business intelligence. Able to
              work effectively both as individuals and as part of a team. Having
              curiosity makes it easier to adapt to new technology, and uphold
              the value of integrity, hardworking, and earnestness in carrying
              out trust and responsibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPortofolio;
