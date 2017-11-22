import { createRouter } from "@expo/ex-navigation";

import About from "../scenes/About";
import Schedule from "../scenes/Schedule";
import Layout from "./NavigationLayout";

const Router = createRouter(() => ({
  about: () => About,
  schedule: () => Schedule,
  layout: () => Layout
}));

export default Router;
