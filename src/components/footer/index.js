import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import Logo from "../../assets/images/fix_logo.png";
import { Link } from "react-router-dom";
import Images from "../../constants/images";
const Footer = () => {
  return (
    <>
      <div
        className="bg-[image:var(--image-url)]"
        style={{ "--image-url": `url(${Images.BGFooter})` }}
      >
        <footer className="rounded-lg  m-4 shadow-2xl">
          <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <Link href="#" className="flex items-center mb-4 sm:mb-0">
                <img
                  src={Logo}
                  className="h-8 mr-3 rounded-2xl bg-gray-800 -mt-10"
                  alt="Logo"
                />
                <div className="grid grid-cols-1">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Ruang Pertemanan
                  </span>
                  <p className="max-w-sm">
                    Ruang Pertemanan ini merupakan sebuah coretan kecil dari
                    sebuah perjalanan kita untuk menjadi manusia yang seutuhnya
                  </p>
                </div>
              </Link>
              <ul className="flex flex-wrap items-center mb-6 text-lg font-bold text-white sm:mb-0 dark:text-gray-400 xl:-mt-10">
                <li>
                  <Link
                    to="/ruang/v1/home"
                    className="mr-4 hover:underline md:mr-6"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ruang/v1/home-about"
                    className="mr-4 hover:underline md:mr-6"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center my-6">
              <ul className="flex justify-between">
                <li>
                  <a href="https://www.youtube.com/@ruangpertemanan4194">
                    <AiFillYoutube className="w-8 h-8 hover:translate-y-1 fill-red-700" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <BsInstagram className="w-8 h-8 hover:translate-y-1 fill-red-600" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <BsDiscord className="w-8 h-8 hover:translate-y-1 fill-gray-900" />
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              @2023{" "}
              <a href="/" className="hover:underline">
                Ruang Pertemanan
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
