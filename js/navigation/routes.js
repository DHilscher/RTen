import { createRouter } from "@expo/ex-navigation";

import About from "../scenes/About";

const Router = createRouter(() => ({
  about: () => About
}));

export default Router;
