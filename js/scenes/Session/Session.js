import React from "react";
import { Text, View, TouchableHighlight, Image, Platform } from "react-native";
import PropTypes from "prop-types";
import { goToSpeaker } from "../../lib/navigationHelpers";
import Moment from "moment";
import { createFave, deleteFave } from "../../config/models";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { colors } from "../../config/styles";
import LinearGradient from "react-native-linear-gradient";

const Session = ({ data, speakerData, allFaves }) => {
  return (
    <View style={styles.Container}>
      {allFaves.indexOf(data.session_id) !== -1 ? (
        <Icon
          style={styles.Icon}
          name={Platform.OS == "ios" ? "ios-heart" : "md-heart"}
          size={14}
        />
      ) : null}
      <View>
        <Text style={styles.Location}>{data.location}</Text>
        <Text style={styles.Title}>{data.title}</Text>
        <Text style={styles.Time}>
          {Moment.unix(data.start_time).format("h:mm a")}
        </Text>
        <Text style={styles.Description}>{data.description}</Text>
      </View>
      {speakerData ? (
        <View>
          <Text style={styles.Presented}>Presented by:</Text>
          <TouchableHighlight onPress={() => goToSpeaker(speakerData)}>
            <View style={styles.SpeakerContainer}>
              <Image
                style={styles.Image}
                source={{ uri: `${speakerData.image}` }}
              />
              <Text style={styles.Name}>{speakerData.name}</Text>
            </View>
          </TouchableHighlight>
        </View>
      ) : null}
      <View style={styles.Border} />
      <View>
        <LinearGradient
          start={{ x: 0.9, y: 0 }}
          end={{ x: 0.3, y: 1.0 }}
          locations={[0, 1]}
          colors={[colors.purple, colors.blue]}
          style={styles.ButtonGradient}
        >
          {allFaves.indexOf(data.session_id) === -1 ? (
            <Text
              style={styles.Button}
              onPress={() => createFave(data.session_id)}
            >
              Add to Faves
            </Text>
          ) : (
            <Text
              style={styles.Button}
              onPress={() => deleteFave(data.session_id)}
            >
              Remove from Faves
            </Text>
          )}
        </LinearGradient>
      </View>
    </View>
  );
};

export default Session;
