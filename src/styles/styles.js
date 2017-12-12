import { StyleSheet } from 'react-native';

import { colors } from './constants';

export default StyleSheet.create({
    appContainer: {
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
    },
    header: {
        backgroundColor: colors.DARK,
        alignSelf: 'stretch',
    },
});
