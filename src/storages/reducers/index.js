import { combineReducers } from "redux";
import loginReducer from "./loginReducers";
import registerReducer from "./registerReducer";
import user from "./userReducers";
import getUserProfile from "./getUserProfile";
import putUserProfileBio from "./putUserProfileBio"
const rootReducers = combineReducers({
  user,
  loginReducer,
  registerReducer,
  getUserProfile,
  putUserProfileBio
});

export default rootReducers;
