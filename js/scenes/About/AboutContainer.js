import React, { Component } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator } from "react-native";
import About from "./About";

import Router from "../../navigation/routes";

class AboutContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true
    };
  }
  static PropTypes = {};

  static route = {
    navigationBar: {
      title: "About"
    }
  };

  componentDidMount() {
    let codeOfConduct =
      "https://r10app-95fea.firebaseio.com/code_of_conduct.json";
    fetch(codeOfConduct)
      // if fetch is successful, read our JSON out of the response
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
  componentDidUpdate() {
    if (this.state.data && this.state.isLoading) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    console.log(this.state.data);
    if (this.state.isLoading) {
      return <ActivityIndicator animating={true} size="small" />;
    } else {
      return <About data={this.state.data} />;
    }
  }
}

AboutContainer.PropTypes = {};

export default AboutContainer;
