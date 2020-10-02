import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
/* import { useTheme } from '@react-navigation/native'; */

const SplashScreen = ({navigation}) => {
    /* const { colors } = useTheme(); */
     const clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          // clear error
        }
      
        console.log('Done.')
      }
      
      clearAll()  
    return (
      <View style={styles.container}>
          <Animatable.View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={2000}
                    source={require('../assets/logo.png')}
                    styles={styles.logo}
                    resizeMode="stretch"
                />
          </Animatable.View>
          <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
          >
                <Text style={styles.title}>Quedate en casa, nosotros te lo llevamos</Text>
                <Text style={styles.text}>Inicia sesión o créate una cuenta</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")} >
                        <View styles={styles.signIn}>
                            <Text style={styles.textSign}>
                                Vamos a ello ➤
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
          </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      backgroundColor:"green",
      
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold',
      fontSize:20,
      paddingHorizontal:20,
      paddingVertical:10,
      borderColor:"transparent",
      borderWidth:2,
      borderRadius:20,
      overflow:"hidden",
      backgroundColor:"#009387",
  },
  icon: {
      marginTop: 20
    }

  
});