import React, { useState } from "react";
import { postPuisi } from "../../../storages/actions/puisi";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const FormInputPuisi = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const {postData} = useSelector((state) => state.postPuisi);
  const [photo, setPhoto] = useState();
  const [inputData, setInputData] = useState({
    title: "",
    descriptions: "",
    category_id: "1",
    photo: "",
  });
  const categories = [
    { id: 1, name: "puisi" },
    { id: 2, name: "story" },
    { id: 3, name: "article" },
  ];

  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputData.title);
    formData.append("descriptions", inputData.descriptions);
    formData.append("category_id", inputData.category_id);
    formData.append("photo", photo);
    console.log(formData);
    dispatch(postPuisi(formData, navigate));
  };

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <div className="rounded-xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
      <div className="flex flex-col gap-5.5 p-6.5">
        <form onSubmit={postForm}>
          <div className="">
            <label className="mb-3 block text-black font-semibold">Image</label>
            <div className="p-10 rounded-2xl">
              <input
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:focus:border-primary"
                onChange={handlePhoto}
                required
                name="photo"
                id="file"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 block text-black font-semibold">Title</label>
            <input
              type="text"
              name="title"
              value={inputData.title}
              required
              onChange={handleChange}
              placeholder="Title Input"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <div className="mt-4">
            <label className="mb-3 block text-black font-semibold">
              Descriptions
            </label>
            <textarea
              name="descriptions"
              value={inputData.descriptions}
              onChange={handleChange}
              rows={6}
              placeholder="Descriptions Puisi"
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
                onChange={handleChange}
              >
                {categories?.map((category, index) => (
                  <option key={index} value={category.id}>
                    {category.name}
                  </option>
                ))}
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
  );
};

export default FormInputPuisi;
