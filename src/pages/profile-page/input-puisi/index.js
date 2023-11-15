import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import NavRuangPertemanan from "../../../components/navbar/ruangpertemanan";
import CardProfileName from "../card-profile-name";
import CardProfileUser from "../card-profile-user";
import FormInputPuisi from "../form-input-puisi";
import Footer from "../../../components/footer";
import { Link } from "react-router-dom";

const InputPuisi = () => {
  
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Puisi</title>
      </Helmet>
      <div className="w-screen h-screen scroll-smooth">
        {/* section navbar */}
        <section>
          <NavRuangPertemanan />
        </section>
        {/* end section navbar */}
        <div className=""></div>
        {/* container section profile */}
        <section className="container px-4 lg:px-8 mx-auto max-w-screen-2xl mt-32">
          {/* tgl and name userprofile */}
          <div className="border-b-2 border-blue-400">
            <CardProfileName />
          </div>
          {/* container profile */}
          <div className="flex md:flex-cols-reverse flex-wrap mt-12">
            {/* left profile */}
            <div className="w-full md:w-2/6 p-4 text-gray-400 rounded-r-lg shadow-2xl">
              <CardProfileUser />
            </div>
            {/* right profile */}
            <div className="w-full md:w-4/6 p-4 text-gray-400 shadow-2xl">
              <div className="text-start font-bold text-xl text-black mb-2">
                <h1>Post Puisi</h1>
              </div>
              <div className="shadow-2xl rounded-xl">
                <div className="flex flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 shadow-2xl rounded-xl border-b-2 border-blue-400 ...">
                  <span className="text-dark-light font-semibold mt-2 lg:mt-4 lg:text-sm xl:text-base">
                    Write Tags:
                  </span>
                  <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
                    <Link to={"/ruang/v1/profile-user/puisi "}>
                      <li className="rounded-lg bg-blue-500 bg-opacity-8 px-3 py-1.5 text-white font-semibold">
                        Puisi
                      </li>
                    </Link>
                    <Link to={"/ruang/v1/profile-user/storyy"}>
                      <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                        Story
                      </li>
                    </Link>
                    <Link to={"/ruang/v1/profile-user/articlee"}>
                      <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                        Article
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="mt-2">
                  <FormInputPuisi/>
                </div>
              </div>
            </div>
          </div>
          {/* end container profile */}
        </section>
        {/* end container section profile */}
        {/* footer */}
        <section>
          <Footer />
        </section>
        {/* end footer */}
      </div>
    </Fragment>
  );
};

export default InputPuisi;
