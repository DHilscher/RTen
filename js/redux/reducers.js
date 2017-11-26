import { combineReducers } from "redux";

import { NavigationReducer } from "@expo/ex-navigation";

import CodeOfConductReducer from "./modules/conduct";

import SessionsReducer from "./modules/sessions";

import SpeakerReducer from "./modules/speaker";

import FavesReducer from "./modules/faves";

export default combineReducers({
  navigation: NavigationReducer,
  CodeOfConduct: CodeOfConductReducer,
  sessions: SessionsReducer,
  speaker: SpeakerReducer,
  faves: FavesReducer
});
