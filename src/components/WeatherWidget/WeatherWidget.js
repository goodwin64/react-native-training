import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { colors } from "../../styles/constants";
import commonStyles from "../../styles/styles";

export default class Weather extends Component {
    static navigationOptions = {
        headerStyle: commonStyles.header,
        headerTintColor: colors.WHITE,
        headerTitle: 'Weather',
    };

    render() {
        return (
            <View>
                <Text>
                    Weather: {1 + 9}
                </Text>
            </View>
        );
    }
}