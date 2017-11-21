import React, { Component } from "react";
import About from "./scenes/About";
import { NavigationProvider, StackNavigation } from "@expo/ex-navigation";
import Router from "./navigation/routes";

export default class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute("about")} />
      </NavigationProvider>
    );
  }
}
