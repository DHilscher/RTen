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
import styles from "./styles";

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
                <Text style={styles.Title}>{item.title}</Text>
                <Text style={styles.Location}>{item.location}</Text>
                {allFaves.indexOf(item.session_id) !== -1 ? (
                  <Icon
                    style={styles.Icon}
                    name={Platform.OS == "ios" ? "ios-heart" : "md-heart"}
                    size={14}
                  />
                ) : null}
              </View>
            </TouchableHighlight>
          );
        }}
        ItemSeparatorComponent={() => (
          <View style={styles.ItemSeparatorComponent} />
        )}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.SectionHeader} key={section.session_id}>
              <Text style={styles.Date}>
                {Moment.unix(section.title).format("h:mm A")}
              </Text>
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
