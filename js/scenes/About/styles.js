import { StyleSheet } from "react-native";

import { typography, colors } from "../../config/styles";

export default StyleSheet.create({
  Title: {
    fontFamily: typography.fontMainReg,
    marginTop: 20,
    fontSize: 20
  },
  Text: {
    fontFamily: typography.fontMainLight,
    marginTop: 20,
    fontSize: 14
  },
  Image: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 25
  },
  Container: {
    width: "92%",
    alignSelf: "center"
  },
  Border: {
    height: 1,
    backgroundColor: colors.lightGrey
  }
});
