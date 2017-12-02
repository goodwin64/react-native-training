import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

import WithBrackets from './WithBrackets.js';

class Logo extends Component {
    render() {
        return (
            <View>
                <WithBrackets
                    textInside="epamer2"
                />
            </View>
        );
    }
}

export default class LoginScreen extends Component {
    render() {
        return (
            <View>
                <Text>{typeof this.props.onLogin}</Text>
                <Logo />

                <TextInput
                    style={{ backgroundColor: '#888' }}
                    onChangeText={username => this.props.onUsernameInput(username)}
                    value={this.props.username}
                />
                <Button onPress={this.props.onLogin} title="Login" color="#841584" />

            </View>
        );
    }
}
