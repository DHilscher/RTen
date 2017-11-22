import { combineReducers } from "redux";

import { NavigationReducer } from "@expo/ex-navigation";

import CodeOfConductReducer from "./modules/conduct";

import SessionsReducer from "./modules/sessions";

export default combineReducers({
  navigation: NavigationReducer,
  CodeOfConduct: CodeOfConductReducer,
  sessions: SessionsReducer
});
