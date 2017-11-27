import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, View } from "react-native";
import Speaker from "./Speaker";

import Router from "../../navigation/routes";

import { connect } from "react-redux";

class SpeakerContainer extends Component {
  static PropTypes = {};

  render() {
    console.log(this.props);
    const { isLoading, sessionData, speakerData } = this.props;
    if (isLoading) {
      return <ActivityIndicator animating={true} size="small" />;
    } else {
      return (
        <View>
          <Speaker speakerData={speakerData} data={sessionData} />
        </View>
      );
    }
  }
}

SpeakerContainer.PropTypes = {};

const mapStateToProps = state => {
  return {
    speakerData: state.speaker.speaker,
    isLoading: state.sessions.isLoading
  };
};
export default connect(mapStateToProps)(SpeakerContainer);
