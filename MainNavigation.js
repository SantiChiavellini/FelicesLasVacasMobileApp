import 'react-native-gesture-handler';

import React from "react";


import { NavigationContainer } from '@react-navigation/native';
import {connect} from 'react-redux';
import {createDrawerNavigator} from "@react-navigation/drawer"

import {DrawerContent} from './screens/DrawerContent'
import MainTabScreen from './screens/MainTabScreen'
import RootStackScreen from './screens/RootStackScreen';
import LogOut from './screens/LogOut';
import { createStackNavigator } from '@react-navigation/stack';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()
  

const MainNavigation= (props) => {
    return(



      

      <NavigationContainer>
        {props.token
        ?
        <Drawer.Navigator 
          drawerPosition="left"
          drawerContent = {props => <DrawerContent  {...props} />}>
            <Drawer.Screen name="Main" component={MainTabScreen} />
            <Drawer.Screen name="LogOut" component={LogOut} />
        </Drawer.Navigator>
        :
          <RootStackScreen />
        }
        
      </NavigationContainer>
    )
  
}

const mapStateToProps =(state) =>{
  return{
    token: state.usersRed.token
  }
}

export default connect(mapStateToProps)(MainNavigation)