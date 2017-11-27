import React from "react";
import { Text, View, Image } from "react-native";
import PropTypes from "prop-types";
import Moment from "moment";

const Speaker = ({ speakerData }) => {
  console.log(speakerData);

  return (
    <View key={speakerData.session_id}>
      {speakerData.image !== -1 ? (
        <Image
          style={{ height: 100, width: 100, borderRadius: 50 }}
          source={{ uri: `${speakerData.image}` }}
        />
      ) : null}
      <Text>{speakerData.name}</Text>
      <Text>{speakerData.bio}</Text>
    </View>
  );
};

export default Speaker;
