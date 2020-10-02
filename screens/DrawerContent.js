
import React from 'react'
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native'
import {
    Avatar, 
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'





export const DrawerContent = ({navigation}) => {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView >
                <View style={styles.drawerContent}>

                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Avatar.Image 
                                source={{
                                    uri:'https://i.postimg.cc/y84JL83W/logo.png'
                                }}
                                size={80}
                                style={{backgroundColor:"green"}}
                            />
                            <View style={{marginLeft:15, flexDirection:"column"}}>
                                <Title style={styles.title}>Felices las vacas</Title>
                                <Caption style={styles.caption}>Alimentación conciente</Caption>
                            </View>
                        </View>

                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <Drawer.Item
                            icon={({color, size}) => (
                                <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                                
                            )}
                            label="Inicio"
                            onPress={() =>{navigation.navigate('Home')}}
                        />
                        <Drawer.Item
                            icon={({color, size}) => (
                                <Icon 
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                                
                            )}
                            label="Mi cuenta"
                            onPress={() =>{navigation.navigate('Products')}}
                        />
                        <Drawer.Item
                            icon={({color, size}) => (
                                <Icon 
                                    name="cart-outline"
                                    color={color}
                                    size={size}
                                />
                                
                            )}
                            label="Carrito"
                            onPress={() =>{navigation.navigate('Cart')}}
                        />
                        <Drawer.Item
                            icon={({color, size}) => (
                                <Icon 
                                    name="basket-fill"
                                    color={color}
                                    size={size}
                                />
                                
                            )}
                            label="Ver productos"
                            onPress={() =>{navigation.navigate('Products')}}
                        />
                        <Drawer.Item
                            icon={({color, size}) => (
                                <Icon 
                                    name="comment-question-outline"
                                    color={color}
                                    size={size}
                                />
                                
                            )}
                            label="Preguntas frecuentes"
                            onPress={() =>{navigation.navigate('Faqs')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Aspecto">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Tema oscuro</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
             <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    name="exit-to-app"
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {navigation.navigate('LogOut')}}
                />
            </Drawer.Section>  
        </View>
    )
}





const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 50,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });