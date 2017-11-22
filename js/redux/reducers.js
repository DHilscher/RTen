import { combineReducers } from "redux";

import { NavigationReducer } from "@expo/ex-navigation";

import CodeOfConductReducer from "./modules/conduct";

export default combineReducers({
  navigation: NavigationReducer,
  CodeOfConduct: CodeOfConductReducer
});
