import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import { SocialIcon } from 'react-native-elements';

import WithBrackets from '../WithBrackets/WithBrackets.js';
import { colors, routes } from '../../styles/constants';
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
    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            username: '',
            // username: String(Math.random().toFixed(5)), // DEV MODE
            password: '',
        };
    }

    onLoginPress = () => {
        const { username } = this.state;
        if (username && username !== 'con') { // Easter Egg ^^,
            this.props.navigation.navigate(routes.USER_ROOM_SCREEN, {
                username,
            });
        }
    };

    render() {
        return (
            <View style={LoginScreenStyles.container}>
                <Logo/>

                <TextInput
                    onChangeText={username => this.setState({ username })}
                    value={this.state.username}
                    placeholder="Username"
                    placeholderTextColor={colors.LIGHT_GRAY}
                    onSubmitEditing={(event) => {
                        this.refs.PasswordInput.focus();
                    }}
                    style={LoginScreenStyles.credentialsInput}
                />

                <TextInput
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    placeholder="***********"
                    placeholderTextColor={colors.LIGHT_GRAY}
                    secureTextEntry
                    ref="PasswordInput"
                    style={LoginScreenStyles.credentialsInput}
                />

                <Button
                    onPress={this.onLoginPress}
                    title="Login"
                    accessibilityLabel="Log in"
                    color={colors.LIME_GREEN}
                />

                {/* TODO: add behaviour on 3rd party services linking */}
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                />
            </View>
        );
    }
}
