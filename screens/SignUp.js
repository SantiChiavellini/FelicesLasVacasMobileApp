import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { connect } from "react-redux"
import UserActions from '../redux/actions/UserActions'
import { Button, TextInput, Surface, Title, Snackbar, Subheading  } from 'react-native-paper'
import { onChange } from "react-native-reanimated"

function SignUp( props ) {

    const [user, setUser] = useState({ 
        username: '', password: '', passwordValidation: '', mail: '', name: '', surname: '', loginGoogle:"false"
    }) 

    const [flag, setFlag] = useState(true)

    const [visible, setVisible] = React.useState(false);

    const onDismissSnackBar = () => setVisible(false);

    const readInput = (campo, text) => {
        const value = text
        setUser({
            ...user,
            [campo]: value
        })
    }

    const onPress = async e => {
        e.preventDefault()
        await props.createUser(user)
        setVisible(!visible)
    }

    useEffect(() => {
      if (user.username !== '' & user.password !== '' & user.passwordValidation !== '' & user.mail !== ''
        & user.name !== '' & user.surname !== '') {
        setFlag(false)
      }
    }, [user])

    useEffect(() => {
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
        </View>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)