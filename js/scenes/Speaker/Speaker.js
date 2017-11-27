import React from "react";
import { Text, View, Image, Platform, Linking } from "react-native";
import PropTypes from "prop-types";
import { leaveSpeaker } from "../../lib/navigationHelpers";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../config/styles";

const Speaker = ({ speakerData }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.SpeakerHeader}>
        <Icon
          onPress={() => leaveSpeaker()}
          name={Platform.OS == "ios" ? "ios-close" : "md-close"}
          size={40}
          color={"white"}
          style={styles.Icon}
        />
        <Text style={styles.AboutSpeaker}>About the Speaker</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          alignItems: "center",
          borderRadius: 50,
          width: "95%",
          height: "100%",
          backgroundColor: "white"
        }}
        key={speakerData.session_id}
      >
        <Image style={styles.Image} source={{ uri: `${speakerData.image}` }} />
        <Text>{speakerData.name}</Text>
        <Text>{speakerData.bio}</Text>
        <LinearGradient
          start={{ x: 0.9, y: 0 }}
          end={{ x: 0.3, y: 1.0 }}
          locations={[0, 1]}
          colors={[colors.purple, colors.blue]}
          style={styles.ButtonGradient}
        >
          <Text
            style={styles.Button}
            onPress={() => Linking.openURL(speakerData.url)}
          >
            Read More on Wikipedia
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Speaker;
