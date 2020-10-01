import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert} from "react-native"
import { globalStyles } from "../styles/globalStyles"
import { connect } from "react-redux"
import { TextInput } from "react-native-gesture-handler"
import UserActions from '../redux/actions/UserActions'
import SweetAlert from 'react-native-sweet-alert';

function SignUp( props ) {

    const [user, setUser] = useState({ 
        username: '', password: '', passwordValidation: '', mail: '', name: '', surname: '', loginGoogle:"false"
    }) 

    const readInput = (campo, text) => {
        const value = text
       console.log(campo, text);
        setUser({
            ...user,
            [campo]: value
        })
    }

    const onPress = async e => {
        e.preventDefault()
        
        await props.createUser(user)
    }

    useEffect(() => {
      
      if (props.token) {
        Alert.alert(
          'Hola',
          `${user.username}`,
          [
            {
              text: 'Ask me later',
              onPress: () => console.log('Ask me later pressed')
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        )
      }  
    }, [props])
    

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Soy el registro.</Text>
      <StatusBar style="auto" />
      <View>
        <Text>Crea tu cuenta</Text>
        <View style={globalStyles.containerInputs}>
            <Text>Ingresá tu nombre de usuario</Text>
            <TextInput onChangeText={text => readInput('username', text)} style={{borderColor: 'red', padding: 5, borderWidth: 1}}/>
            <Text>Ingresá tu contraseña</Text>
            <TextInput onChangeText={text => readInput('password', text)} secureTextEntry={true}  style={{borderColor: 'red', padding: 5, borderWidth: 1}}/>
            <Text>Ingresá nuevamente tu contraseña</Text>
            <TextInput onChangeText={text => readInput('passwordValidation', text)} secureTextEntry={true} style={{borderColor: 'red', padding: 5, borderWidth: 1}}/>
            <Text>Ingresá tu email</Text>
            <TextInput onChangeText={text => readInput('mail', text)} style={{borderColor: 'red', padding: 5, borderWidth: 1}}/>
            <Text>Ingresá tu nombre</Text>
            <TextInput onChangeText={text => readInput('name', text)} style={{borderColor: 'red', padding: 5, borderWidth: 1}}/>
            <Text>Ingresá tu apellido</Text>
            <TextInput onChangeText={text => readInput('surname', text)} style={{borderColor: 'red', padding: 5, borderWidth: 1, marginBottom: 30}}/>
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

const mapStateToProps = state => {
  return {
    token: state.usersRed.token
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)