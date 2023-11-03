import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import NavRuangPertemanan from "../../../components/navbar/ruangpertemanan";
import Footer from "../../../components/footer";
import { images } from "../../../constants";
import { Link } from "react-router-dom";

function DescribeArticle() {
  return (
    <Fragment className="w-screen h-screen scroll-smooth">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Desc Article</title>
      </Helmet>
      {/* navbar */}
      <section>
        <NavRuangPertemanan />
      </section>
      {/* end navbar */}

      {/* section desc article */}
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
              <h1 className="font-bold">Post Article</h1>
              <h1>10 Oktober 2000</h1>
            </div>
          </div>
        </div>
        {/* puisi */}
        <div className="flex md:flex-cols-reverse flex-wrap mt-12">
          {/*left page - isi puisi */}
          <div className="w-full md:w-4/6 p-4 text-gray-400 shadow-2xl">
            {/* <!-- Container for demo purpose --> */}
            <div className="container mx-auto md:px-6">
              {/* <!-- Section: Design Block --> */}
              <section className="mb-32">
                {/* <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/198.jpg"
                  className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt="image"
                /> */}
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/198.jpg"
                  className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt=""
                />

                <div className="mb-6 flex items-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (23).jpg"
                    className="mr-2 h-8 rounded-full"
                    alt="avatar"
                    loading="lazy"
                  />
                  <div>
                    <span>
                      Published <u>15.07.2020</u> by
                    </span>
                    <a href="#!" className="font-medium">
                      Anna Maria Doe
                    </a>
                  </div>
                </div>

                <h1 className="mb-6 text-3xl font-bold text-black">
                  An intriguing title for an interesting article
                </h1>

                <p className="text-black">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eligendi harum tempore cupiditate asperiores provident,
                  itaque, quo ex iusto rerum voluptatum delectus corporis
                  quisquam maxime a ipsam nisi sapiente qui optio! Dignissimos
                  harum quod culpa officiis suscipit soluta labore! Expedita
                  quas, nesciunt similique autem, sunt, doloribus pariatur
                  maxime qui sint id enim. Placeat, maxime labore. Dolores ex
                  provident ipsa impedit, omnis magni earum. Sed fuga ex ducimus
                  consequatur corporis, architecto nesciunt vitae ipsum
                  consequuntur perspiciatis nulla esse voluptatem quos dolorum
                  delectus similique eum vero in est velit quasi pariatur
                  blanditiis incidunt quam.
                </p>
              </section>
              {/* <!-- Section: Design Block --> */}
            </div>
            {/* <!-- Container for demo purpose --> */}
          </div>

          {/*right page - post lain */}
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
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even
                  influence both web designers and developers influence both web
                  designers and developers.
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
      {/* end section desc article */}

      {/* footer */}
      <Footer />
      {/* end footer */}
    </Fragment>
  );
}

export default DescribeArticle;
