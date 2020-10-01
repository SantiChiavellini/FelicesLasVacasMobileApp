import React, { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { connect } from "react-redux"
import UserActions from '../redux/actions/UserActions'
import { Button, TextInput, Surface, Title, Snackbar, Subheading  } from 'react-native-paper'


function SignIn( props ) {

    const [user, setUser] =useState({
        username: '', password: '',
    })

    const [flag, setFlag] = useState(true)

    const [visible, setVisible] = useState(false)

    const onDismissSnackBar = () => setVisible(false)

    useEffect(() => {
        (user.username !== '' & user.password !== '') && setFlag(false)
    }, [user])

    const readInput = (campo, text) => {
        setUser({
            ...user,
            [campo]: text
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
        <View style={globalStyles.container}>
            <Surface style={globalStyles.surfaceLogIn}>
                <Subheading style={globalStyles.titleText}>Inicar Sesión</Subheading>
            </Surface>
            <StatusBar style="auto" />
            <View>
                <Title style={globalStyles.titleCrearCuenta}>INICIA TU CUENTA</Title>
                <View style={globalStyles.containerInputs}>
                    <TextInput onChangeText={text => readInput('username', text)} style={{height: 50, marginBottom: 20}} data-focusable="false" selectionColor="green" underlineColor="green" label="usuario" />
                    <TextInput onChangeText={text => readInput('password', text)} style={{height: 50, marginBottom: 20}} underlineColor="green" label="contraseña" secureTextEntry={true}  />
                    <TouchableOpacity style={globalStyles.buttonsSend} onPress={onPress}>
                        <Text style={{color: 'white', letterSpacing: 2, fontSize: 16, padding: 7, marginRight: 10, marginLeft: 10}}>{visible & !flag ? 'Enviando...' : 'Enviar'}</Text>
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
                            { flag ? 'Por favor, completa todos los campos.' : 'Estamos contento de recibirte nuevamente!' }
                        </Snackbar>
                    </TouchableOpacity>
                </View>
            </View>
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