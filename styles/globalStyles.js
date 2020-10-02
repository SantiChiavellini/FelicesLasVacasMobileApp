import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
        
    },
    titleText: {
        fontFamily: 'karla-regular',
        fontSize: 18,
        color: 'black',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    buttons: {
        margin: 4,
        width: 30,

    }
})