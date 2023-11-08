// import { icons } from "../../../constants";
import React, { useEffect } from "react";

import Moment from "moment";
import Localization from "moment/locale/id";
import { getUserProfile } from "../../../storages/actions/users";
import { useDispatch, useSelector } from "react-redux";

Moment.updateLocale("id", Localization);

const CardProfileName = () => {
  const dispatch = useDispatch();
  const getUser = useSelector((state) => state.getUserProfile);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const tanggal = Moment().locale("id");

  return (
    <div className="flex flex-row items-center justify-between">
      {getUser.data?.map((item, index) => (
        <div
          key={index + 1}
          className="card border-blue-400 border rounded-lg p-2 flex flex-row items-center mb-2"
        >
          <div className="me-4">
            <img
              src={item.photo}
              alt=""
              className="rounded-full w-12 h-12 shadow-md"
            />
          </div>
          <h1>{item.fullname}</h1>
        </div>
      ))}
      <div className="text-center items-center">
        <h1 className="font-bold">Profile Page</h1>
        <h1>{tanggal.format("LL")}</h1>
      </div>
    </div>
  );
};

export default CardProfileName;
