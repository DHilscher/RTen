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
    marginTop: 10,
    fontSize: 14
  },
  Location: {
    fontFamily: typography.fontMainLight,
    marginTop: 10,
    fontSize: 10
  },
  SectionHeader: {
    backgroundColor: colors.lightGrey
  },
  AnimatedContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20
  },
  Icon: {
    position: "absolute",
    right: 15,
    bottom: 5,
    color: colors.red
  }
});
