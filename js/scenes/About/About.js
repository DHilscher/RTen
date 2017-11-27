import React from "react";
import { Text, View, Linking, Platform, Image } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";

import AnimateDescription from "../../components/animateDescription";

import styles from "./styles";

const About = ({ data }) => {
  let key = 0;
  return (
    <View style={styles.Container}>
      <View>
        <Image
          style={styles.Image}
          source={require("../../assets/images/r10_logo.png")}
        />
      </View>
      <View style={styles.Border} />
      <View>
        <Text style={styles.Text}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.Title}>Date & Venue</Text>
        <Text style={styles.Text}>
          The R10 conference will take place on Tuesday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.Title}>Code of Conduct</Text>
      </View>
      {data.map(item => {
        return (
          <View key={key++}>
            <AnimateDescription data={item} />
          </View>
        );
      })}
    </View>
  );
};

About.PropTypes = {};

export default About;
