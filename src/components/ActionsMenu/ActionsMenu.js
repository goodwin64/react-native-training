import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Row from 'react-native-row';

import WithBrackets from '../WithBrackets/WithBrackets.js';
import { colors } from '../../styles/constants';


const actionMenuItems = [
    {
        title: 'Home',
    },
    {
        title: 'Work',
    },
    {
        title: 'ASMT',
    },
    {
        title: 'Soft',
    },
    {
        title: 'Hard',
    },
    {
        title: 'Docs',
    },
];

export default class ActionsMenu extends Component {
    render() {
        return (
            <View
                style={{flex: 1}}
            >
                <Icon
                    name="ios-close-circle-outline"
                    type="ionicon"
                    size={32}
                    color={colors.WHITE}
                    onPress={this.props.closeActionsMenu}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                    }}
                />

                <WithBrackets
                    textInside={this.props.username}
                />

                <Row
                    dial={5}
                    flex
                    margin={[10, 25]}
                    style={{
                        flexWrap: 'wrap',
                    }}
                >
                    {actionMenuItems.map(menuItem => (
                        <View
                            key={menuItem.title}
                            style={{
                                width: `${100 / 3}%`,
                            }}
                        >
                            <Text
                                style={{color: colors.WHITE}}
                            >
                                {menuItem.title}
                            </Text>
                        </View>
                    ))
                    }
                </Row>
            </View>
        );
    }
}
