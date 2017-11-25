import React, { Component } from "react";
import {
  Text,
  View,
  LayoutAnimation,
  Animated,
  Platform,
  Easing,
  TouchableWithoutFeedback
} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";

class AnimateDescription extends Component {
  constructor() {
    super();
    this.state = {
      showText: false,
      rotation: new Animated.Value(0),
      iconName: Platform.OS == "ios" ? "ios-add" : "md-add",
      duration: 500
    };
  }

  _startAnimation() {
    Animated.timing(this.state.rotation, {
      toValue: 1,
      duration: this.duration,
      easing: Easing.linear
    }).start(() => this._onPress());
  }

  _onPress = () => {
    LayoutAnimation.easeInEaseOut();
    if (!this.state.showText) {
      this.setState({ showText: true });
      this.setState({
        iconName: Platform.OS == "ios" ? "ios-remove" : "md-remove"
      });
    } else {
      this.setState({ showText: false });
      this.setState({ iconName: Platform.OS == "ios" ? "ios-add" : "md-add" });
    }
    this._resetRotation();
  };

  _resetRotation = () => {
    this.setState({ rotation: new Animated.Value(0) });
  };

  render() {
    const { data } = this.props;
    const spin = this.state.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "-180deg"],
      extrapolate: "clamp"
    });
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this._startAnimation()}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <Animated.View
              style={{
                transform: [{ rotate: spin }]
              }}
            >
              <Icon
                style={{
                  justifyContent: "center",
                  alignItems: "center"
                }}
                name={this.state.iconName}
                size={24}
                color={"purple"}
              />
            </Animated.View>
            <Text>{data.title}</Text>
          </View>
        </TouchableWithoutFeedback>
        {this.state.showText && <Text>{data.description}</Text>}
      </View>
    );
  }
}

AnimateDescription.PropTypes = {};

export default AnimateDescription;
