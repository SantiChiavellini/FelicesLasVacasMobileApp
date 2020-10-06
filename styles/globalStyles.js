import { StyleSheet } from 'react-native'
import { linear } from 'react-native/Libraries/Animated/src/Easing'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
<<<<<<< HEAD
        padding: 24,
        justifyContent: 'center'
=======
        padding: 12,
        paddingBottom:0,
        justifyContent: 'center',
        backgroundColor:"#00544d"
>>>>>>> 1a99ccb97ab71d8d5d6cf0665d6cba3869bb0f38
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
<<<<<<< HEAD
        backgroundColor: 'rgba(0,0,0,0.2)',
=======
        backgroundColor: 'white',
>>>>>>> 1a99ccb97ab71d8d5d6cf0665d6cba3869bb0f38
    },
    faq: {
        flex: 1,
    },
    firstRes: {
        maxWidth: '90%',
<<<<<<< HEAD
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
=======
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
>>>>>>> 1a99ccb97ab71d8d5d6cf0665d6cba3869bb0f38
})