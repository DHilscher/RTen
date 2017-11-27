import { StyleSheet } from "react-native";

import { typography, colors } from "../../config/styles";

export default StyleSheet.create({
  Title: {
    fontFamily: typography.fontMainReg,
    fontSize: 14,
    color: colors.purple,
    marginLeft: "3%"
  },
  Description: {
    fontFamily: typography.fontMainLight,
    marginTop: 20,
    fontSize: 14
  },
  Icon: {
    color: colors.purple,
    justifyContent: "center",
    alignSelf: "center"
  },
  AnimatedContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20
  }
});
