import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center'
        
    },
    titleText: {
        fontFamily: 'karla-regular',
        fontSize: 18,
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    buttons: {
        margin: 4,
        width: 30,
    },
    containerInputs: {
        textAlign: "center",
    },
    buttonsSend: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '50%',
        backgroundColor: 'red',
    }
})