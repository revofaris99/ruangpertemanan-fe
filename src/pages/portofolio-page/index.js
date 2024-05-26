import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/portofolio";
import Portofolio from "./portofolio";
import AboutPortofolio from "./portofolio-about";
import SkillsPortofolio from "./portofolio-skills";
import ExperiencePortofolio from "./portofolio-experience";
import PortofolioContact from "./portofolio-contact";
import {icons} from '../../constants'
export default function PortofolioPage() {
  /* scroll back top */
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  /* endscroll back top */
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portofolio</title>
      </Helmet>
      <div name="home-portofolio" className="w-full h-screen">
        <Navbar />
        <Portofolio />
        <AboutPortofolio />
        <SkillsPortofolio />
        <ExperiencePortofolio/>
        <PortofolioContact/>
        <div className="bg-[#212121] w-full h-10 p-10">
          <div onClick={scrollToTop} className="flex flex-row-reverse">
            <icons.AiOutlineArrowUp
              size={40}
              className="bg-blue-500 rounded-3xl animate-bounce cursor-pointer shadow-2xl"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
