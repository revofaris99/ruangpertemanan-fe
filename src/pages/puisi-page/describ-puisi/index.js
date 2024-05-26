import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import NavRuangPertemanan from "../../../components/navbar/ruangpertemanan";
import { getPuisiId, getPuisi } from "../../../storages/actions/puisi";
import Footer from "../../../components/footer";
import { Link, useParams } from "react-router-dom";
import Moment from "moment";
import Localization from "moment/locale/id";
import { icons } from "../../../constants";
import ShowMore from "../../../components/paginationButton/ShowMore";

const DescribePuisi = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  Moment.updateLocale("id", Localization);
  const tanggal = Moment().locale("id");

  const { data: detailPuisi } = useSelector((state) => state.getPuisiId);
  const dataPuisi = useSelector((state) => state.getPuisi);

  useEffect(() => {
    dispatch(getPuisiId(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getPuisi());
  }, [dispatch]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Desc Puisi</title>
      </Helmet>
      <div className="w-screen h-screen scroll-smooth">
        {/* section Navbar */}
        <div>
          <NavRuangPertemanan />
        </div>
        {/* end section Navbar */}
        {/* describe puisi */}
        <div className="container px-4 lg:px-8 mx-auto max-w-screen-2xl mt-32">
          {/* create name puisi */}
          <div className="border-b-2 border-blue-400">
            <div className="flex flex-row items-center justify-between">
              <div className="card border-blue-400 border rounded-lg p-2 flex flex-row items-center mb-2">
                <div className="me-4">
                  <img
                    src={detailPuisi?.photo_users}
                    alt=""
                    className="rounded-full w-12 h-12 shadow-md "
                  />
                </div>
                <h1>{detailPuisi?.fullname}</h1>
              </div>
              <div className="text-center items-center">
                <h1 className="font-bold">Post Puisi</h1>
                <h1>{tanggal.format("LL")}</h1>
              </div>
            </div>
          </div>

          {/* puisi */}
          <div className="flex md:flex-cols-reverse flex-wrap mt-12">
            {/* isi puisi */}
            <div className="w-full md:w-4/6 p-4 text-gray-400 shadow-2xl">
              <div className="">
                <div className="text-center text-black font-bold text-2xl">
                  <h1 className="break-normal md:break-all">
                    {detailPuisi?.title}
                  </h1>
                  <img
                    src={detailPuisi?.photo_puisi}
                    alt="Mountain"
                    className="mx-auto w-3/4 h-72 object-cover rounded-2xl shadow-gray-400 shadow-2xl hover:scale-110 duration-500 mt-12"
                  />
                </div>
                <div className="flex justify-center mt-10">
                  <div className="p-10 max-w-md break-normal hover:break-all">
                    <h5 className="break-normal md:break-all">
                      {detailPuisi?.descriptions}
                    </h5>
                    <cite class="block text-right mt-10 text-gray-400">
                      <h1>{Moment(detailPuisi?.created_at).format("LL")}</h1>-{" "}
                      {detailPuisi?.fullname}
                    </cite>
                  </div>
                </div>
              </div>
            </div>

            {/* post lain */}

            <div className="w-full md:w-2/6 p-4 text-gray-400 rounded-r-lg shadow-2xl">
              <div className="text-start font-bold text-xl text-black mb-2">
                <h1>last post</h1>
              </div>
              <div className="">
                {dataPuisi.data?.slice(0, 3).map((item, index) => (
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
                            {item.title}
                          </Link>
                        </h2>
                        <p className="text-gray-700 leading-tight mb-4">
                          {item.descriptions}
                        </p>
                        <p className="mb-2"># {item.category}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <img
                              src={item.photo_users}
                              alt={icons.PiImageSquareFill}
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

                {/* show more puisi */}
                <ShowMore />
                {/* show more puisi end*/}
              </div>
            </div>
          </div>
        </div>
        {/* end section describe puisi */}
        {/* footer */}
        <Footer />
        {/* end footer */}
      </div>
    </Fragment>
  );
};

export default DescribePuisi;
