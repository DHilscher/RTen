import React from "react";
import { Text, View, Linking, Platform } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";

const About = ({ data }) => {
  let key = 0;
  return data.map(item => {
    return (
      <View key={key++}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
        <Icon
          name={Platform.OS == "ios" ? "ios-heart" : "md-heart"}
          size={24}
          color={"red"}
        />
      </View>
    );
  });
};

About.PropTypes = {};

export default About;
