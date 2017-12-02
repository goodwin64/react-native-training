import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class extends Component {
    render() {
        return (
            <View>
                <Text>
                    Your username: {this.props.username}
                </Text>
                <Button
                    onPress={this.props.onLogout}
                    title="Logout"
                    color="#841584"
                />
            </View>
        );
    }
}
