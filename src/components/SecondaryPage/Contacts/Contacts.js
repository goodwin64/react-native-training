import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { colors } from '../../../styles/constants';
import commonStyles from '../../../styles/styles';
import WithBrackets from "../../WithBrackets/WithBrackets";

const contactTextStyle = {
    fontSize: 28,
    color: colors.MEDIUM_GRAY,
    padding: 15,
};

export default class Contacts extends Component {
    static navigationOptions = {
        headerStyle: commonStyles.header,
        headerTintColor: colors.WHITE,
        headerTitle: <WithBrackets textInside="contacts"/>, // TODO: add normal styles
    };

    render() {
        return (
            <View>
                <Text style={contactTextStyle}>
                    github: goodwin64
                </Text>

                <Text style={contactTextStyle}>
                    vk: 20693334
                </Text>

                <Text style={contactTextStyle}>
                    epam: Maksym Donchenko
                </Text>
            </View>
        );
    }
}
