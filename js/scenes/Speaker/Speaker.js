import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import Moment from "moment";

const Speaker = ({ data }) => {
  console.log(data);

  return (
    <View key={data.session_id}>
      <Text>{data.location}</Text>
      <Text>{data.title}</Text>
      <Text>{Moment.unix(data.start_time).format("h:mm a")}</Text>
      <Text>This is a Speaker page!!!!</Text>
    </View>
  );
};

export default Speaker;
