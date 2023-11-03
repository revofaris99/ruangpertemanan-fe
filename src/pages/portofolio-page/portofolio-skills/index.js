import React from "react";
import {images} from '../../../constants'

const PortofolioSkill = () => {
  return <div name='skill-portofolio' className="w-full h-screen bg-[#212121] text-gray-300">
    {/* container */}
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">Skills</p>
            <p className="py-4">- These are the technology i've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={images.Html} alt="Html" />
                <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={images.CSS} alt="css" />
                <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={images.GitHub} alt="Github" />
                <p className="my-4">Github</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={images.JavaScript} alt="javascript" />
                <p className="my-4">Javascript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={images.Node} alt="Node" />
                <p className="my-4">Node</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={images.ReactJS} alt="Reactjs" />
                <p className="my-4">ReactJs</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={images.Tailwind} alt="Tailwind" />
                <p className="my-4">Tailwind</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={images.Boostrap} alt="Boostrap" />
                <p className="my-4">Boostrap</p>
            </div>
        </div>
    </div>
  </div>;
};

export default PortofolioSkill;
