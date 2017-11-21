import React from "react";
import { Text, View, Linking } from "react-native";
import PropTypes from "prop-types";

const About = ({ data }) => {
  console.log(data);
  let key = 0;
  return data.map(item => {
    console.log(this);
    return (
      <View key={key++}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  });
};

About.PropTypes = {};

export default About;
