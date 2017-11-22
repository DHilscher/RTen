import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { goToSession } from "../../lib/navigationHelpers";
import Moment from "moment";

const Session = ({ data }) => {
  console.log(data);

  return (
    <View key={data.session_id}>
      <Text>{data.location}</Text>
      <Text>{data.title}</Text>
      <Text>{Moment.unix(data.start_time).format("h:mm a")}</Text>
    </View>
  );
};

export default Session;
