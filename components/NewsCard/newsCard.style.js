import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 3,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    bottomContainer: {
        padding: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    description: {
        marginTop: 5,
    },
    authorName: {
        fontStyle: 'italic',
        textAlign: 'right',
    },

    authorContainer: {},
    dateContainer: {},
    dateText: {},
});