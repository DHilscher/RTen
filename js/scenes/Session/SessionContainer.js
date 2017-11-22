import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, View } from "react-native";
import Session from "./Session";

import Router from "../../navigation/routes";

import { connect } from "react-redux";

class SessionContainer extends Component {
  static PropTypes = {};

  static route = {
    navigationBar: {
      title: "Session"
    }
  };

  render() {
    console.log(this.props);
    const { isLoading, sessionData } = this.props;
    if (isLoading) {
      return <ActivityIndicator animating={true} size="small" />;
    } else {
      return (
        <View>
          <Session data={sessionData} />
        </View>
      );
    }
  }
}

SessionContainer.PropTypes = {};

const mapStateToProps = state => {
  return {
    // sessionData: state.sessions.sessions,
    isLoading: state.sessions.isLoading
  };
};
export default connect(mapStateToProps)(SessionContainer);
