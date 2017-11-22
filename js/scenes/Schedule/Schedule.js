import React from "react";
import { Text, View, SectionList } from "react-native";
import PropTypes from "prop-types";
import { formatSessionData } from "../../lib/helpers";
import Moment from "moment";

const Schedule = ({ data }) => {
  console.log(data);
  let ScheduleData = data.map(item => {
    return item;
  });
  console.log(ScheduleData);
  console.log(formatSessionData(data));

  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => {
        return (
          <View key={item.session_id}>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
          </View>
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

export default Schedule;
