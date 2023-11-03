import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import NavRuangPertemanan from "../../../components/navbar/ruangpertemanan";
import CardProfileName from "../card-profile-name";
import CardProfileUser from "../card-profile-user";
import Footer from "../../../components/footer";
import { icons } from "../../../constants";
import { Link } from "react-router-dom";
const WriteStory = () => {
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
                <h1>My Write</h1>
              </div>
              <div className="shadow-2xl rounded-xl">
                <div className="flex flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 shadow-2xl rounded-xl border-b-2 border-blue-400 ...">
                  <span className="text-dark-light font-semibold mt-2 lg:mt-4 lg:text-sm xl:text-base">
                    Write Tags:
                  </span>
                  <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
                    <Link to={"/ruang/v1/profile-user/puisi "}>
                      <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                        Puisi
                      </li>
                    </Link>
                    <Link to={"/ruang/v1/profile-user/story"}>
                      <li className="rounded-lg bg-blue-500 bg-opacity-8 px-3 py-1.5 text-white font-semibold">
                        Story
                      </li>
                    </Link>
                    <Link to={"/ruang/v1/profile-user/article"}>
                      <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                        Article
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="mt-2">
                  <div className="mx-auto mt-2">
                    <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <img
                          className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                          src="https://via.placeholder.com/150"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-2 py-2">
                        <p className="text-xl font-bold">Post title</p>

                        <p className="text-gray-500">
                          Description of your post/article, Description of your
                          post/article,Description of your post/article,
                          Description of your post/article,Description of your
                          post/article, Description of your post/article,
                        </p>
                        <p className="mb-2 text-gray-500"># Puisi</p>
                        <span className="flex items-center justify-start text-gray-500">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Avatar"
                                className="w-8 h-8 rounded-full mr-2 object-cover"
                              />
                              <span className="text-gray-800 font-semibold">
                                John Doe
                              </span>
                            </div>
                            <span className="text-gray-600 ms-10">
                              10 oktober 1998
                            </span>
                          </div>
                        </span>
                        <div className="w-20 flex justify-between mt-4">
                          <div className="flex justify-between ms-10">
                            <icons.AiFillEdit size={20} />
                            <p className="ms-2">Edit</p>
                          </div>
                          <div className="flex justify-between ms-10">
                            <icons.AiFillDelete size={20} />
                            <p className="ms-2">Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto mt-2">
                    <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <img
                          className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                          src="https://via.placeholder.com/150"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-2 py-2">
                        <p className="text-xl font-bold">Post title</p>

                        <p className="text-gray-500">
                          Description of your post/article, Description of your
                          post/article,Description of your post/article,
                          Description of your post/article,Description of your
                          post/article, Description of your post/article,
                        </p>
                        <p className="mb-2 text-gray-500"># Puisi</p>
                        <span className="flex items-center justify-start text-gray-500">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Avatar"
                                className="w-8 h-8 rounded-full mr-2 object-cover"
                              />
                              <span className="text-gray-800 font-semibold">
                                John Doe
                              </span>
                            </div>
                            <span className="text-gray-600 ms-10">
                              10 oktober 1998
                            </span>
                          </div>
                        </span>
                        <div className="w-20 flex justify-between mt-4">
                          <div className="flex justify-between ms-10">
                            <icons.AiFillEdit size={20} />
                            <p className="ms-2">Edit</p>
                          </div>
                          <div className="flex justify-between ms-10">
                            <icons.AiFillDelete size={20} />
                            <p className="ms-2">Delete</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default WriteStory;
