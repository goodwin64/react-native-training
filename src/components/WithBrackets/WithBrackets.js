import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from '../../styles/styles.js';

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
                <Text style={styles.logoText}>
                    <Text style={styles.logoBracket}>
                        {'<'}
                    </Text>
                    {this.props.textInside}
                    <Text style={styles.logoBracket}>
                        {'>'}
                    </Text>
                </Text>
            </View>
        );
    }
}