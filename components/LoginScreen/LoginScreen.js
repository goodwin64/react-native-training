import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Button } from 'react-native';

import WithBrackets from '../WithBrackets.js';
import { colors } from '../../styles/constants';
import LoginScreenStyles from './LoginScreen.styles';

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
        onPasswordInput: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    };

    static defaultProps = {
        onUsernameInput: () => {},
        onPasswordInput: () => {},
        username: '',
        password: '',
    };

    onUsernameInput = (username) => {
        this.props.onUsernameInput(username);
    };

    onPasswordInput = (password) => {
        this.props.onPasswordInput(password);
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
                    onSubmitEditing={(event) => {
                        this.refs.PasswordInput.focus();
                    }}
                    style={LoginScreenStyles.credentialsInput}
                />

                <TextInput
                    onChangeText={this.onPasswordInput}
                    value={this.props.password}
                    placeholder="***********"
                    placeholderTextColor={colors.LIGHT_GRAY}
                    secureTextEntry
                    ref="PasswordInput"
                    style={LoginScreenStyles.credentialsInput}
                />

                <Button
                    onPress={this.props.onLogin}
                    title="Login"
                    accessibilityLabel="Log in"
                    color={colors.LIME_GREEN}
                />

            </View>
        );
    }
}
