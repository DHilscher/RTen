import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, View } from "react-native";
import Session from "./Session";

import Router from "../../navigation/routes";

import { connect } from "react-redux";
import { getSpeaker } from "../../redux/modules/speaker";

class SessionContainer extends Component {
  static PropTypes = {};

  static route = {
    navigationBar: {
      title: "Session"
    }
  };

  componentDidMount() {
    this.props.dispatch(getSpeaker(this.props.sessionData.speaker));
  }

  render() {
    console.log(this.props);
    const {
      isLoading,
      sessionData,
      speakerData,
      currentNavigatorUID
    } = this.props;
    if (isLoading) {
      return <ActivityIndicator animating={true} size="small" />;
    } else {
      return (
        <View>
          <Session
            currentNavigatorUID={currentNavigatorUID}
            speakerData={speakerData}
            data={sessionData}
          />
        </View>
      );
    }
  }
}

SessionContainer.PropTypes = {};

const mapStateToProps = state => {
  return {
    isLoading: state.sessions.isLoading,
    speakerData: state.speaker.speaker
  };
};
export default connect(mapStateToProps)(SessionContainer);
