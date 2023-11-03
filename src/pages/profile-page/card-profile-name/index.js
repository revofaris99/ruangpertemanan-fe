import React from "react";
import { icons } from "../../../constants";

import Moment from "moment";
import Localization from "moment/locale/id";
Moment.updateLocale("id", Localization);

const CardProfileName = () => {
  const name = localStorage.getItem("name");
  const photo = localStorage.getItem("photo");
  const tanggal = Moment().locale("id");

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="card border-blue-400 border rounded-lg p-2 flex flex-row items-center mb-2">
        <div className="me-4">
          {photo ? (
            <>
              <img
                src={photo}
                alt=""
                className="rounded-full w-12 h-12 shadow-md"
              />
            </>
          ) : (
            <>
              <icons.PiImageSquareFill />
            </>
          )}
        </div>
        <h1>{name ? name : "Users"}</h1>
      </div>
      <div className="text-center items-center">
        <h1 className="font-bold">Profile Page</h1>
        <h1>{tanggal.format("LL")}</h1>
      </div>
    </div>
  );
};

export default CardProfileName;
