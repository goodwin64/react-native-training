import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import commonStyles from '../../styles/styles.js';

export default class WithBrackets extends Component {
    static propTypes = {
        textInside: PropTypes.string.isRequired,
    };

    static defaultProps = {
      styles: {
        logoBracket: {},
      },
    };

    render() {
        return (
            <View>
                <Text style={commonStyles.logoText}>
                    <Text style={commonStyles.logoBracket}>
                        {'<'}
                    </Text>
                    {this.props.textInside}
                    <Text style={commonStyles.logoBracket}>
                        {'>'}
                    </Text>
                </Text>
            </View>
        );
    }
}