import React, { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, TouchableOpacity, Alert , Platform, TextInput} from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { connect } from "react-redux"
import UserActions from '../redux/actions/UserActions'
<<<<<<< HEAD
import { Button, TextInput, Surface, Title, Snackbar, Subheading  } from 'react-native-paper'
import { onChange } from "react-native-reanimated"
=======
import { Button,  Surface, Title, Snackbar, Subheading} from 'react-native-paper'
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
>>>>>>> 1a99ccb97ab71d8d5d6cf0665d6cba3869bb0f38

function SignIn( props,{navigation} ) {

  const [user, setUser] = useState({ 
    username: '', 
    password: '', 
    passwordValidation: '', 
    mail: '', 
    name: '', 
    surname: '', 
    loginGoogle:"false"
  }) 

  const [checkInputText, setCheckInputText] = useState(false)
  const [flag, setFlag] = useState(true)
  const [visible, setVisible] = useState(false)

  const onDismissSnackBar = () => setVisible(false)


<<<<<<< HEAD
    const readInput = (campo, text) => {
        const value = text
=======
  const readInput = (campo, text) => {
        
        setUser({
            ...user,
            [campo]: text
        })
    }

    const secureTextEntry = () =>{
>>>>>>> 1a99ccb97ab71d8d5d6cf0665d6cba3869bb0f38
        setUser({
            ...user,
            secureText: !user.secureText
        })
    }

    const onPress = async e => {
<<<<<<< HEAD
        e.preventDefault()
        await props.createUser(user)
        setVisible(!visible)
=======
      e.preventDefault()
      const res = await props.createUser(user)
      console.log(res)
      setVisible(!visible)
>>>>>>> 1a99ccb97ab71d8d5d6cf0665d6cba3869bb0f38
    }

    useEffect(() => {
      if (user.username !== '' & user.password !== '' & user.passwordValidation !== '' & user.mail !== ''
        & user.name !== '' & user.surname !== '') {
        setFlag(false)
      }
    }, [user])

    useEffect(() => {
<<<<<<< HEAD
      if (props.token & user.username !== '') {
        alert(
          `Hola ${user.username}`)
      }  
    }, [props.token])

    
  return (
    <View style={globalStyles.container}>
      <Surface style={globalStyles.surface}>
        <Subheading style={globalStyles.titleText}>Registro</Subheading>
      </Surface>
      <StatusBar style="auto" />
      <View>
        <Title style={globalStyles.titleCrearCuenta}>CREE UNA CUENTA</Title>
        <View style={globalStyles.containerInputs}>
            <TextInput onChangeText={text => readInput('username', text)} style={{height: 50, marginBottom: 20}} data-focusable="false" selectionColor="green" underlineColor="green" label="usuario" />
            <TextInput onChangeText={text => readInput('password', text)} style={{height: 50, marginBottom: 20}} underlineColor="green" label="contraseña" secureTextEntry={true} />
            <TextInput onChangeText={text => readInput('passwordValidation', text)} style={{height: 50, marginBottom: 20}} underlineColor="green" label="repita contraseña" secureTextEntry={true} />
            <TextInput onChangeText={text => readInput('mail', text)} style={{height: 50, marginBottom: 20}} underlineColor="green" label="Email" />
            <TextInput onChangeText={text => readInput('name', text)} style={{height: 50, marginBottom: 20}} underlineColor="green" label="nombre" />
            <TextInput onChangeText={text => readInput('surname', text)} style={{height: 50, marginBottom: 20}} underlineColor="green" label="apellido" />
            <TouchableOpacity style={globalStyles.buttonsSend} onPress={onPress}>
                <Text style={{color: 'white', letterSpacing: 2, fontSize: 16, padding: 7, marginRight: 10, marginLeft: 10}}>{visible & !flag ? 'Enviando...' : 'Enviar'}</Text>
                <Snackbar
                      style={{position: 'relative', bottom: 40, width: '95%'}}
                      duration={3000}
                      visible={visible}
                      onDismiss={onDismissSnackBar}
                      action={{
                        label: flag ? ':(' : ':)',
                        onPress: () => {
                          // Do something
                        },
                      }}>
                      { flag ? 'Por favor, complete todos los campos.' : 'Gracias por registrarte!' }
                </Snackbar>
            </TouchableOpacity>
=======
        if (props.token !== '' & user.username !== '') {
          alert(
            `Hola ${user.username}`)
        }  
    }, [props.token])

    

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
{/*----------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <Text style={styles.text_footer}>Nombre de usuario</Text>
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
            
                </View>
{/*----------------------------------------------------------------------------------------------------------------------------------------------------- */}                  
                <Text style={[styles.text_footer,{
                    marginTop:10}]}>Email
                </Text>   
                <View style={styles.action}>
                  <FontAwesome 
                      name="envelope-o"
                      color="#05375a"
                      size={20}
                  />
                <TextInput 
                  onChangeText={text => readInput('mail', text)} 
                  style={styles.textInput} 
                  data-focusable="false" 
                  selectionColor="green" 
                  underlineColor="green" 
                  autoCapitalize="none"
                  placeholder="Ingresa tu email"
                        
                />
            
                  </View>
{/*----------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <Text style={[styles.text_footer,{
                    marginTop:10}]}>Nombre
               </Text>                 

                  <View style={styles.action}>
                  <FontAwesome 
                      name="id-card-o"
                      color="#05375a"
                      size={20}
                  />
                <TextInput 
                  onChangeText={text => readInput('name', text)} 
                  style={styles.textInput} 
                  data-focusable="false" 
                  selectionColor="green" 
                  underlineColor="green" 
                  autoCapitalize="none"
                  placeholder="Ingresa tu usuario"
                        
                />
            
                  </View>
{/*----------------------------------------------------------------------------------------------------------------------------------------------------- */}                  
                <Text style={[styles.text_footer,{
                    marginTop:10}]}>Apellido
               </Text>
                  
                  <View style={styles.action}>
                  <FontAwesome 
                      name="id-card-o"
                      color="#05375a"
                      size={20}
                  />
                <TextInput 
                  onChangeText={text => readInput('surname', text)} 
                  style={styles.textInput} 
                  data-focusable="false" 
                  selectionColor="green" 
                  underlineColor="green" 
                  autoCapitalize="none"
                  placeholder="Ingresa tu usuario"
                        
                />
            
                  </View>
{/*----------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <Text style={[styles.text_footer,{
                    marginTop:10}]}>Contraseña
               </Text>
                
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
{/*----------------------------------------------------------------------------------------------------------------------------------------------------- */}
                  <Text style={[styles.text_footer,{
                    marginTop:10}]}>Repetir Contraseña
                  </Text>
            
                  <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        color="#05375a"
                        size={20}
                  />
                    <TextInput 
                      onChangeText={text => readInput('passwordValidation', text)} 
                      style={styles.textInput} 
                      data-focusable="false" 
                      selectionColor="#009387" 
                      underlineColor="#009387" 
                      autoCapitalize="none"
                      placeholder="Repite tu contraseña"
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
                            >{visible & !flag ? 'Creando..' : 'Crear cuenta'}
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
                    <TouchableOpacity style={styles.buttonUp} onPress={() => props.navigation.goBack()}>
                        <Text style={{
                            color: '#009387', 
                            letterSpacing: 2, 
                            fontSize: 16, 
                            paddingHorizontal: 7, 
                            paddingVertical:10,
                            marginRight: 10, 
                            marginLeft: 10}
                        }>Iniciar Sesión</Text>
                        
                    </TouchableOpacity>
                
            </Animatable.View>
>>>>>>> 1a99ccb97ab71d8d5d6cf0665d6cba3869bb0f38
        </View>
    )

}

const mapDispatchToProps = {
    createUser: UserActions.createUser
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
        flex: 5,
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
        marginTop: 20,
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
