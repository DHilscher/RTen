import React from "react";
import {
  Text,
  View,
  SectionList,
  TouchableHighlight,
  Platform,
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import { goToSession } from "../../lib/navigationHelpers";
import Moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

const SessionList = ({ data, currentNavigatorUID, allFaves }) => {
  if (data.length > 0) {
    return (
      <SectionList
        sections={data}
        renderItem={({ item }) => {
          return (
            <TouchableHighlight
              onPress={() => goToSession(currentNavigatorUID, item)}
            >
              <View key={item.session_id}>
                <Text>{item.title}</Text>
                <Text>{item.location}</Text>
                <View>
                  {!allFaves.indexOf(item.session_id) ? (
                    <Icon
                      name={Platform.OS == "ios" ? "ios-heart" : "md-heart"}
                      size={24}
                      color={"red"}
                    />
                  ) : null}
                </View>
              </View>
            </TouchableHighlight>
          );
        }}
        renderSectionHeader={({ section }) => {
          return (
            <View key={section.session_id}>
              <Text>{Moment.unix(section.title).format("h:mm a")}</Text>
            </View>
          );
        }}
      />
    );
  } else if (currentNavigatorUID === "faves") {
    return (
      <View>
        <Text>Please add some events to favourites</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>There is currently no scheduled events</Text>
      </View>
    );
  }
};

export default SessionList;
