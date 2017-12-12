import React, { Component } from 'react';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './src/components/LoginScreen/LoginScreen';
import UserRoom from './src/components/UserRoom/UserRoom';
import { routes } from './src/styles/constants';
import About from './src/components/About/About';

const RootRouter = StackNavigator({
    [routes.LOGIN_SCREEN]: {
        name: 'Login form: authorization',
        description: 'Start screen where user inputs credentials',
        screen: LoginScreen,
        path: routes.LOGIN_PATH,
    },
    [routes.USER_ROOM_SCREEN]: {
        name: 'Main screen with user parameters',
        description: 'Starting point to main actions and other screens',
        screen: UserRoom,
        path: routes.USER_ROOM_PATH,
    },
    [routes.ABOUT_SCREEN]: {
        name: 'About the app',
        description: `Tells the purpose of this application, some credits and author's personal thanks`,
        screen: About,
        path: routes.ABOUT_PATH,
    },
});

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            screen: routes.LOGIN_PATH,
            isFontLoaded: false,
            errorMessage: null,
        };
    }

    async componentDidMount() {
        try {
            await Font.loadAsync({
                'Oswald': require('./src/assets/fonts/Oswald.ttf'),
                'Oswald-bold': require('./src/assets/fonts/Oswald-Bold.ttf'),
            });
            this.setState({
                isFontLoaded: true,
            });
        } catch (err) {
            this.setState({
                errorMessage: `Font not loaded:
                    ${JSON.stringify(err)}`,
                // isFontLoaded: true,
            });
        }
    }

    render() {
        // if (this.state.errorMessage) {
        //     return (
        //         <View style={commonStyles.appContainer}>
        //             <Text>
        //                 {this.state.errorMessage}
        //             </Text>
        //         </View>
        //     ); // TODO: add default font (system)
        // } // TODO: handle font requiring error

        return (
            <RootRouter/>
        );
    }
}
