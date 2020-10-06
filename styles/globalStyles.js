import { StyleSheet } from 'react-native'
import { linear } from 'react-native/Libraries/Animated/src/Easing'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        paddingBottom:0,
        justifyContent: 'center',
        backgroundColor:"#00544d"
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
        backgroundColor: 'white',
    },
    faq: {
        flex: 1,
    },
    firstRes: {
        maxWidth: '90%',
        textAlign: 'left',
        marginBottom:10,
        lineHeight:19,
        fontSize:15
    },
    titleFaq: {
        textAlign:"center",
        width:"100%",
        backgroundColor:"#009387",
        borderBottomColor: '#13aa52',
        paddingVertical:10,
        
        
        color: 'whitesmoke'
    },
    viewQuestion:{
        marginBottom:10,
        marginRight:20
    },
    howBuyText:{
        marginBottom:10,
        lineHeight:19,
        fontSize:15
    },
    number:{
        fontWeight:"bold"
    },
    image: {
        width: "100%",
        height: 170,
        justifyContent:"center",
        alignItems:"center",
        resizeMode: 'stretch',
      },
      title:{
       color:"white",
        fontSize: 0
      },
      logo:{
        width:140,
        height:140,
        margin: 4
      },
})