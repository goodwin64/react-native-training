import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Button } from 'react-native';

import WithBrackets from './WithBrackets.js';
import { colors } from '../styles/constants';

class Logo extends Component {
    render() {
        return (
            <View>
                <WithBrackets
                    textInside="epamer"
                />
            </View>
        );
    }
}

export default class LoginScreen extends Component {
    static propTypes = {
        onUsernameInput: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired,
    };

    static defaultProps = {
        onUsernameInput: () => {},
        username: '',
    };

    onUsernameInput = (username) => {
        this.props.onUsernameInput(username);
    };

    render() {
        return (
            <View>
                <Logo />

                <TextInput
                    onChangeText={this.onUsernameInput}
                    value={this.props.username}
                    placeholder="Username"
                    placeholderTextColor={colors.LIGHT_GRAY}
                />

                <TextInput
                    onChangeText={this.onUsernameInput}
                    value={this.props.username}
                    placeholder="***********"
                    placeholderTextColor={colors.LIGHT_GRAY}
                    secureTextEntry
                />

                <Button onPress={this.props.onLogin} title="Login" color="#841584" />

            </View>
        );
    }
}
