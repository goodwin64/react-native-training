import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import * as Progress from 'react-native-progress';

import {
    assets,
    colors,
    routes,
} from '../../styles/constants';
import UserRoomStyles from './UserRoom.styles';
import commonStyles from '../../styles/styles';

const DIFF_ON_TICK = 0.005;
// const DIFF_ON_TAP = 0.02; // TODO: add logic on tap (increase bar value)

export default class extends Component {
    static navigationOptions = {
        title: 'Your cosy room',
        headerStyle: commonStyles.header,
        headerTintColor: colors.WHITE,
        headerRight: (
            <Icon
                icon='user'
                type='font-awesome'
                color={colors.GRAY}
                size={36}
            />
        ), // FIXME: doesn't render
    };

    constructor() {
        super();
        this.state = {
            progressBars: [
                { title: 'Personal', value: 0.1 },
                { title: 'Project Activities', value: 0.5 },
                { title: 'Soft Skills', value: 0.75 },
                { title: 'Hard Skills', value: 0.6 },
            ],
        };
        this.timerId = null;
    }

    componentDidMount() {
        this.tickProgressBars();
    }

    componentWillUnmount() {
        clearTimeout(this.timerId);
    }

    tickProgressBars = () => {
        this.timerId = setTimeout(() => {
            this.setState({
                progressBars: this.state.progressBars.map(bar => ({
                    ...bar,
                    value: bar.value > DIFF_ON_TICK
                        ? bar.value - DIFF_ON_TICK
                        : 0,
                })),
            });
            this.tickProgressBars();
        }, 100);
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={UserRoomStyles.container}>
                <Image
                    style={UserRoomStyles.coderImage}
                    source={assets.IMAGE_CODER}
                />

                {
                    this.state.progressBars.map(bar => (
                        <View key={bar.title}>
                            <Text>
                                {bar.title}
                            </Text>
                            <Progress.Bar
                                progress={bar.value}
                                width={200}
                            />
                        </View>
                    ))
                }

                {/* TODO: add normal behaviour for logout button, hide back button */}
                {false &&
                <Button
                    onPress={() => navigate(routes.LOGIN_SCREEN)}
                    title="Logout"
                    accessibilityLabel="Log out"
                    color={colors.LIME_GREEN}
                    style={UserRoomStyles.logoutButton}
                />
                }

                <Button
                    onPress={() => navigate(routes.ABOUT_SCREEN)}
                    title="About"
                    accessibilityLabel="About"
                    color={colors.LIME_GREEN}
                    style={UserRoomStyles.logoutButton}
                />
            </View>
        );
    }
}
