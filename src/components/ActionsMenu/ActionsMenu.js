import React, { Component } from 'react';
import { Text, View } from 'react-native';

import WithBrackets from '../WithBrackets/WithBrackets.js';
import { colors, getZIndex, LAYER_ACTIONS_MENU, routes } from '../../styles/constants';

export default class ActionsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <View
                style={{flex: 1}}
            >
                <Text onPress={this.props.closeActionsMenu}>
                    XXX
                </Text>
                <Text onPress={this.props.closeActionsMenu}>
                    AAAAAAAAAAAAAAAAAAAAAAAAAA
                </Text>
            </View>
        );
    }
}
