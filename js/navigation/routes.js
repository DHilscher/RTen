import { createRouter } from "@expo/ex-navigation";

import About from "../scenes/About";
import Schedule from "../scenes/Schedule";
import Layout from "./NavigationLayout";
import Session from "../scenes/Session";

const Router = createRouter(() => ({
  about: () => About,
  schedule: () => Schedule,
  layout: () => Layout,
  session: () => Session
}));

export default Router;
