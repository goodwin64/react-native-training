import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Header,
    Icon,
} from 'react-native-elements';

import { colors } from '../../styles/constants';
import commonStyles from '../../styles/styles';

class BackButton extends Component {
    render() {
        return (
            <View>
                <Icon
                    onPress={this.props.onBack}
                    icon='angle-left'
                    type='font-awesome'
                    color={colors.WHITE}
                    size={36}
                />
            </View>
        );
    }
}

export default class About extends Component {
    render() {
        return (
            <View>
                <Header
                    leftComponent={
                        <BackButton onBack={this.props.onBack}/> // FIXME: find root cause why it doesn't render
                    }
                    // leftComponent={{
                    //     icon: 'angle-left',
                    //     type: 'font-awesome',
                    //     color: colors.WHITE
                    // }}
                    centerComponent={{
                        text: 'about',
                        style: { color: colors.WHITE },
                    }}
                    outerContainerStyles={commonStyles.header}
                />
            </View>
        );
    }
}
