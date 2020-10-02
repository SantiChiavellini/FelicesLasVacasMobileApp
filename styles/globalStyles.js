import { StyleSheet } from 'react-native'
import { linear } from 'react-native/Libraries/Animated/src/Easing'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
        
    },
    titleText: {
        fontFamily: 'karla-regular',
        fontSize: 18,
        color: '#fff'
    },
    surface: {
        padding: 8,
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        backgroundColor: '#13aa52',
        marginBottom: 10,
        borderRadius: 20
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
        textAlign: "center",
        height: 30,
        width: '100%',
        backgroundColor: '#13aa52'
    },
    titleCrearCuenta: {
        textAlign: 'center',
        borderBottomColor: '#13aa52a2',
        borderTopColor: '#13aa52a2',
        borderTopWidth: 3,
        borderBottomWidth: 3,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10
    }
})