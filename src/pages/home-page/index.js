/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useState, useEffect } from "react";
import { getPuisi } from "../../storages/actions/puisi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavRuangPertemanan from "../../components/navbar/ruangpertemanan";
import HomeLanding from "../../components/homeLanding";
import Footer from "../../components/footer";
import { icons } from "../../constants";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../../components/scrollToTop";
import Moment from "moment";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const dispatch = useDispatch();
  const getDataPuisi = useSelector((state) => state.getPuisi);
  /* slider puisi */
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4 },
      },
    },
    slides: { perView: 1 },
  });
  /* slider puisi end*/
  /* slider story */
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  /* slider story */
  /* scroll back top */
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  /* endscroll back top */
  /* aos animation */
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    dispatch(getPuisi());
  }, [dispatch]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ruang Pertemanan</title>
      </Helmet>
      <div className="App w-full h-screen scroll-smooth">
        <ScrollToTop />
        {/* navbar */}
        <section name="home-portofolio" className="App w-full h-screen">
          <NavRuangPertemanan />
          <HomeLanding />
        </section>
        {/*container intro ruang pertemanan */}
        <section
          data-aos="fade-down"
          className="container px-4 lg:px-8 mx-auto max-w-screen-xl"
        >
          <div className="max-w-screen text-gray-700">
            {/* intro rp */}
            <div className="max-w-xl mx-auto text-center mt-24">
              <h1 className="font-bold text-2xl my-3">
                All-In-One{" "}
                <span className="text-yellow-500">Ruang Pertemanan</span>
              </h1>
              <p className="leading-relaxed text-gray-500">
                Ruang Pertemanan is a small sketch from a journey for us to
                become fully human
              </p>
            </div>
            {/* card */}
            <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20">
              <div className="bg-white shadow-xl p-6 text-center rounded-xl">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
                  <icons.BiSolidBookBookmark size={30} />
                </div>
                <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
                  Puisi
                </h1>
                <p className="px-4 text-gray-500">
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts
                </p>
              </div>

              <div className="bg-white shadow-xl p-6 text-center rounded-xl">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
                  <icons.FaLocationArrow size={30} />
                </div>
                <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
                  Story
                </h1>
                <p className="px-4 text-gray-500">
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts
                </p>
              </div>

              <div className="bg-white shadow-xl p-6 text-center rounded-xl">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
                  <icons.GrArticle size={30} />
                </div>
                <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
                  Artikel
                </h1>
                <p className="px-4 text-gray-500">
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* card list puisi */}
        <section
          data-aos="fade-up"
          className="container px-4 lg:px-8 mx-auto max-w-screen-2xl mt-20"
        >
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Puisi</h1>
            <p className="text-md font-semibold hover:text-blue-600">
              <Link to={"/ruang/v1/home-puisi"}>Show all</Link>
            </p>
          </div>
          <div
            ref={sliderRef}
            className="keen-slider grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center items-center rounded-lg transition duration-500"
          >
            {getDataPuisi.data?.map((item, index) => (
              <div
                key={index + 1}
                className="keen-slider__slide p-2 rounded-lg shadow-2xl shadow-blue-500/20"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs w-full p-2 hover:shadow-blue-300">
                  <img
                    src={item.photo_puisi}
                    alt="Mountain"
                    className="w-full h-64 object-cover rounded-lg hover:scale-110 duration-500"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      <Link to={`/ruang/v1/describe-puisi/${item.id}`}>
                        {item.title.slice(0, 10)}...
                      </Link>
                    </h2>
                    <p className="text-gray-700 leading-tight mb-4 truncate hover:text-clip">
                      {item.descriptions}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src={
                            item.photo_users ? (
                              item.photo_users
                            ) : (
                              <icons.FaUserAlt color="black" size={20} />
                            )
                          }
                          alt={icons.FaUserAlt}
                          className="w-8 h-8 rounded-full mr-2 object-cover"
                        />
                        <span className="text-gray-800 font-semibold">
                          {item.fullname}
                        </span>
                      </div>
                      <span className="text-gray-600">
                        {Moment(item.created_at).format("LL")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* card list story */}
        <section
          data-aos="zoom-in"
          className="container px-2 lg:px-8 mx-auto max-w-screen-2xl mt-20"
        >
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Story</h1>
            <p className="text-md font-semibold hover:text-blue-600">
              <Link to={"/ruang/v1/home-story"}>Show all</Link>
            </p>
          </div>
          <div className="relative group">
            <div className="mx-auto p-4 md:p-0">
              {/* <!-- Card wrapper --> */}
              <div className="flex flex-wrap w-full lg:w-4/5 mx-auto shadow-2xl shadow-blue-500/20 hover:shadow-blue-300">
                {/* <!-- Card image --> */}
                <div
                  className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative rounded-lg border-gray-200 shadow-lg"
                  style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                  }}
                >
                  <div className="absolute text-xl">
                    <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                  </div>
                </div>
                {/* <!-- Card body --> */}
                <div className="bg-white w-full md:w-2/3">
                  {/* <!-- Card body - outer wrapper --> */}
                  <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                    {/* <!-- Card body - inner wrapper --> */}
                    <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center rounded-lg shadow-lg">
                      {/* <!-- Card title and subtitle --> */}
                      <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left font-semibold">
                        <h3>Saint Basil's Cathedral</h3>
                        <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                          Moscow - Russia
                        </p>
                        <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                      </div>
                      {/* <!-- Card description --> */}
                      <div className="w-full lg:w-3/5 lg:px-3">
                        <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm truncate hover:text-clip">
                          The Cathedral of Vasily the Blessed (Russian: Собор
                          Василия Блаженного, Sobor Vasiliya Blazhennogo),
                          commonly known as Saint Basil's Cathedral, is a church
                          in Red Square in Moscow, Russia. The building, now a
                          museum, is officially known as the Cathedral of the
                          Intercession of the Most Holy Theotokos on the Moat
                          (Russian: Собор Покрова Пресвятой Богородицы, что на
                          Рву, Sobor Pokrova Presvyatoy Bogoroditsy, chto na
                          Rvu) or Pokrovsky Cathedral (Russian: Покровский
                          собор).[5] It was built from 1555–1561 on orders from
                          Ivan the Terrible and commemorates the capture of
                          Kazan and Astrakhan.
                        </p>
                      </div>
                      {/* <!-- Call to action button --> */}
                      <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                        <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                          Visit now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <icons.BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <icons.BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-2xl cursor-pointer"
                >
                  <icons.RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* card list atrikel */}
        <section
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className="container px-2 lg:px-8 mx-auto max-w-screen-2xl mt-20"
        >
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Article</h1>
            <p className="text-md font-semibold hover:text-blue-600">
              <Link to={"/ruang/v1/home-article"}>Show all</Link>
            </p>
          </div>
          {/* list */}
          <div className="shadow-2xl shadow-blue-500/20 rounded-2xl">
            {/* <!-- Container --> */}
            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 shadow-2xl hover:shadow-blue-300">
              <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                <div className="order-1 sm:ml-6 xl:ml-0">
                  <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                    <span className="mb-1 block text-sm leading-6 text-indigo-500">
                      Headless UI
                    </span>
                    Completely unstyled, fully accessible UI components
                  </h3>
                  <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                    <p>
                      Completely unstyled, fully accessible UI components,
                      designed to integrate beautifully with Tailwind CSS.
                    </p>
                  </div>
                  <a
                    className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                    href="https://headlessui.dev"
                  >
                    Learn more
                    <span className="sr-only">
                      , Completely unstyled, fully accessible UI components
                    </span>
                    <svg
                      className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                </div>
                <img
                  src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
                  alt=""
                  className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
                  width="1216"
                  height="640"
                />
              </li>
              <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                <div className="order-1 sm:ml-6 xl:ml-0">
                  <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                    <span className="mb-1 block text-sm leading-6 text-purple-500">
                      Heroicons
                    </span>
                    Beautiful hand-crafted SVG icons, by the makers of Tailwind
                    CSS.
                  </h3>
                  <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                    <p>
                      A set of 450+ free MIT-licensed SVG icons. Available as
                      basic SVG icons and via first-party React and Vue
                      libraries.
                    </p>
                  </div>
                  <a
                    className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                    href="https://heroicons.com"
                  >
                    Learn more
                    <span className="sr-only">
                      , Beautiful hand-crafted SVG icons, by the makers of
                      Tailwind CSS.
                    </span>
                    <svg
                      className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                </div>
                <img
                  src="https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg"
                  alt=""
                  className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
                  width="1216"
                  height="640"
                />
              </li>
              <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                <div className="order-1 sm:ml-6 xl:ml-0">
                  <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                    <span className="mb-1 block text-sm leading-6 text-cyan-500">
                      Hero Patterns
                    </span>
                    Seamless SVG background patterns by the makers of Tailwind
                    CSS.
                  </h3>
                  <div className="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                    <p>
                      A collection of over 100 free MIT-licensed high-quality
                      SVG patterns for you to use in your web projects.
                    </p>
                  </div>
                  <a
                    className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                    href="https://heropatterns.com"
                  >
                    Learn more
                    <span className="sr-only">
                      , Seamless SVG background patterns by the makers of
                      Tailwind CSS.
                    </span>
                    <svg
                      className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </a>
                </div>
                <img
                  src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
                  alt=""
                  className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
                  width="1216"
                  height="640"
                />
              </li>
            </ul>
          </div>
        </section>

        <div className="container px-2 lg:px-8 mx-auto max-w-screen-2xl mt-32">
          <div onClick={scrollToTop} className="flex flex-row-reverse">
            <icons.AiOutlineArrowUp
              size={40}
              className="bg-blue-500 rounded-3xl animate-bounce cursor-pointer shadow-2xl"
            />
          </div>
        </div>

        {/* footer */}
        <section data-aos="fade-down" className="">
          <Footer />
        </section>
      </div>
    </Fragment>
  );
}
