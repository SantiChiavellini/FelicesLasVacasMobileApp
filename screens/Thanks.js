import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput, Alert 
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Icon from 'react-native-vector-icons/Ionicons'
import productsActions from "../redux/actions/productsActions";
import { connect } from "react-redux";
import ProductBuy from "../components/ProductBuy"
import { color } from "react-native-reanimated";

const Thanks = (props) =>{



    return(
        <>
            <View style={styles.header}>
                <View style={styles.containerIcons}>
                <TouchableOpacity
                style={styles.buttond}
                onPress={() => {props.navigation.openDrawer()}} 
                >       
                    <Icon style={styles.iconHeader} name="ios-menu"></Icon>
                </TouchableOpacity>
                <Text style={{color:"whitesmoke", fontSize:18, fontWeight:"bold"}}>Compra realizada</Text>
                <TouchableOpacity
                style={styles.buttond}
                onPress={() => {props.navigation.navigate("Home")}} 
                >       
                    <Icon style={styles.iconHeader} name="ios-home"></Icon>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                
                <Image
                source={require("../assets/gracias2.gif")}
                ></Image>
                <View style={styles.Thanks}>
                  <Text style={styles.ThanksTxt}>Tu compra ha sido confirmada</Text>
                  <Text style={styles.ThanksTxt}>Llegará a tu domicilio y podras abonarla en efectivo o con mercadopago</Text>
                  <Text style={styles.ThanksTxt}>Tanto las vaquitas como nosotros estamos muy agradecidos</Text>
                  <Text style={styles.ThanksTxt}>Por cualquier consulta comunicarse a: feliceslasvacas@gmail.com</Text>
                </View>
                <Image
                style={{flex:1,width:"100%"}}
                source={require("../assets/gracias6.gif")}
                ></Image>
            </View>
        </>
    )


}



export default (Thanks)

const styles = StyleSheet.create({
    
  header:{
    flex:1,
    backgroundColor:"#009387",
    
    
  },
  footer:{
    flex:8
  },
  iconHeader:{
    color: "whitesmoke",
    fontSize:25
  },
  containerIcons:{
    flex:1,
    marginTop:42,
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
  },
  buttond:{
    marginHorizontal:8
  },
  
  image: {
    width: "100%",
    height: 149,
    justifyContent:"center",
    alignItems:"center",
    resizeMode:"cover",
  },
  title: {
    textAlign:"center",
    width:"100%",
    backgroundColor:"#009387",
    borderBottomColor: '#13aa52',
    paddingVertical:10,
    fontSize:20,
    
    color: 'whitesmoke'
},
stract:{
    fontSize:20,
    textAlign: "center",
    marginVertical:20
},
backBtn:{
backgroundColor:"#009387",
paddingVertical:15,
paddingHorizontal:20,
color:"whitesmoke",
borderRadius:25,
overflow:"hidden",
fontSize:18
},
confirmBtn:{
    width:"100%",
    backgroundColor:"#009387",
    paddingVertical:15,
    paddingHorizontal:50,
    color:"whitesmoke",
    borderRadius:25,
    overflow:"hidden",
    fontSize:18
},
ThanksTxt:{
  textAlign:"center",
  marginBottom:10,
  color:"whitesmoke",
  fontSize:20
},
Thanks:{
  backgroundColor:"#009387",
  paddingTop:10
}
})