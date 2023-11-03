import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import NavRuangPertemanan from "../../components/navbar/ruangpertemanan";
import CardProfileName from "./card-profile-name";
import CardProfileUser from "./card-profile-user"
import Footer from "../../components/footer";
import { Outlet } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile User</title>
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
            <CardProfileName/>
          </div>
          {/* container profile */}
          <div className="flex md:flex-cols-reverse flex-wrap mt-12">
            {/* left profile */}
            <div className="w-full md:w-2/6 p-4 text-gray-400 rounded-r-lg shadow-2xl">
              <CardProfileUser/>
            </div>
            {/* right profile */}
            <div className="w-full md:w-4/6 p-4 text-gray-400 shadow-2xl">
              <main>
                  <Outlet/>
              </main>
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

export default ProfilePage;
