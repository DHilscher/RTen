import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, SectionList, View } from "react-native";
import Faves from "./Faves";

import Router from "../../navigation/routes";

import { connect } from "react-redux";
import { getFaves } from "../../redux/modules/faves";
import { formatSessionData } from "../../lib/helpers";
import { getSessions } from "../../redux/modules/sessions";

class FavesContainer extends Component {
  static PropTypes = {};

  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  componentDidMount() {
    this.props.dispatch(getFaves());
    this.props.dispatch(getSessions());
  }

  render() {
    console.log(this.props);
    const {
      isLoading,
      sessionsData,
      currentNavigatorUID,
      allFaves
    } = this.props;
    let faveSessionData = [];
    faveSessionData = sessionsData.filter(session => {
      return allFaves.indexOf(session.session_id) >= 0;
    });
    if (isLoading) {
      return <ActivityIndicator animating={true} size="small" />;
    } else {
      return (
        <View>
          <Faves
            data={formatSessionData(faveSessionData)}
            currentNavigatorUID={currentNavigatorUID}
            allFaves={allFaves}
          />
        </View>
      );
    }
  }
}

FavesContainer.PropTypes = {};

const mapStateToProps = state => {
  return {
    sessionsData: state.sessions.sessions,
    isLoading: state.faves.isLoading,
    currentNavigatorUID: state.navigation.currentNavigatorUID,
    allFaves: state.faves.faves
  };
};
export default connect(mapStateToProps)(FavesContainer);
