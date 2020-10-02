import { StyleSheet } from 'react-native'
import { linear } from 'react-native/Libraries/Animated/src/Easing'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center'
    },
    titleText: {
        fontFamily: 'karla-regular',
        fontSize: 18,
        color: '#fff',
        letterSpacing: 1
    },
    surface: {
        padding: 8,
        height: 40,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        backgroundColor: '#13aa52',
        marginBottom: 10,
        borderRadius: 20
    },
    surfaceLogIn: {
        padding: 8,
        height: 40,
        width: 180,
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
        height: 40,
        width: '80%',
        backgroundColor: '#13aa52',
        marginLeft: '10%',
        borderRadius: 5
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
    },
    containerFaq: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    faq: {
        flex: 1,
    },
    firstRes: {
        maxWidth: '90%',
        textAlign: 'justify'
    },
    titleFaq: {
        paddingLeft: 30,
        borderBottomColor: '#13aa52',
        borderBottomWidth: 2,
        width: '90%',
        marginLeft: 15,
        color: 'green'
    }
})