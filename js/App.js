import React, { Component } from "react";
import About from "./scenes/About";
import Schedule from "./scenes/Schedule";

import {
  NavigationContext,
  NavigationProvider,
  StackNavigation
} from "@expo/ex-navigation";
import Router from "./navigation/routes";
import Store from "./redux/store";
import { Provider } from "react-redux";

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});
export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext} router={Router}>
          <StackNavigation
            navigatorUID="root"
            id="root"
            initialRoute={Router.getRoute("layout")}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}
