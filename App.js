import React, { Component } from 'react';
import { Text, View } from 'react-native';

import LoginScreen from './components/LoginScreen';
import UserRoom from './components/UserRoom';
import { styles } from './styles/styles.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Your username',
            screen: '/login',
        };
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogin() {
        this.setState({
            screen: '/userroom',
        });
    }

    onLogout() {
        this.setState({
            screen: '/login',
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>123</Text>
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
