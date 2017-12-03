import { StyleSheet } from 'react-native';

import { colors } from '../../styles/constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.LIGHT_GRAY,
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    header: {
        flex: 0.05,
        backgroundColor: '#111',
        paddingTop: 25,
        // alignSelf: 'stretch',
    },
});