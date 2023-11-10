import { combineReducers } from "redux";
import loginReducer from "./loginReducers";
import registerReducer from "./registerReducer";
import user from "./userReducers";
import getUserProfile from "./getUserProfile";
import putUserProfileBio from "./putUserProfileBio";
import getPuisi from "./getPuisi";
import getPuisiId from "./getPuisiId";
import postPuisi from "./postPuisi";
import getPuisiMyMenu from "./getPuisiMyMenu";
import deleteMyPuisi from "./deleteMypuisi";
const rootReducers = combineReducers({
  user,
  loginReducer,
  registerReducer,
  getUserProfile,
  putUserProfileBio,
  getPuisi,
  getPuisiId,
  postPuisi,
  getPuisiMyMenu,
  deleteMyPuisi
});

export default rootReducers;
