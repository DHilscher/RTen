import { createRouter } from "@expo/ex-navigation";

import About from "../scenes/About";
import Schedule from "../scenes/Schedule";
import Layout from "./NavigationLayout";
import Session from "../scenes/Session";
import Speaker from "../scenes/Speaker";

const Router = createRouter(() => ({
  about: () => About,
  schedule: () => Schedule,
  layout: () => Layout,
  session: () => Session,
  speaker: () => Speaker
}));

export default Router;
