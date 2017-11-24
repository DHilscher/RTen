import React from "react";
import { Text, View, TouchableHighlight, Image } from "react-native";
import PropTypes from "prop-types";
import { goToSpeaker } from "../../lib/navigationHelpers";
import Moment from "moment";

const Session = ({ data, speakerData }) => {
  console.log(speakerData);

  return (
    <TouchableHighlight onPress={() => goToSpeaker(speakerData)}>
      <View key={data.session_id}>
        <Text>{data.location}</Text>
        <Text>{data.title}</Text>
        <Text>{Moment.unix(data.start_time).format("h:mm a")}</Text>
        <View>
          <Image
            style={{ height: 75, width: 75, borderRadius: 37.5 }}
            source={{ uri: `${speakerData.image}` }}
          />
          <Text>{speakerData.name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Session;
