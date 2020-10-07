import React, { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, TouchableOpacity, Alert , Platform, TextInput} from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { connect } from "react-redux"
import UserActions from '../redux/actions/UserActions'
import { Button,  Surface, Title, Snackbar, Subheading} from 'react-native-paper'
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { showMessage, hideMessage } from "react-native-flash-message";

function SignIn( props,{navigation} ) {

  const [user, setUser] = useState({ 
    username: '', 
    password: '', 
    passwordValidation: '', 
    mail: '', 
    name: '', 
    surname: '', 
    vusername: true, 
    vpassword: false, 
    vpasswordValidation: true, 
    vmail: true, 
    vname: true, 
    vsurname: true,
    correct: false, 
    vloginGoogle:"false"
  }) 

  


  const [checkInputText, setCheckInputText] = useState(false)
  const [flag, setFlag] = useState(true)
  const [visible, setVisible] = useState(false)

  const onDismissSnackBar = () => setVisible(false)


const handleUsername = (val) =>{
  console.log(val)
  if (val.trim().length < 3){
    setUser({
      ...user,
      vusername:false
    })
  }else{
    setUser({
      ...user,
      vusername:true
    })
  }
}
const handleName = (val) =>{
  if (val.trim().length < 3){
    setUser({
      ...user,
      vname:false
    })
  }else{
    setUser({
      ...user,
      vname:true
    })
  }
}
const handleSurname = (val) =>{
  if (val.trim().length < 3){
    setUser({
      ...user,
      vsurname:false
    })
  }else{
    setUser({
      ...user,
      vsurname:true
    })
  }
}
const handleEmail = (val) =>{

    const validEmailRegex = RegExp( 	
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


  if (!validEmailRegex.test(val)){
    setUser({
      ...user,
      vmail:false
    })
  }else{
    setUser({
      ...user,
      vmail:true
    })
  }
}
const handlePassword = (val) =>{
  const validPassword = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/)
  if (!validPassword.test(val)){
    setUser({
      ...user,
      vpassword:false
    })
  }else{
    setUser({
      ...user,
      vpassword:true
    })
  }
}
const handlePasswordVal = (val, pass) =>{
 
  console.log(val, pass)
  if (val === pass){
    setUser({
      ...user,
      vpasswordValidation:true
    })
  }else{
    setUser({
      ...user,
      vpasswordValidation:false
    })
  }
}



  const readInput = (campo, text) => {
        
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

    const onPress = async e => {
      e.preventDefault()
        
        
        

        if (user.vusername === true && user.vpasswordValidation === true && user.vpassword === true && user.vname=== true && user.vsurname=== true && user.vmail=== true ){
          
          await props.createUser(user)
          showMessage({
            message: "Cuenta creada",
            type: "info",
            animationDuration:400,
            icon: "success",
            backgroundColor: "green",
            position:"top"
          })
        }
        
      
      setVisible(!visible)
    }

    

    useEffect(() => {
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
                  onEndEditing={e => handleUsername(e.nativeEvent.text)}
                  style={styles.textInput} 
                  data-focusable="false" 
                  selectionColor="green" 
                  underlineColor="green" 
                  autoCapitalize="none"
                  placeholder="Ingresa tu usuario"
                        
                />
            
                </View>


                {user.vusername
                    ? null
                    :
                    <Animatable.View
                    animation="fadeInLeft"
                    duration={600}
                    >
                   <Text style={styles.errorMsg}>{"El usuario debe tener al menos 3 caracteres"}</Text>
                    </Animatable.View>
                  }
                
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
                  onEndEditing={e => handleEmail(e.nativeEvent.text)}
                  style={styles.textInput} 
                  data-focusable="false" 
                  selectionColor="green" 
                  underlineColor="green" 
                  autoCapitalize="none"
                  placeholder="Ingresa tu email"
                        
                />

                  </View>


                  {user.vmail
                    ? null
                    :
                    <Animatable.View
                    animation="fadeInLeft"
                    duration={600}
                    >
                     <Text style={styles.errorMsg}>{"Ingrese un email correcto"}</Text>
                    </Animatable.View>
                  }

                 
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
                  onEndEditing={e => handleName(e.nativeEvent.text)}
                  style={styles.textInput} 
                  data-focusable="false" 
                  selectionColor="green" 
                  underlineColor="green" 
                  autoCapitalize="none"
                  placeholder="Ingresa tu usuario"
                        
                />
            
                  </View>

                  {user.vname
                    ? null
                    :
                    <Animatable.View
                    animation="fadeInLeft"
                    duration={600}
                    >
                    <Text style={styles.errorMsg}>{"El nombre debe tener al menos 3 caracteres"}</Text>
                    </Animatable.View>
                  }
                  
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
                  onEndEditing={e => handleSurname(e.nativeEvent.text)}
                  style={styles.textInput} 
                  data-focusable="false" 
                  selectionColor="green" 
                  underlineColor="green" 
                  autoCapitalize="none"
                  placeholder="Ingresa tu usuario"
                        
                />
            
                  </View>

                  {user.vsurname
                    ? null
                    :
                    <Animatable.View
                    animation="fadeInLeft"
                    duration={600}
                    >
                    <Text style={styles.errorMsg}>{"El apellido debe tener al menos 3 caracteres"}</Text>
                    </Animatable.View>
                  }
                  
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
                      onEndEditing={e => handlePassword(e.nativeEvent.text)}
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
                    
                    {user.vpassword
                    ? null
                    :
                    <Animatable.View
                    animation="fadeInLeft"
                    duration={600}
                    >
                    <Text style={styles.errorMsg}>{"La contraseña debe incluir números, mayúsculas y minúsculas"}</Text>
                    </Animatable.View>
                    }


                    
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
                      onEndEditing={e => handlePasswordVal(e.nativeEvent.text, user.password)}
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
                    {user.vpasswordValidation
                    ? null
                    :
                    <Animatable.View
                    animation="fadeInLeft"
                    duration={600}
                    >
                    <Text style={styles.errorMsg}>{"Las contraseñas no coinciden"}</Text>
                    </Animatable.View>
                    }
                    


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
