import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, View } from "react-native";
import Speaker from "./Speaker";

import Router from "../../navigation/routes";

import { connect } from "react-redux";

class SpeakerContainer extends Component {
  static PropTypes = {};

  static route = {
    navigationBar: {
      title: "Speaker"
    }
  };

  render() {
    console.log(this.props);
<<<<<<< HEAD
    const { isLoading, sessionData, speakerData } = this.props;
=======
    const { isLoading, sessionData } = this.props;
>>>>>>> 118624b33473d712829e81e6170ff2284bba5dec
    if (isLoading) {
      return <ActivityIndicator animating={true} size="small" />;
    } else {
      return (
        <View>
<<<<<<< HEAD
          <Speaker speakerData={speakerData} data={sessionData} />
=======
          <Speaker data={sessionData} />
>>>>>>> 118624b33473d712829e81e6170ff2284bba5dec
        </View>
      );
    }
  }
}

SpeakerContainer.PropTypes = {};

const mapStateToProps = state => {
  return {
<<<<<<< HEAD
    speakerData: state.speaker.speaker,
=======
    // sessionData: state.sessions.sessions,
>>>>>>> 118624b33473d712829e81e6170ff2284bba5dec
    isLoading: state.sessions.isLoading
  };
};
export default connect(mapStateToProps)(SpeakerContainer);
