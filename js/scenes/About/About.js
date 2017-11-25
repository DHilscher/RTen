import React from "react";
import { Text, View, Linking, Platform } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";

import AnimateDescription from "../../components/animateDescription";

const About = ({ data }) => {
  let key = 0;
  return data.map(item => {
    return (
      <View key={key++}>
        <AnimateDescription data={item} />
      </View>
    );
  });
};

About.PropTypes = {};

export default About;
