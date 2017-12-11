import React, { Component } from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { Font } from 'expo';
import {SafeAreaView, StackNavigator, TabNavigator} from 'react-navigation';

import LoginScreen from './src/components/LoginScreen/LoginScreen';
import UserRoom from './src/components/UserRoom/UserRoom';
import commonStyles from './src/styles/styles.js';
import { routes } from './src/styles/constants';
import userRoomStyles from './src/components/UserRoom/UserRoom.styles';
import About from './src/components/About/About';

const Routes = {
    Login: {
        name: 'Login form: authorization',
        description: 'Start screen where user inputs credentials',
        screen: LoginScreen,
    },
    UserRoom: {
        name: 'Main screen with user parameters',
        description: 'Starting point to main actions and other screens',
        screen: UserRoom,
    },
    About: {
        name: 'About the app',
        description: `Tells the purpose of this application, some credits and author's personal thanks`,
        screen: About,
    },
};

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            screen: routes.LOGIN_SCREEN,
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
        } catch(err) {
            this.setState({
                errorMessage: `Font not loaded:
                    ${JSON.stringify(err)}`,
                // isFontLoaded: true,
            });
        }
    }

    onLogin = () => {
        this.setState({
            screen: routes.USER_ROOM,
        });
    };

    onLogout = () => {
        this.setState({
            screen: routes.LOGIN_SCREEN,
        });
    };

    visitAboutPage = () => {
        // this.setState({
        //     screen: routes.ABOUT,
        // });
        this.props.navigate(routes.ABOUT);
    };

    renderContent() {
        switch (this.state.screen) {
            case routes.LOGIN_SCREEN: {
                return (
                    <LoginScreen
                        username={this.state.username}
                        password={this.state.password}
                        onUsernameInput={username => this.setState({ username })}
                        onPasswordInput={password => this.setState({ password })}
                        onLogin={this.onLogin}
                    />
                );
            }
            case routes.USER_ROOM: {
                return (
                    <UserRoom
                        username={this.state.username}
                        onLogout={this.onLogout}
                        visitAboutPage={this.visitAboutPage}
                    />
                );
            }
            case routes.ABOUT: {
                return (
                    <View style={commonStyles.appContainer}>
                        <About
                            onBack={this.onLogin}
                        />
                    </View>
                );
            }
            default: {
                return (
                    <View style={commonStyles.appContainer}>
                        <Text>
                            Screen: "{this.state.screen}"
                        </Text>
                    </View>
                );
            }
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

        const containerStyles = [
            commonStyles.appContainer
        ].concat(this.state.screen === routes.USER_ROOM
            ? [userRoomStyles.container]
            : []
        ); // Stylesheet doesn't work well with spread

        return (
            <View style={containerStyles}>
                {this.renderContent()}
            </View>
        );

        // return (
        //     <ScrollView
        //         style={{ flex: 1 }}
        //         contentInsetAdjustmentBehavior="automatic"
        //     >
        //         {Object.keys(Routes).map((routeName) => (
        //             <TouchableOpacity
        //                 key={routeName}
        //                 onPress={() => {
        //                     const { path, params, screen } = Routes[routeName];
        //                     const { router } = screen;
        //                     const action = path && router.getActionForPathAndParams(path, params);
        //                     this.props.navigation.navigate(routeName, {}, action);
        //                 }}
        //             >
        //                 <SafeAreaView
        //                     forceInset={{ vertical: 'never' }}
        //                 >
        //                     <View>
        //                         <Text>{Routes[routeName].name}</Text>
        //                         <Text>{Routes[routeName].description}</Text>
        //                     </View>
        //                 </SafeAreaView>
        //             </TouchableOpacity>
        //         ))}
        //     </ScrollView>
        // );
    }
}
