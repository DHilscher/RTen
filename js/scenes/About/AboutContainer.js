import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, ScrollView } from "react-native";
import About from "./About";

import Router from "../../navigation/routes";

import { getCoc } from "../../redux/modules/conduct";
import { connect } from "react-redux";

class AboutContainer extends Component {
  static PropTypes = {};

  static route = {
    navigationBar: {
      title: "About"
    }
  };

  componentDidMount() {
    this.props.dispatch(getCoc());
  }

  render() {
    console.log(this.props);
    const { isLoading, conductData } = this.props;
    if (isLoading) {
      return <ActivityIndicator animating={true} size="small" />;
    } else {
      return (
        <ScrollView>
          <About data={conductData} />
        </ScrollView>
      );
    }
  }
}

AboutContainer.PropTypes = {};

const mapStateToProps = state => {
  return {
    conductData: state.CodeOfConduct.codeOfConduct,
    isLoading: state.CodeOfConduct.isLoading
  };
};
export default connect(mapStateToProps)(AboutContainer);
