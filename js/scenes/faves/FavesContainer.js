import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, SectionList, View } from "react-native";
import Faves from "./Faves";

import Router from "../../navigation/routes";

import { connect } from "react-redux";
import { getFaves } from "../../redux/modules/faves";

class FavesContainer extends Component {
  static PropTypes = {};

  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  componentDidMount() {
    this.props.dispatch(getFaves());
  }

  render() {
    console.log(this.props);
    const {
      isLoading,
      sessionsData,
      currentNavigatorUID,
      allFaves
    } = this.props;

    const faveSessionData = sessionsData.filter(session => {
      return allFaves.indexOf(session.session_id) > -1;
    });
    if (isLoading) {
      return <ActivityIndicator animating={true} size="small" />;
    } else {
      return (
        <View>
          <Faves
            data={faveSessionData}
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
    isLoading: state.sessions.isLoading,
    currentNavigatorUID: state.navigation.currentNavigatorUID,
    allFaves: state.faves.faves
  };
};
export default connect(mapStateToProps)(FavesContainer);
