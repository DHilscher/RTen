import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
  Platform
} from "react-native";
import PropTypes from "prop-types";
import { goToSpeaker } from "../../lib/navigationHelpers";
import Moment from "moment";
import { createFave, deleteFave } from "../../config/models";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const Session = ({ data, speakerData, allFaves }) => {
  console.log(speakerData);

  return (
    <View>
      <View key={data.session_id}>
        {allFaves.indexOf(data.session_id) !== -1 ? (
          <Icon
            style={styles.Icon}
            name={Platform.OS == "ios" ? "ios-heart" : "md-heart"}
            size={14}
          />
        ) : null}
        <Text>{data.location}</Text>
        <Text>{data.title}</Text>
        <Text>{Moment.unix(data.start_time).format("h:mm a")}</Text>
        {speakerData ? (
          <TouchableHighlight onPress={() => goToSpeaker(speakerData)}>
            <View>
              <Image
                style={{ height: 75, width: 75, borderRadius: 37.5 }}
                source={{ uri: `${speakerData.image}` }}
              />
              <Text>{speakerData.name}</Text>
            </View>
          </TouchableHighlight>
        ) : null}
      </View>
      {allFaves.indexOf(data.session_id) === -1 ? (
        <Button
          title="addToFaves"
          onPress={() => createFave(data.session_id)}
        />
      ) : (
        <Button
          title="deleteFromFaves"
          onPress={() => deleteFave(data.session_id)}
        />
      )}
    </View>
  );
};

export default Session;
