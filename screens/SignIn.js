import React, { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, TouchableOpacity, Alert , Platform, TextInput} from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { connect } from "react-redux"
import UserActions from '../redux/actions/UserActions'
import { Button, Surface, Title, Snackbar, Subheading} from 'react-native-paper'
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function SignIn( props,{navigation} ) {

    const [user, setUser] =useState({
        username: '', 
        password: '', 
        secureText: true
    })
    const [checkInputText, setCheckInputText] = useState(false)
    const [flag, setFlag] = useState(true)
    const [visible, setVisible] = useState(false)

    const onDismissSnackBar = () => setVisible(false)

    useEffect(() => {
        (user.username !== '' & user.password !== '') && setFlag(false)
    }, [user])

    const readInput = (campo, text) => {
        if (campo === "username"){
            if (text.length === 0){
                setCheckInputText(false)
            }else{
                setCheckInputText(true)
            }
        }
        setUser({
            ...user,
            [campo]: text
        })
    }

    const secureTextEntry = () =>{
        setUser({
            ...user,
            secureText: !user.secureText
        })
    }

    useEffect(() => {
        if (props.token !== '' & user.username !== '') {
          alert(
            `Hola ${user.username}`)
        }  
    }, [props.token])

    const onPress = async e => {
        e.preventDefault()
        await props.logUser(user)
        setVisible(!visible)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.header}>
                <Text style={styles.text_header}>Bienvenido</Text>
            </View>

            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.text_footer}>Usuario</Text>
                <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    onChangeText={text => readInput('username', text)} 
                    style={styles.textInput} 
                    data-focusable="false" 
                    selectionColor="green" 
                    underlineColor="green" 
                    autoCapitalize="none"
                    placeholder="Ingresa tu usuario"
                    
                />
                {checkInputText === true ?
                    <>
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather 
                            name="check-circle"
                            color="#009387"
                            size={20}
                        />
                    </Animatable.View>
                    </>
                :null}
                </View>
                <Text style={[styles.text_footer,{
                    marginTop:35}]}>Contraseña</Text>
                <View style={styles.action}>
                <FontAwesome 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    onChangeText={text => readInput('password', text)} 
                    style={styles.textInput} 
                    data-focusable="false" 
                    selectionColor="#009387" 
                    underlineColor="#009387" 
                    autoCapitalize="none"
                    placeholder="Ingresa tu contraseña"
                    secureTextEntry={user.secureText ? true : false}
                />
                
                <TouchableOpacity
                onPress={secureTextEntry}
                >
                    <Feather 
                        name={user.secureText ?"eye-off":"eye"}
                        color="#009387"
                        size={20}
                    />
                </TouchableOpacity>  
                </View>

                <TouchableOpacity style={styles.buttonIn} onPress={onPress}>
                    <Text style={{
                            color: 'white', 
                            letterSpacing: 2, 
                            fontSize: 16, 
                            paddingHorizontal: 7, 
                            paddingVertical:10,
                            marginRight: 10, 
                            marginLeft: 10}}
                        >{visible & !flag ? 'Iniciando...' : 'Iniciar Sesión'}
                        </Text>
                    <Snackbar
                        style={{position: 'relative', bottom: 40, width: '100%'}}
                        duration={2000}
                        visible={visible}
                        onDismiss={onDismissSnackBar}
                        action={{
                            label: flag ? ':(' : ':)',
                            onPress: () => {
                            // Do something
                            },
                        }}>
                        { flag ? 'Por favor, completa todos los campos.' : 'Estamos contentos de recibirte nuevamente!' }
                    </Snackbar>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonUp} onPress={() => props.navigation.navigate("SignUpScreen")}>
                    <Text style={{
                        color: '#009387', 
                        letterSpacing: 2, 
                        fontSize: 16, 
                        paddingHorizontal: 7, 
                        paddingVertical:10,
                        marginRight: 10, 
                        marginLeft: 10}
                    }>Crear cuenta</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )

}

const mapDispatchToProps = {
    logUser: UserActions.logUser
}

const mapStateToProps = state => {
  return {
    token: state.usersRed.token
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    buttonIn: {
        alignItems: 'center',
        marginTop: 50,
        borderColor:"transparent",
        borderWidth:2,
        borderRadius:20,
        overflow:"hidden",
        backgroundColor:"#009387",
    },
    buttonUp:{
        alignItems: 'center',
        marginTop: 10,
        borderColor:"#009387",
        borderWidth:2,
        borderRadius:20,
        overflow:"hidden",
        
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
