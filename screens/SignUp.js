import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { connect } from "react-redux"
import UserActions from '../redux/actions/UserActions'
import { Button, TextInput, Surface, Title, Snackbar, Subheading  } from 'react-native-paper'

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
        console.log(user)
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
      console.log(props)
      if (props.token) {
        alert(
          `Hola ${user.username}`)
      }  
    }, [props])
    

  return (
    <View style={globalStyles.container}>
      <Surface style={globalStyles.surface}>
        <Subheading style={globalStyles.titleText}>Registro</Subheading>
      </Surface>
      <StatusBar style="auto" />
      <View>
        <Title style={globalStyles.titleCrearCuenta}>CREA TU CUENTA</Title>
        <View style={globalStyles.containerInputs}>
            <TextInput onChangeText={text => readInput('username', text)} style={{height: 50, marginBottom: 20}} data-focusable="false" selectionColor="green" underlineColor="green" label="usuario" />
            <TextInput onChangeText={text => readInput('password', text)} style={{height: 50, marginBottom: 20}} underlineColor="green" label="contraseña" secureTextEntry={true}  />
            <TextInput onChangeText={text => readInput('passwordValidation', text)} style={{height: 50, marginBottom: 20}} underlineColor="green" label="repita contraseña" secureTextEntry={true} />
            <TextInput onChangeText={text => readInput('mail', text)} style={{height: 50, marginBottom: 20}} underlineColor="green" label="Email" />
            <TextInput onChangeText={text => readInput('name', text)} style={{height: 50, marginBottom: 20}} underlineColor="green" label="nombre" />
            <TextInput onChangeText={text => readInput('surname', text)} style={{height: 50, marginBottom: 20}} underlineColor="green" label="apellido" />
            <TouchableOpacity style={globalStyles.buttonsSend} onPress={onPress}>
                <Text>{visible & !flag ? 'Enviando...' : 'ENVIAR'}</Text>
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
                      { flag ? 'Por favor, completa todos los campos.' : 'Gracias por registrarte!' }
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