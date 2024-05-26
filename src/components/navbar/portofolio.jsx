import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as Scrolllink } from "react-scroll";
import { icons } from "../../constants";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
 
  return (
    <div className="fixed w-[96%] mt-4 ms-[2%] rounded-2xl h-[70px] flex justify-between item-center p-6 text-gray-300 font-bold shadow-lg">
      <div className="">
        {/* <img src={Logo} alt="logo-rp" style={{ width: "50px" }} /> */}
        <h1 className="font-bold text-xl">
          <Link to={"/ruang/v1/home"} className="Link">
            Portofolio
          </Link>
        </h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Scrolllink to="home-portofolio" smooth={true} duration={500}>
            Home
          </Scrolllink>
        </li>
        <li>
          <Scrolllink to="about-portofolio" smooth={true} duration={500}>
            About
          </Scrolllink>
        </li>
        <li>
          <Scrolllink to="skill-portofolio" smooth={true} duration={500}>
            Skill
          </Scrolllink>
        </li>
        <li>
          <Scrolllink to="experience-portofolio" smooth={true} duration={500}>
            Experience
          </Scrolllink>
        </li>
        <li>
          <Scrolllink to="contact-portofolio" smooth={true} duration={500}>
            Contact
          </Scrolllink>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {/* <FaBars /> */}
        {!nav ? <icons.FaBars /> : <icons.FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Scrolllink
            onClick={handleClick}
            to="home-portofolio"
            smooth={true}
            duration={500}
          >
            Home
          </Scrolllink>
        </li>
        <li className="py-6 text-4xl">
          <Scrolllink
            onClick={handleClick}
            to="about-portofolio"
            smooth={true}
            duration={500}
          >
            About
          </Scrolllink>
        </li>
        <li className="py-6 text-4xl">
          <Scrolllink
            onClick={handleClick}
            to="skill-portofolio"
            smooth={true}
            duration={500}
          >
            Skill
          </Scrolllink>
        </li>
        <li className="py-6 text-4xl">
          <Scrolllink
            onClick={handleClick}
            to="experience-portofolio"
            smooth={true}
            duration={500}
          >
            Experience
          </Scrolllink>
        </li>
        <li className="py-6 text-4xl">
          <Scrolllink
            onClick={handleClick}
            to="contact-portofolio"
            smooth={true}
            duration={500}
          >
            Contact
          </Scrolllink>
        </li>
      </ul>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-md">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/revofarissaifuddin/"
            >
              LinkedIn <icons.FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] rounded-md">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/revofarissaifuddin"
            >
              Github <icons.FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e63f3f] rounded-md">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="revofaris99@gmail.com"
            >
              Email <icons.HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-md">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://medium.com/@revofaris79"
            >
              Medium <icons.BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
