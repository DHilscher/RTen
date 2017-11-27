import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, View } from "react-native";
import Session from "./Session";

import Router from "../../navigation/routes";

import { connect } from "react-redux";
import { getSpeaker } from "../../redux/modules/speaker";
import { getFaves } from "../../redux/modules/faves";
import realm from "../../config/models";

class SessionContainer extends Component {
  static PropTypes = {};

  static route = {
    navigationBar: {
      title: "Session"
    }
  };

  componentDidMount() {
    realm.addListener("change", this._updateFaves);
    this.props.dispatch(getFaves());
    this.props.dispatch(getSpeaker(this.props.sessionData.speaker));
  }

  _updateFaves = () => {
    this.props.dispatch(getFaves());
  };

  render() {
    console.log(this.props);
    const {
      isLoading,
      sessionData,
      speakerData,
      currentNavigatorUID,
      allFaves
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
            allFaves={allFaves}
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
    speakerData: state.speaker.speaker,
    allFaves: state.faves.faves
  };
};
export default connect(mapStateToProps)(SessionContainer);
