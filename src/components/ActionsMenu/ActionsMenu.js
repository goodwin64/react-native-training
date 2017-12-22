import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Row from 'react-native-row';

import WithBrackets from '../WithBrackets/WithBrackets.js';
import { colors, routes } from '../../styles/constants';


const actionMenuItems = [
    {
        title: 'Home',
        icon: {
            name: 'home',
            type: 'entypo',
        },
        url: routes.USER_ROOM_PATH,
    },
    {
        title: 'Work',
        icon: {
            name: 'briefcase',
            type: 'entypo',
        },
        url: '',
    },
    {
        title: 'ASMT',
        icon: {
            name: 'star',
            type: 'font-awesome',
        },
        url: '',
    },
    {
        title: 'Soft',
        icon: {
            name: 'ios-chatbubbles',
            type: 'ionicon',
        },
        url: '',
    },
    {
        title: 'Hard',
        icon: {
            name: 'file-code-o',
            type: 'font-awesome',
        },
        url: '',
    },
    {
        title: 'Docs',
        icon: {
            name: 'book',
            type: 'font-awesome',
        },
        url: '',
    },
];

const ACTIVE_INDEX = 1; // TODO: replace this mock with user interaction

export default class ActionsMenu extends Component {
    static propTypes = {
        username: PropTypes.string,
    };

    static defaultProps = {
        username: 'Username',
    };

    render() {
        return (
            <View
                style={{ flex: 1 }}
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
                    style={{ flexWrap: 'wrap' }}
                >
                    {actionMenuItems.map((menuItem, index) => {
                        const isActive = index === ACTIVE_INDEX;

                        return (
                            <View
                                key={menuItem.title}
                                style={{
                                    width: `${100 / 3}%`, // TODO: handle it somehow... COL-MD-3 ??
                                    alignItems: 'center',
                                    justifyContent: 'space-between', // FIXME: doesn't work
                                }}
                            >
                                <View
                                    style={{
                                        borderColor: isActive ? colors.SHARP_BLUE : colors.WHITE,
                                        borderWidth: 1,
                                        borderRadius: 50,
                                        width: 50,
                                        height: 50,
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Icon
                                        {...menuItem.icon}
                                        color={isActive ? colors.SHARP_BLUE : colors.WHITE}
                                    />
                                </View>

                                <Text
                                    style={{ color: colors.WHITE }}
                                >
                                    {menuItem.title}
                                </Text>
                            </View>
                        )
                    })
                    }
                </Row>
            </View>
        );
    }
}
