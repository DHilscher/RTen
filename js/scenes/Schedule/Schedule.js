import React from "react";
import { Text, View } from "react-native";
import SessionList from "../../components/sectionList";

const Schedule = ({ data, currentNavigatorUID }) => {
  return <SessionList data={data} currentNavigatorUID={currentNavigatorUID} />;
};
export default Schedule;
