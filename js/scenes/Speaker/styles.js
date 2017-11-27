import { StyleSheet } from "react-native";

import { typography, colors } from "../../config/styles";

export default StyleSheet.create({
  Title: {
    fontFamily: typography.fontMainLight,
    marginTop: 10,
    fontSize: 20
  },
  SpeakerHeader: {
    flexDirection: "row"
  },
  AboutSpeaker: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center"
  },
  Icon: {
    justifyContent: "flex-start"
  },
  Container: {
    backgroundColor: "black",
    height: "100%"
  },

  Description: {
    fontFamily: typography.fontMainReg,
    marginTop: 12,
    fontSize: 12,
    color: colors.medGrey
  },

  Image: {
    width: 100,
    height: 100,
    borderRadius: 50
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
