import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Font } from 'expo';

import LoginScreen from './components/LoginScreen';
import UserRoom from './components/UserRoom';
import { styles } from './styles/styles.js';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            username: 'Your username',
            screen: '/login',
            isFontLoaded: false,
            errorMessage: null,
        };
    }

    async componentDidMount() {
        Font.loadAsync({
            'Oswald': require('./assets/fonts/Oswald.ttf'),
            'Oswald-bold': require('./assets/fonts/Oswald-Bold.ttf'),
        }).then(() => {
            this.setState({
                isFontLoaded: true,
            });
        }).catch((err) => {
            this.setState({
                // errorMessage: `Font not loaded:
                //     ${JSON.stringify(err)}`,
                isFontLoaded: true,
            });
        });
    }

    onLogin = () => {
        this.setState({
            screen: '/userroom',
        });
    };

    onLogout = () => {
        this.setState({
            screen: '/login',
        });
    };

    render() {
        if (this.state.errorMessage) {
            return (
                <View style={styles.container}>
                    <Text>
                        {this.state.errorMessage}
                    </Text>
                </View>
            ); // TODO: add default font (system)
        }

        return (
            <View style={styles.container}>
                {
                    <Text>
                        {this.state.screen}
                    </Text>
                }
                {
                    this.state.screen === '/login' &&
                    <LoginScreen
                        username={this.state.username}
                        onUsernameInput={username => this.setState({ username })}
                        onLogin={this.onLogin}
                    />
                }
                {
                    this.state.screen === '/userroom' &&
                    <UserRoom
                        username={this.state.username}
                        onLogout={this.onLogout}
                    />
                }
            </View>
        );
    }
}
