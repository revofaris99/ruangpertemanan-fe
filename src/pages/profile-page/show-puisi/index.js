import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NavRuangPertemanan from "../../../components/navbar/ruangpertemanan";
import CardProfileName from "../card-profile-name";
import CardProfileUser from "../card-profile-user";
import Footer from "../../../components/footer";
import { icons } from "../../../constants";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPuisiMyMenu,
  getPuisiId,
  putPuisiMyMenu,
  deleteMyPuisi,
} from "../../../storages/actions/puisi";
import ModalEditPuisi from "../../puisi-page/edit-puisi/ModalEditPuisi";
import Moment from "moment";
import Swal from "sweetalert2";
const WritePuisi = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const data = useSelector((state) => state.getPuisiMyMenu);
  const { data: detailPuisi } = useSelector((state) => state.getPuisiId);

  const editPuisi = (id) => {
    navigate(`/ruang/v1/profile-user/Mypuisi/${id}`);
  };

  const categories = [
    { id: 1, name: "puisi" },
    { id: 2, name: "story" },
    { id: 3, name: "article" },
  ];

  const [inputData, setInputData] = useState({
    title: "",
    descriptions: "",
    category_id: "",
    photo: "",
  });

  const postData = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", inputData.title);
    formData.append("descriptions", inputData.descriptions);
    formData.append("category_id", inputData.category_id);

    if (image) {
      formData.append("photo", image);
    } else if (inputData.photo) {
      formData.append("photo", inputData.photo);
    }
    dispatch(putPuisiMyMenu(id,navigate,formData));
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
    if (e.target.files[0]) {
      setInputData({
        ...inputData,
        photo: URL.createObjectURL(e.target.files[0]),
      });
    } else if (data && data.photo_puisi) {
      setInputData({
        ...inputData,
        photo: data.photo_puisi,
      });
    }
  };

  const getDetailMenuById = () => {
    dispatch(getPuisiId(id));
  };

  useEffect(() => {
    getDetailMenuById();
  }, []);

  useEffect(() => {
    dispatch(getPuisiMyMenu());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setInputData({
        title: data.title || "",
        descriptions: data.descriptions || "",
        category_id: data.category_id || "",
        photo: data.photo_puisi || "",
      });
    }
  }, [data]);

  const handleDeletePuisi = (idPuisi, titlePuisi) => {
    Swal.fire({
      title: `"Are you sure? Delete: ${titlePuisi}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMyPuisi(idPuisi));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

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
                      <li className="rounded-lg bg-blue-500 bg-opacity-8 px-3 py-1.5 text-white font-semibold">
                        Puisi
                      </li>
                    </Link>
                    <Link to={"/ruang/v1/profile-user/story"}>
                      <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
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
                  <div className="mx-auto">
                    { data.data?.map((item, index) => (
                      <div
                        key={index + 1}
                        className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start mt-4"
                      >
                        <div className="relative w-32 h-32 flex-shrink-0">
                          <img
                            className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50 rounded-full"
                            src={item.photo_puisi}
                            alt="photo_puisi"
                          />
                        </div>
                        <div className="flex flex-col gap-2 py-2">
                          <p className="text-xl font-bold">
                            <Link to={`/ruang/v1/describe-puisi/${item.id}`}>
                              {item.title}
                            </Link>
                          </p>

                          <p className="text-gray-500">
                            {item.descriptions.slice(0, 200)}
                          </p>
                          <p className="mb-2 text-gray-500">
                            # {item.category}
                          </p>
                          <span className="flex items-center justify-start text-gray-500">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <img
                                  src={item.photo_users}
                                  alt={icons.PiImageSquareFill}
                                  className="w-8 h-8 rounded-full mr-2 object-cover"
                                />
                                <span className="text-gray-800 font-semibold ms-4">
                                  {item.fullname}
                                </span>
                              </div>
                              <span className="text-gray-600 ms-10">
                                {Moment(item.created_at).format("LL")}
                              </span>
                            </div>
                          </span>
                          <div className="w-20 flex justify-between mt-4">
                            <div className="flex justify-between ms-10">
                              <button
                                className="flex justify-between"
                                onClick={() =>
                                  setOpenModalEdit(true) || editPuisi(item.id)
                                }
                              >
                                <icons.AiFillEdit size={20} color="blue" />
                                <p className="ms-2 text-blue-600">Edit</p>
                              </button>
                              {/* modal edit menu */}
                              <ModalEditPuisi
                                isVisible={openModalEdit}
                                onClose={() => setOpenModalEdit(false)}
                              >
                                <div className="p-6 h-[600px]">
                                  <h3 className="text-xl font-semibold text-gray-900 mb-5">
                                    Edit Puisi
                                  </h3>
                                  <div className="overflow-y-auto h-[500px] rounded-xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                                    <div className="flex flex-col gap-5.5 p-6.5">
                                      <form onSubmit={postData}>
                                        <div className="bg-[image:var(--image-url)]"
                                         style={{ "--image-url": `url(${detailPuisi?.photo_puisi})` }}>
                                          <label className="mb-3 block text-black font-semibold">
                                            Image
                                          </label>
                                          <div className="p-10 rounded-2xl">
                                            <input
                                              type="file"
                                              className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:focus:border-primary"
                                              onChange={onChangeImage}
                                              name="image"
                                              id="photoUpload"
                                              accept="image/*"
                                            />
                                          </div>
                                        </div>
                                        <div className="mt-4">
                                          <label className="mb-3 block text-black font-semibold">
                                            Title
                                          </label>
                                          <input
                                            type="text"
                                            name="title"
                                            value={inputData.title||detailPuisi?.title}
                                            onChange={onChange}
                                            placeholder="title"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                          />
                                        </div>
                                        <div className="mt-4">
                                          <label className="mb-3 block text-black font-semibold">
                                            Descriptions
                                          </label>
                                          <textarea
                                            name="descriptions"
                                            value={inputData.descriptions||detailPuisi?.descriptions}
                                            onChange={onChange}
                                            rows={6}
                                            placeholder="Descriptions"
                                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                          ></textarea>
                                        </div>

                                        <div className="w-48 mt-4">
                                          <label className="mb-3 block text-black font-semibold">
                                            Select Category
                                          </label>
                                          <div className="relative z-20 bg-white dark:bg-form-input">
                                            <select
                                              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                                              name="category_id"
                                              value={inputData.category_id}
                                              onChange={onChange}
                                            >
                                              {categories?.map(
                                                (category, index) => (
                                                  <option
                                                    key={index}
                                                    value={category.id}
                                                  >
                                                    {category.name}
                                                  </option>
                                                )
                                              )}
                                            </select>
                                            <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                                              <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <g opacity="0.8">
                                                  <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                    fill="#637381"
                                                  ></path>
                                                </g>
                                              </svg>
                                            </span>
                                          </div>
                                        </div>

                                        <div className="mb-6 text-center mt-10">
                                          <button
                                            className="w-40 px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 animate-pulse"
                                            type="submit"
                                          >
                                            Post
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </ModalEditPuisi>
                            </div>
                            {/* button delete */}
                            <div className="flex justify-between ms-10">
                              <button
                                className="flex justify-between"
                                onClick={() => {
                                  handleDeletePuisi(item.id, item.title);
                                }}
                              >
                                <icons.AiFillDelete size={20} color="red" />
                                <p className="ms-2 text-red-600">Delete</p>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default WritePuisi;
