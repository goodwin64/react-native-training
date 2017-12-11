import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Progress from 'react-native-progress';

import {
    assets,
    colors,
} from '../../styles/constants';
import UserRoomStyles from './UserRoom.styles';
import commonStyles from '../../styles/styles';

const DIFF_ON_TICK = 0.005;
// const DIFF_ON_TAP = 0.02; // TODO: add logic on tap (increase bar value)

export default class extends Component {
    static navigationOptions = {
        title: 'Your cosy room',
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
        return (
            <View style={UserRoomStyles.container}>
                <Header
                    centerComponent={{ text: 'epamer', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'user', type: 'font-awesome', color: colors.GRAY }}
                    outerContainerStyles={commonStyles.header}
                />

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

                <Button
                    onPress={this.props.onLogout}
                    title="Logout"
                    accessibilityLabel="Log out"
                    color={colors.LIME_GREEN}
                    style={UserRoomStyles.logoutButton}
                />

                <Button
                    onPress={this.props.visitAboutPage}
                    title="About"
                    accessibilityLabel="About"
                    color={colors.LIME_GREEN}
                    style={UserRoomStyles.logoutButton}
                />
            </View>
        );
    }
}
