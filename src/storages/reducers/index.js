import { combineReducers } from "redux";
import loginReducer from "./loginReducers";
import registerReducer from "./registerReducer";
import user from "./userReducers";
const rootReducers = combineReducers({
  user,
  loginReducer,
  registerReducer,
});

export default rootReducers;
