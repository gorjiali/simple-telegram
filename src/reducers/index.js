import { combineReducers } from "redux";
import profile from "./profile";
import groups from "./groups";
import messages from "./messages";

export default combineReducers({
  profile,
  groups,
  messages,
});
