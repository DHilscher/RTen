import React, { Component } from "react";
import Router from "./routes";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { colors, typography } from "../config/styles";
import LinearGradient from "react-native-linear-gradient";

const headerGradient = (
  <LinearGradient
    start={{ x: 0.9, y: 0 }}
    end={{ x: 0.3, y: 1.0 }}
    locations={[0, 1]}
    colors={[colors.purple, colors.red]}
    style={{ flex: 1 }}
  />
);

const defaultRouteConfig = {
  navigationBar: {
    tintColor: "white",
    titleStyle: {
      fontFamily: typography.fontMainReg
    },
    renderBackground: () => headerGradient
  }
};

class NavigationLayout extends Component {
  renderIcon(iconName, isSelected) {
    return (
      <Icon
        name={iconName}
        size={24}
        color={isSelected ? "white" : colors.medGrey}
      />
    );
  }

  renderTitle(isSelected, title) {
    return (
      <Text
        style={{
          fontFamily: typography.fontMainReg,
          color: isSelected ? "white" : colors.medGrey
        }}
      >
        {title}
      </Text>
    );
  }

  static route = {
    navigationBar: {
      visible: false
    }
  };
  render() {
    return (
      <TabNavigation tabBarColor="black" initialTab="about">
        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon("ios-calendar", isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="faves"
          title="Faves"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon("ios-calendar", isSelected)}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon("ios-information-circle", isSelected)}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout;
