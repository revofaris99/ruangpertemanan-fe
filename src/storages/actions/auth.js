import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = process.env.REACT_APP_BASE_URL;
export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "AUTH_LOGIN_PENDING" });
    const response = await axios.post(baseUrl+"/auth/login", data);
    const result = response.data.data;
    localStorage.setItem("token", result.token);
    localStorage.setItem("id", result.id);
    localStorage.setItem("email", result.email);
    localStorage.setItem("name", result.fullname);
    localStorage.setItem("photo", result.photo);
    dispatch({ type: "AUTH_LOGIN_SUCCESS", payload: result });
    toast.success("Login Successfuly!");
    navigate("/ruang/v1/home");
  } catch (error) {
    dispatch({ type: "AUTH_LOGIN_FAILED" });
    toast.error("Login Failed!");
  }
};

export const registerUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const response = await axios.post(baseUrl+"/auth/register", data);
    const result = response.data.data;
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: result });
    toast.success("Register User Successfuly!");
    navigate("/ruang/v1/auth/login");
  } catch (error) {
    dispatch({
      type: `USER_REGISTER_FAILED`,
      payload: error.response.data,
    });
    toast.error("Register User Failed!");
  }
};

export const sendForgotPassword = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "SEND_VERIF_USER_PANDING" });
    const response = await axios.put(`${baseUrl}/auth/send-otp`, data);
    const result = response.data.data;
    dispatch({ type: "SEND_VERIF_USER_SUCCESS", payload: result });
    toast.success("Verif User Successfuly!");
    navigate("/ruang/v1/auth/resetPass");
  } catch (error) {
    dispatch({
      type: `SEND_VERIF_USER_FAILED`,
      payload: error.response.data,
    });
    toast.error("Verif User Failed!");
  }
};

export const sendResetPassword = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "SEND_RESET_PASSWORD_PANDING" });
    const response = await axios.put(`${baseUrl}/auth/reset-password`, data);
    const result = response.data.data;
    dispatch({ type: "SEND_RESET_PASSWORD_SUCCESS", payload: result });
    toast.success("Reset Password Successfuly!");
    navigate("/ruang/v1/auth/login");
  } catch (error) {
    dispatch({
      type: `SEND_RESET_PASSWORD_FAILED`,
      payload: error.response.data,
    });
    toast.error("Reset Password Failed!");
  }
};
