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
        if (props.token) {
          alert(
            `Hola ${user.username}`)
        }  
    }, [props])

    const onPress = async e => {
        e.preventDefault()
        await props.createUser(user)
        setVisible(!visible)
    }

    return (
        <View style={globalStyles.container}>
            <Surface style={globalStyles.surface}>
                <Subheading style={globalStyles.titleText}>Inicar Sesión</Subheading>
            </Surface>
            <StatusBar style="auto" />
            <View>
                <Title style={globalStyles.titleCrearCuenta}>INICIA TU CUENTA</Title>
                <View style={globalStyles.containerInputs}>
                    <TextInput onChangeText={text => readInput('username', text)} style={{height: 50, marginBottom: 20}} data-focusable="false" selectionColor="green" underlineColor="green" label="usuario" />
                    <TextInput onChangeText={text => readInput('password', text)} style={{height: 50, marginBottom: 20}} underlineColor="green" label="contraseña" secureTextEntry={true}  />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)