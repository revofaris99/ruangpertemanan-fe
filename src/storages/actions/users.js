import axios from "axios";
// import { toast } from "react-toastify";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_USER_PROFILE_PANDDING" });
    const result = await axios.get(`${baseUrl}/users/show-users/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    
    dispatch({ payload: result.data.data, type: 'GET_USER_PROFILE_SUCCESS' });
  } catch (error) {
    console.log('error get user profile', error);
    dispatch({ payload: error.response.data, type: 'GET_USER_PROFILE_FAILED' });
  }
};

export const putUserProfileBio = ()=> async(dispatch)=>{
  try {
    dispatch({ type: "UPDATE_USER_PROFILE_PANDDING" });
    const result = await axios.put(`${baseUrl}/users/update-users/bio/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    const update = result.data.data
    dispatch({ payload: update, type: 'UPDATE_USER_PROFILE_SUCCESS' });
  } catch (error) {
    console.log('error update user profile', error);
    dispatch({ payload: error.response.data, type: 'UPDATE_USER_PROFILE_FAILED' });
  }
}