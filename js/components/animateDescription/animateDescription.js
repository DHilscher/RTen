import React, { Component } from "react";
import { Text, View, LayoutAnimation } from "react-native";
import PropTypes from "prop-types";

class AnimateDescription extends Component {
  constructor() {
    super();
    this.state = {
      showText: false
    };
  }

  onPress = () => {
    LayoutAnimation.easeInEaseOut();
    if (this.state.showText === false) {
      this.setState({ showText: true });
    } else {
      this.setState({ showText: false });
    }
  };
  render() {
    const { data } = this.props;
    return (
      <View>
        <Text onPress={this.onPress}>{data.title}</Text>
        {this.state.showText && <Text>{data.description}</Text>}
      </View>
    );
  }
}

AnimateDescription.PropTypes = {};

export default AnimateDescription;
