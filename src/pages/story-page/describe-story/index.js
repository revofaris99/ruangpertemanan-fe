import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import NavRuangPertemanan from "../../../components/navbar/ruangpertemanan";
import Footer from "../../../components/footer";
import { images } from "../../../constants";
import { Link } from "react-router-dom";
const DescribeStory = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Desc Story</title>
      </Helmet>
      <div className="w-screen h-screen scroll-smooth">
        {/* section Navbar */}
        <section>
          <NavRuangPertemanan />
        </section>
        {/* end section Navbar */}

        {/* describe puisi */}
        <section className="container px-4 lg:px-8 mx-auto max-w-screen-2xl mt-32">
          {/* create name puisi */}
          <div className="border-b-2 border-blue-400">
            <div className="flex flex-row items-center justify-between">
              <div className="card border-blue-400 border rounded-lg p-2 flex flex-row items-center mb-2">
                <div className="me-4">
                  <img
                    src={images.AniqFto}
                    alt=""
                    className="rounded-full w-12 h-12 shadow-md "
                  />
                </div>
                <h1>Revo Faris Saifuddin</h1>
              </div>
              <div className="text-center items-center">
                <h1 className="font-bold">Post Story</h1>
                <h1>10 Oktober 2000</h1>
              </div>
            </div>
          </div>
          {/* puisi */}
          <div className="flex md:flex-cols-reverse flex-wrap mt-12">
            {/* isi puisi */}
            <div className="w-full md:w-4/6 p-4 text-gray-400 shadow-2xl">
              <div className="">
                <div
                  className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative hover:scale-110 duration-500"
                  style={{ height: "24em" }}
                >
                 {/*  <div
                    className="absolute left-0 bottom-0 w-full h-full z-10"
                  ></div> */}
                  <img
                    src={images.AniqFto}
                    className="absolute left-0 top-0 w-full h-full z-0 object-cover rounded-lg shadow-2xl"
                    alt=""
                  />
                  <div className="p-4 absolute bottom-0 left-0 z-20">
                    <Link
                      to="#"
                      className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2 rounded-xl shadow-xl"
                    >
                      Nutrition
                    </Link>
                    <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                      Pellentesque a consectetur velit, ac molestie ipsum. Donec
                      sodales, massa et auctor.
                    </h2>
                    <div className="flex mt-3">
                      <img
                        src="https://randomuser.me/api/portraits/men/97.jpg"
                        className="h-10 w-10 rounded-full mr-2 object-cover"
                        alt=""
                      />
                      <div>
                        <p className="font-semibold text-gray-200 text-sm">
                          Mike Sullivan
                        </p>
                        <p className="font-semibold text-gray-800 text-xs">
                          10 oktober 1999
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="px-4 lg:px-0 mt-12 text-gray-500 max-w-screen-md mx-auto text-lg leading-relaxed">
                  <p class="pb-6 indent-8">
                    Advantage old had otherwise sincerity dependent additions.
                    It in adapted natural hastily is justice. Six draw you him
                    full not mean evil. Prepare garrets it expense windows
                    shewing do an. She projection advantages resolution son
                    indulgence. Part sure on no long life am at ever. In songs
                    above he as drawn to. Gay was outlived peculiar rendered led
                    six.
                  </p>

                  <p class="pb-6 indent-8">
                    Difficulty on insensible reasonable in. From as went he
                    they. Preference themselves me as thoroughly partiality
                    considered on in estimating. Middletons acceptance
                    discovered projecting so is so or. In or attachment
                    inquietude remarkably comparison at an. Is surrounded
                    prosperous stimulated am me discretion expression. But truth
                    being state can she china widow. Occasional preference fat
                    remarkably now projecting uncommonly dissimilar. Sentiments
                    projection particular companions interested do at my
                    delightful. Listening newspaper in advantage frankness to
                    concluded unwilling.
                  </p>

                  <p class="pb-6 indent-8">
                    Adieus except say barton put feebly favour him. Entreaties
                    unpleasant sufficient few pianoforte discovered uncommonly
                    ask. Morning cousins amongst in mr weather do neither.
                    Warmth object matter course active law spring six. Pursuit
                    showing tedious unknown winding see had man add. And park
                    eyes too more him. Simple excuse active had son wholly
                    coming number add. Though all excuse ladies rather regard
                    assure yet. If feelings so prospect no as raptures quitting.
                  </p>
                </div>
              </div>
            </div>

            {/* post lain */}
            <div className="w-full md:w-2/6 p-4 text-gray-400 rounded-r-lg shadow-2xl">
              <div className="text-start font-bold text-xl text-black mb-2">
                <h1>last post</h1>
              </div>
              {/* isi post */}
              <div className="">
                {/* post */}
                <section class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex justify-between items-center mb-5 text-gray-500">
                    <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg
                        class="mr-1 w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                      Tutorial
                    </span>
                    <span class="text-sm">10 Oktober 1999</span>
                  </div>
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link href="#">How to quickly deploy a static website</Link>
                  </h2>
                  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                    Static websites are now used to bootstrap lots of websites
                    and are becoming the basis for a variety of tools that even
                    influence both web designers and developers influence both
                    web designers and developers.
                  </p>
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                      <img
                        class="w-7 h-7 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        alt="Jese Leos avatar"
                      />
                      <span class="font-medium dark:text-white">
                        Revo Faris Saifuddin
                      </span>
                    </div>
                    <Link
                      href="#"
                      class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      Read more
                      <svg
                        class="ml-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        {/* end section describe puisi */}
        {/* footer */}
        <Footer />
        {/* end footer */}
      </div>
    </Fragment>
  );
};

export default DescribeStory;
