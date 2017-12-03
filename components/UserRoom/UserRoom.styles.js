import { StyleSheet } from 'react-native';

import { colors } from '../../styles/constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: colors.LIGHT_GRAY,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 50,
    },
    header: {
        backgroundColor: '#111',
        paddingTop: 25,
        paddingLeft: 125,
        paddingRight: 125,
        alignSelf: 'stretch',
    },
    coderImage: {
        flex: 1,
        resizeMode: 'contain',
        margin: 75,
    },
    logoutButton: {
        alignSelf: 'center',
    },
});