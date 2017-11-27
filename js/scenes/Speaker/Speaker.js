import React from "react";
import { Text, View, Image, Platform } from "react-native";
import PropTypes from "prop-types";
import { leaveSpeaker } from "../../lib/navigationHelpers";
import Icon from "react-native-vector-icons/Ionicons";

const Speaker = ({ speakerData }) => {
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <View style={{ backgroundColor: "black" }} className="speaker-header">
        <Icon
          onPress={() => leaveSpeaker()}
          name={Platform.OS == "ios" ? "ios-close" : "md-close"}
          size={40}
          color={"white"}
        />
        <Text style={{ color: "white" }}>About the Speaker</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          alignItems: "center",
          borderRadius: 50,
          width: "95%",
          height: "100%"
        }}
        key={speakerData.session_id}
      >
        <Image
          style={{ height: 100, width: 100, borderRadius: 50 }}
          source={{ uri: `${speakerData.image}` }}
        />
        <Text style={{ color: "white" }}>{speakerData.name}</Text>
        <Text style={{ color: "white" }}>{speakerData.bio}</Text>
      </View>
    </View>
  );
};

export default Speaker;
