import { StyleSheet } from 'react-native';

import { colors } from './constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        color: colors.GRAPHITE,
        fontSize: 36,
        // fontFamily: 'Oswald',
        alignSelf: 'center',
    },
    logoBracket: {
        color: colors.SHARP_BLUE,
    }
});