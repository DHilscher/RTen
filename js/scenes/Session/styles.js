import { StyleSheet } from "react-native";

import { typography, colors } from "../../config/styles";

export default StyleSheet.create({
  Time: {
    fontFamily: typography.fontMainReg,
    fontSize: 14,
    marginTop: 5,
    color: colors.red
  },
  Title: {
    fontFamily: typography.fontMainLight,
    marginTop: 10,
    fontSize: 20
  },
  Location: {
    fontFamily: typography.fontMainLight,
    marginTop: 12,
    fontSize: 12,
    color: colors.medGrey
  },
  SectionHeader: {
    backgroundColor: colors.lightGrey
  },
  Container: {
    width: "92%",
    alignSelf: "center",
    justifyContent: "center"
  },
  Icon: {
    position: "absolute",
    right: 5,
    top: 15,
    color: colors.red,
    zIndex: 9
  },
  Description: {
    fontFamily: typography.fontMainReg,
    marginTop: 12,
    fontSize: 12,
    color: colors.medGrey
  },
  Presented: {
    fontFamily: typography.fontMainReg,
    marginTop: 18,
    fontSize: 12,
    color: colors.medGrey
  },
  SpeakerContainer: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  Border: {
    height: 2,
    backgroundColor: colors.lightGrey
  },
  Image: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  Name: {
    fontFamily: typography.fontMainReg,
    fontSize: 12,
    color: colors.medGrey,
    marginLeft: "3%"
  },
  Button: {
    fontFamily: typography.fontMainReg,
    backgroundColor: "transparent",
    color: "white",
    alignSelf: "center",
    fontSize: 12
  },
  ButtonGradient: {
    padding: 8,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 15
  }
});
