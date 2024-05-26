import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("token");

const headers = {
  "Access-Control-Allow-Origin": "*",
  Authorization: `Bearer ${token}`,
  Accept: "application/json",
  "Content-Type": "application/json" || "multipart/form-data",
};

/* get puisi by id */
export const getMenuIdPuisi = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_DETAIL_MENU_PUISI_PENDING" });
    const response = await axios.get(`${baseUrl}/menu/puisi/${id}`);
    const result = response.data.data;
    dispatch({ type: "GET_DETAIL_MENU_PUISI_SUCCESS", payload: result });
    toast.success("Get Detail Puisi Success!");
  } catch (error) {
    dispatch({
      type: "GET_DETAIL_MENU_PUISI_FAILED",
      payload: error.response.data,
    });
    toast.error("Add Menu Failed!");
  }
};
/* get puisi by id end*/

/* post puisi */
export const addMenuPuisi = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_MENU_PUISI_PENDING" });
    const response = await axios.post(
      `${baseUrl}/menu/post/puisi`,
      data,
      headers
    );
    const result = response.data.data;
    dispatch({ type: "ADD_MENU_PUISI_SUCCESS", payload: result });
    toast.success("Add Puisi Success!");
    navigate("/ruang/v1/profile-user/puisi");
  } catch (error) {
    dispatch({
      type: "ADD_MENU_PUISI_FAILED",
      payload: error.response.data,
    });
    toast.error("Add Menu Failed!");
  }
};
/* post puisi end*/
