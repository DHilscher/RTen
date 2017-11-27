import { StyleSheet } from "react-native";

import { typography, colors } from "../../config/styles";

export default StyleSheet.create({
  Date: {
    fontFamily: typography.fontMainReg,
    fontSize: 12,
    marginLeft: "3%",
    marginTop: 5,
    marginBottom: 5
  },
  Title: {
    fontFamily: typography.fontMainReg,
    marginLeft: "3%",
    marginTop: 10,
    fontSize: 14
  },
  Location: {
    fontFamily: typography.fontMainLight,
    marginLeft: "3%",
    marginTop: 5,
    marginBottom: 10,
    fontSize: 12,
    color: colors.medGrey
  },
  SectionHeader: {
    backgroundColor: colors.lightGrey
  },
  Icon: {
    position: "absolute",
    right: 15,
    bottom: 10,
    color: colors.red
  },
  ItemSeparatorComponent: {
    height: 2,
    backgroundColor: colors.lightGrey
  }
});
