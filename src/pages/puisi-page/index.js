import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { images, icons } from "../../constants";
import ScrollToTop from "../../components/scrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/ruangpertemanan";
import Footer from "../../components/footer";
import { getSearchSort } from "../../storages/actions/puisi";
import Moment from "moment";

export default function PuisiPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getSearchSort);

  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [search, setSearch] = useState("");

  const getData = () => {
    dispatch(getSearchSort(search, page, limit));
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    getData();
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= data?.pages.totalPage) {
      setPage(pageNumber);
    }
  };

  useEffect(() => {
    console.log(`${page}${limit}`);
    getData();
    // eslint-disable-next-line
  }, [page, limit]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Puisi</title>
      </Helmet>
      <div className="w-full h-screen">
        <ScrollToTop />
        {/* navbar */}
        <section>
          <Navbar />
        </section>
        <form onSubmit={handleSubmit}>
          <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
            <div className="mt-24 lg:w-1/2">
              <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
                Read the most interesting puisi, story, or article
              </h1>
              <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
                we write the
                ....................................................
              </p>
              <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
                <div className="relative">
                  <icons.FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
                  <input
                    className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
                    type="text"
                    name="search"
                    placeholder="Search Puisi"
                    onChange={onChangeSearch}
                    value={search}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white font-semibold rounded-lg px-4 py-2 md:absolute md:right-2 md:w-fit md:py-2"
                >
                  Search
                </button>
              </div>
              <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
                <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
                  Category Tags:
                </span>
                <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
                  <li className="rounded-lg bg-blue-500 bg-opacity-8 px-3 py-1.5 text-white font-semibold">
                    Puisi
                  </li>
                  <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                    <Link to={"/ruang/v1/home-story"}>Story</Link>
                  </li>
                  <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
                    <Link to={"/ruang/v1/home-article"}>Article</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:block ms-32">
              <img className="w-full" src={images.Logo} alt="fix_logo" />
            </div>
          </section>
        </form>

        {/* list card puisi */}
        <section className="container px-4 lg:px-8 mx-auto max-w-screen-2xl">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Puisi</h1>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-center items-center rounded-lg transition duration-500">
            {data?.rows?.map((item, index) => (
              <div
                key={index + 1}
                className="p-2 rounded-lg shadow-2xl shadow-blue-500/20"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full p-2 hover:shadow-blue-300">
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
                    <p className="text-gray-700 leading-tight mb-4">
                      {item.description}
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
        <section>
          <div className="my-5 text-center font-bold">
            <div>
              {page > 1 && (
                <button
                  className="rounded p-2 button-custom text-white border-0 bg-blue-600 me-3 font-bold"
                  onClick={() => goToPage(page - 1)}
                >
                  Prev
                </button>
              )}
              {data?.pages?.pageNow} From {data?.pages?.totalPage}
              <button
                className="rounded p-2 button-custom text-white border-0 bg-blue-600 ms-3 font-bold"
                onClick={() => goToPage(page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </section>
        {/* footer */}
        <section>
          <Footer />
        </section>
      </div>
    </Fragment>
  );
}
