import React from "react";
import { Text, View, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import { goToSpeaker } from "../../lib/navigationHelpers";
import Moment from "moment";

const Session = ({ data }) => {
  console.log(this.currentNavigatorUID);

  return (
    <TouchableHighlight onPress={() => goToSpeaker("speaker", data)}>
      <View key={data.session_id}>
        <Text>{data.location}</Text>
        <Text>{data.title}</Text>
        <Text>{Moment.unix(data.start_time).format("h:mm a")}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Session;
