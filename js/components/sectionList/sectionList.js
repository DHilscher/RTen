import React from "react";
import { Text, View, SectionList, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import { goToSession } from "../../lib/helpers";
import Moment from "moment";

const SessionList = ({ data, currentNavigatorUID }) => {
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
};

export default SessionList;
