import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { connect } from "react-redux"
import { TextInput } from "react-native-gesture-handler"
import UserActions from '../redux/actions/UserActions'

function SignUp( props ) {

    const [user, setUser] = useState({ 
        username: '', password: '', passwordValidation: '', email: '', name: '', surname: ''
    }) 

    const readInput = e => {
        const value = e.target.value
        const campo = e.target.placeholder

        setUser({
            ...user,
            [campo]: value
        })
    }

    const onPress = e => {
        e.preventDefault()
        props.createUser(user)
    }
    
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Soy el registro.</Text>
      <StatusBar style="auto" />
      <View>
        <Text>Crea tu cuenta</Text>
        <View style={globalStyles.containerInputs}>
            <Text>Ingresá tu nombre de usuario</Text>
            <TextInput onChange={readInput}  placeholder="username" style={{borderColor: 'red', padding: 5, borderWidth: 1}}/>
            <Text>Ingresá tu contraseña</Text>
            <TextInput onChange={readInput} secureTextEntry={true} placeholder="password" style={{borderColor: 'red', padding: 5, borderWidth: 1}}/>
            <Text>Ingresá nuevamente tu contraseña</Text>
            <TextInput onChange={readInput} secureTextEntry={true} placeholder="passwordValidation" style={{borderColor: 'red', padding: 5, borderWidth: 1}}/>
            <Text>Ingresá tu email</Text>
            <TextInput onChange={readInput} placeholder="email" style={{borderColor: 'red', padding: 5, borderWidth: 1}}/>
            <Text>Ingresá tu nombre</Text>
            <TextInput onChange={readInput} placeholder="name" style={{borderColor: 'red', padding: 5, borderWidth: 1}}/>
            <Text>Ingresá tu apellido</Text>
            <TextInput onChange={readInput} placeholder="surname" style={{borderColor: 'red', padding: 5, borderWidth: 1, marginBottom: 20}}/>
            <TouchableOpacity onPress={onPress}>
                <Text style={globalStyles.buttonsSend}>Enviar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const mapDispatchToProps = {
    createUser: UserActions.createUser
}

export default connect(null, mapDispatchToProps)(SignUp)