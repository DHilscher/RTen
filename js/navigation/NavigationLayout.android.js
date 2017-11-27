import React, { Component } from "react";
import Router from "./routes";
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { colors, typography } from "../config/styles";

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return (
      <DrawerNavigation id="main" initialItem="schedule" drawerWidth={300}>
        <DrawerNavigationItem
          id="schedule"
          renderTitle={isSelected => this.renderTitle("Schedule", isSelected)}
          renderIcon={isSelected => this.renderIcon("md-calendar", isSelected)}
        >
          <StackNavigation
            id="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="faves"
          renderTitle={isSelected => this.renderTitle("Faves", isSelected)}
          renderIcon={isSelected => this.renderIcon("md-heart", isSelected)}
        >
          <StackNavigation id="faves" initialRoute={Router.getRoute("faves")} />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="about"
          renderTitle={isSelected => this.renderTitle("About", isSelected)}
          renderIcon={isSelected =>
            this.renderIcon("md-information-circle", isSelected)}
        >
          <StackNavigation id="about" initialRoute={Router.getRoute("about")} />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }

  renderTitle(title, isSelected) {
    return (
      <Text
        style={{
          fontFamily: typography.fontMainReg,
          color: isSelected ? colors.blue : colors.medGrey
        }}
      >
        {title}
      </Text>
    );
  }
  renderIcon(iconName, isSelected) {
    return (
      <Icon
        name={iconName}
        size={24}
        color={isSelected ? colors.blue : colors.medGrey}
      />
    );
  }
}

export default NavigationLayout;
