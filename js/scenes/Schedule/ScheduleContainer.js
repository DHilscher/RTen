import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, SectionList, View } from "react-native";
import Schedule from "./Schedule";

import Router from "../../navigation/routes";

import { getSessions } from "../../redux/modules/sessions";
import { connect } from "react-redux";

class ScheduleContainer extends Component {
  static PropTypes = {};

  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  componentDidMount() {
    this.props.dispatch(getSessions());
  }

  render() {
    console.log(this.props);
    const { isLoading, sessionsData } = this.props;
    if (isLoading) {
      return <ActivityIndicator animating={true} size="small" />;
    } else {
      return (
        <View>
          <Schedule data={sessionsData} />
        </View>
      );
    }
  }
}

ScheduleContainer.PropTypes = {};

const mapStateToProps = state => {
  return {
    sessionsData: state.sessions.sessions,
    isLoading: state.sessions.isLoading
  };
};
export default connect(mapStateToProps)(ScheduleContainer);
