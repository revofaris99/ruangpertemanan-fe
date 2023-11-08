import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const postPuisi = (data,navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "POST_PUISI_PANDING" });
    const result = await axios.post(`${baseUrl}/puisi`, data, headers);
    dispatch({ type: "POST_PUISI_SUCCESS", payload: result.data });
    toast.success("Post Puisi Successfuly!");
    navigate("/ruang/v1/profile-user/puisi");
  } catch (error) {
    console.log("error post menu", error);
    dispatch({ payload: error.response.data, type: "POST_PUISI_FAILED" });
    toast.error("Post Puisi Failed!");
  }
};

export const getPuisi = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PUISI_PANDDING" });
    const result = await axios.get(`${baseUrl}/puisi/all`);
    dispatch({ type: "GET_PUISI_SUCCESS", payload: result.data.data });
  } catch (error) {
    dispatch({
      type: "GET_PUISI_FAILED",
      payload: error.response.data.message,
    });
    console.log("getMenu error");
    console.log(error);
  }
};
export const getPuisiId = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GET_DETAIL_PUISI_PENDING" });
    const result = await axios.get(`${baseUrl}/puisi/menu/${id}`);
    dispatch({ type: "GET_DETAIL_PUISI_SUCCESS", payload: result.data.data });
  } catch (error) {
    dispatch({ payload: error.response.data, type: "GET_DETAIL_PUISI_FAILED" });
    console.log("getMenu error");
    console.log(error);
  }
};
