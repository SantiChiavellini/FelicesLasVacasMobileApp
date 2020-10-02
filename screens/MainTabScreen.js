import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createStackNavigator();
const ProductsStack = createStackNavigator();
const CartStack = createStackNavigator();
const FaqsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import Faqs from './Faqs'
import Icon from 'react-native-vector-icons/Ionicons'

const MainTabScreen= () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="white"
          
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Inicio',
              tabBarColor: "#2dbb1e",
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Products"
            component={ProductsStackScreen}
            options={{
              tabBarLabel: 'Productos',
              tabBarColor:  "#178c0b",
              tabBarIcon: ({ color }) => (
                <Icon name="ios-basket" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Faqs"
            component={FaqsStackScreen}
            options={{
              tabBarLabel: 'Como comprar',
              tabBarColor: "#25b417",
              tabBarIcon: ({ color }) => (
                <Icon name="md-help-circle" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartStackScreen}
            options={{
              tabBarLabel: 'Carrito',
              tabBarColor: "#0b7900",
              tabBarIcon: ({ color }) => (
                <Icon name="ios-cart" color={color} size={26} />
              ),
            }}
          />
          
        </Tab.Navigator>
      )
}

export default MainTabScreen

const HomeStackScreen =({navigation}) => (
    <HomeStack.Navigator screenOptions ={{
      headerStyle:{
        backgroundColor:"#2dbb1e"
      },
      headerTintColor: "white",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <HomeStack.Screen name="Home" component={Home} options={{
        title: "Inicio",
        headerLeft: () =>(
          <Icon.Button 
          name="ios-menu" 
          size={25}
          backgroundColor="#2dbb1e"
          onPress = {() => {navigation.openDrawer()}}
          ></Icon.Button>
        )
      }} />
    </HomeStack.Navigator>
  )
  
  const ProductsStackScreen =({navigation}) => (
    <ProductsStack.Navigator screenOptions ={{
      headerStyle:{
        backgroundColor:"#178c0b"
      },
      headerTintColor: "white",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <ProductsStack.Screen name="Products" component={Products} options={{
        title: "Productos",
        headerLeft: () =>(
          <Icon.Button 
          name="ios-menu" 
          size={25}
          backgroundColor="#178c0b"
          onPress = {() => {navigation.openDrawer()}}
          ></Icon.Button>
        )
      }} />
    </ProductsStack.Navigator>
  )

  const CartStackScreen =({navigation}) => (
    <CartStack.Navigator screenOptions ={{
      headerStyle:{
        backgroundColor:"#178c0b"
      },
      headerTintColor: "white",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <CartStack.Screen name="Cart" component={Cart} options={{
        title: "Carrito",
        headerLeft: () =>(
          <Icon.Button 
          name="ios-menu" 
          size={25}
          backgroundColor="#178c0b"
          onPress = {() => {navigation.openDrawer()}}
          ></Icon.Button>
        )
      }} />
    </CartStack.Navigator>
  )
  const FaqsStackScreen =({navigation}) => (
    <FaqsStack.Navigator screenOptions ={{
      headerStyle:{
        backgroundColor:"#178c0b"
      },
      headerTintColor: "white",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <FaqsStack.Screen name="Faqs" component={Faqs} options={{
        title: "Faqs",
        headerLeft: () =>(
          <Icon.Button 
          name="ios-menu" 
          size={25}
          backgroundColor="#178c0b"
          onPress = {() => {navigation.openDrawer()}}
          ></Icon.Button>
        )
      }} />
    </FaqsStack.Navigator>
  )