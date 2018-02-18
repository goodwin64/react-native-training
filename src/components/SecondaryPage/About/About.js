import React, { Component } from "react";
import { ScrollView, Text } from "react-native";

import { colors } from "../../../styles/constants";
import commonStyles from "../../../styles/styles";
import WithBrackets from "../../WithBrackets/WithBrackets";

export default class About extends Component {
  static navigationOptions = {
    // title: 'Additional info about this app, nothing interesting here, flip further...',
    headerStyle: commonStyles.header,
    headerTintColor: colors.WHITE,
    headerTitle: <WithBrackets textInside="about" /> // TODO: add normal styles
  };

  render() {
    return (
      <ScrollView>
        <Text
          style={{
            fontSize: 32,
            color: colors.MEDIUM_GRAY,
            padding: 15
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </ScrollView>
    );
  }
}

// test changes: just to check this file will be prettier'ed and added to the commit
