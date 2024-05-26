import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("token");
const headers = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
};
export const postPuisi = (data, navigate) => async (dispatch) => {
  try {
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
    dispatch({ type: "GET_DETAIL_PUISI_FAILED" });
    console.log("getMenu error");
    console.log(error);
  }
};
export const getSearchSort = (search, page, limit) => async (dispatch) => {
  try {
    dispatch({ type: "GET_SEARCH_SORT_PUISI_PENDING" });
    const result = await axios.get(
      `${baseUrl}/puisi/sort-menu?search=${search}&page=${page}&limit=${limit}`
    );
    dispatch({
      type: "GET_SEARCH_SORT_PUISI_SUCCESS",
      payload: result.data.data,
    });
  } catch (error) {
    console.log("error request get searhcsort", error);
    dispatch({ type: "GET_SEARCH_SORT_PUISI_FAILED" });
  }
};

export const getPuisiMyMenu = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_MY_PUISI_PENDING" });
    const result = await axios.get(`${baseUrl}/puisi/my-menu`, headers);
    dispatch({ type: "GET_MY_PUISI_SUCCESS", payload: result.data.data });
  } catch (error) {
    dispatch({ type: "GET_MY_PUISI_FAILED" });
    console.log(error);
  }
};

export const putPuisiMyMenu = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_MY_PUISI_PENDING" });
    const response = await axios.put(
      `${baseUrl}/puisi/my-menu/${id}`,
      data,
      headers
    );
    const result = response.data;
    dispatch({ type: "UPDATE_MY_PUISI_SUCCESS", payload: result });
    toast.success("Update Puisi Successfuly!");
  } catch (error) {
    dispatch({ payload: error.response.data, type: "UPDATE_MY_PUISI_FAILED" });
    console.log(error);
    toast.error("Update Puisi Failed!");
  }
};
export const deleteMyPuisi = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_MY_PUISI_PENDING" });
    const result = await axios.delete(
      `${baseUrl}/puisi/my-menu/${id}`,
      headers
    );
    dispatch({ type: "DELETE_MY_PUISI_SUCCESS", payload: result.data });
  } catch (error) {
    dispatch({ type: "DELETE_MY_PUISI_FAILED" });
    console.log(error);
  }
};
