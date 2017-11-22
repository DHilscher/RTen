import { createRouter } from "@expo/ex-navigation";

import About from "../scenes/About";
import Layout from "./NavigationLayout";

const Router = createRouter(() => ({
  about: () => About,
  layout: () => Layout
}));

export default Router;
