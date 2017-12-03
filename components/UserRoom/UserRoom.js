import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { Header } from 'react-native-elements';

import {
    assets,
    colors,
} from '../../styles/constants';
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

                <Image
                    style={UserRoomStyles.coderImage}
                    source={assets.IMAGE_CODER}
                />

                <Button
                    onPress={this.props.onLogout}
                    title="Logout"
                    accessibilityLabel="Log out"
                    color={colors.LIME_GREEN}
                    style={UserRoomStyles.logoutButton}
                />
            </View>
        );
    }
}
