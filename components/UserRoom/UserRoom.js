import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Header } from 'react-native-elements';

import { colors } from '../../styles/constants';
import UserRoomStyles from './UserRoom.styles';

export default class extends Component {
    render() {
        return (
            <View style={UserRoomStyles.container}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'epamer', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    outerContainerStyles={UserRoomStyles.header}
                />

                <Text>
                    Your username: {this.props.username}
                </Text>
                <Button
                    onPress={this.props.onLogout}
                    title="Logout"
                    accessibilityLabel="Log out"
                    color={colors.LIME_GREEN}
                />
            </View>
        );
    }
}
