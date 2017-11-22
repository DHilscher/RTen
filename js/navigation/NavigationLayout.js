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
      <TabNavigation tabBarColor="blue" initialTab="about">
        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon("ios-heart", isSelected)}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default NavigationLayout;
