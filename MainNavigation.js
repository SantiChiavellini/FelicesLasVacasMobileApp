import 'react-native-gesture-handler';

import React, { useEffect } from "react";


import { NavigationContainer } from '@react-navigation/native';
import {connect} from 'react-redux';
import {createDrawerNavigator} from "@react-navigation/drawer"

import {DrawerContent} from './screens/DrawerContent'
import MainTabScreen from './screens/MainTabScreen'
import RootStackScreen from './screens/RootStackScreen';
import LogOut from './screens/LogOut';
import { createStackNavigator } from '@react-navigation/stack';
import Product from './screens/Product'

import { View, Text } from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import ModifyAccount from './screens/ModifyAccount'
import { ActivityIndicator } from 'react-native-paper';
import UserActions from './redux/actions/UserActions';
import Cart from './screens/Cart';




const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()
  
const MainNavigation= (props) => {

  const [isLoading, setIsLoading] = React.useState(true)

  console.log(props)

  useEffect(() => {
    setTimeout(async() => {
      
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('token');
        if (userToken !== null){
        props.forcedLog(userToken)
        }
        setIsLoading(props.isLoading)
      } catch(e) {
        console.log(e);
      }

      if (userToken === null){
        setIsLoading(false)
      }

    }, 1000);
      

  }, [props]);

  
  if( isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#009387'}}>
        <ActivityIndicator color="white" size="large"/>
      </View>
    );
  }

  return(

      <NavigationContainer>
        {props.token
        ?
        <Drawer.Navigator 
          drawerPosition="left"
          drawerContent = {props => <DrawerContent  {...props} />}>
            <Drawer.Screen name="Main" products ={props.cartItems} component={MainTabScreen} />
            <Drawer.Screen name="LogOut" component={LogOut} />
            <Drawer.Screen name="Product" component={Product} />
        </Drawer.Navigator>
        :
          <RootStackScreen />
        }
        
      </NavigationContainer>
    )
  
}

const mapDispatchToProps = {
  forcedLog: UserActions.forcedLogIn
}

const mapStateToProps =(state) =>{
  return{
    token: state.usersRed.token,
    isLoading: state.usersRed.isLoading,
    cartItems: state.productsRed.cartProducts
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainNavigation)