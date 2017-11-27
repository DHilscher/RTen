import React from "react";
import { Text, View } from "react-native";
import SessionList from "../../components/sectionList";

const Schedule = ({ data, currentNavigatorUID, allFaves }) => {
  return (
    <SessionList
      allFaves={allFaves}
      data={data}
      currentNavigatorUID={currentNavigatorUID}
    />
  );
};
export default Schedule;
