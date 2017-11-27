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
  SpeakerInfoContainer: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "95%",
    height: "100%",
    backgroundColor: "white"
  },
  Icon: {
    justifyContent: "flex-start"
  },
  Container: {
    backgroundColor: "black",
    height: "100%"
  },

  Bio: {
    fontFamily: typography.fontMainLight,
    marginTop: 25,
    fontSize: 18
  },

  Image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginTop: 25
  },
  Name: {
    fontFamily: typography.fontMainReg,
    fontSize: 25,
    marginTop: 25
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
