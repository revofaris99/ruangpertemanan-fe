import React from "react";
import { images } from "../../../constants";
const PortofolioExperience = () => {
  return (
    <div
      name="experience-portofolio"
      className="w-full md:h-screen text-gray-300 bg-[#212121]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-500">
            Experience
          </p>
          <p className="py-6">- Check out some of my project</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid items */}
          <div
            style={{ backgroundImage: `url(${images.PokemonWeb})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justifiy-center items-center mx-auto content-div "
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pokemon Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://pokemon-fe-one.vercel.app/home">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/revofarissaifuddin/pokemon-fe">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${images.RecipeWeb})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justifiy-center items-center mx-auto content-div "
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Recipe Web Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://recipes-fe-week6.vercel.app/home">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/revofarissaifuddin/recipes-fe-week6">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${images.AnkasaWeb})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justifiy-center items-center mx-auto content-div "
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Ankasa Web Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://ankasa-app-rev.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/revofarissaifuddin/ankasa-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${images.RecipeMobile})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justifiy-center items-center mx-auto content-div "
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Recipe Mobile Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://drive.google.com/file/d/1IyEJNDOPtGHM5mr9GnwOJkIaUwa6BBTd/view?usp=sharing">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/revofarissaifuddin/RecipeMobileApp">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${images.HireWeb})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md justifiy-center items-center mx-auto content-div "
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Hire Web Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://hireapp.vercel.app/home">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/yosuanovry/HireApp-FE">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortofolioExperience;
