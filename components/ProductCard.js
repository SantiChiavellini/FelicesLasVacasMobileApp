import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { StyleSheet, 
  View, 
  Image, 
  TextInput
} from "react-native";
import {TouchableOpacity } from "react-native-gesture-handler";
import { Card, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from "react-redux";
import productsActions from "../redux/actions/productsActions";




const ProductCard = (props) =>{
   
    
    const [cartProduct, setCartProduct] = useState({
        quantity: "0",
        product:props.prod.item
    })
    const upQuantity =(flag) =>{
        var quan = flag === "+" ? parseInt(cartProduct.quantity) + 1 : parseInt(cartProduct.quantity) - 1 
        if (quan <= 0){
          quan = 0
        }
        
        setCartProduct({
            ...cartProduct,
            quantity: quan.toString()
        })
    }

    const addItem = () =>{
        
        if (cartProduct.quantity > props.prod.item.stock){
          alert("NO DISPONEMOS DE LA CANTIDAD SOLICITADA EN STOCK")
        }else{
           
            if (cartProduct.quantity != "0"){
                props.addToCart(cartProduct)  
            }
        }
    }

      
    return(
    
    <Card style={styles.containerCard}>
      <Card.Content >
        <Title style={styles.titleCard}>{props.prod.item.name}</Title>
        <Title style={styles.priceCard}>$ {props.prod.item.price} C/U</Title>
        <View style={styles.containerFoto}>
          <Image 
          style={styles.CardImg}
          source={{uri:props.prod.item.photo}}
          />
        </View>
        
        <View style={styles.inputView}>
        
          <TouchableOpacity
          style={styles.button}
          onPress={() => upQuantity("-")}
          >
            <Icon style={styles.iconCard} name="ios-remove-circle-outline"></Icon>
          </TouchableOpacity>
          
          <TextInput 
            style={styles.textInput}
            keyboardType = 'numeric'
            onChangeText = {(text)=> setCartProduct({
                ...cartProduct,
                quantity:text
            })} 
            value = {cartProduct.quantity}
          /> 
          
          <TouchableOpacity
          style={styles.button}
          onPress={() => upQuantity("+")} 
          >       
            <Icon style={styles.iconCard} name="ios-add-circle-outline"></Icon>
          </TouchableOpacity>

        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={addItem} 
          >       
            <Icon style={styles.iconCart} name="ios-cart"> Añadir al carrito</Icon>
          </TouchableOpacity>
      </Card.Content>
    </Card>
)}

const mapDispatchToProps ={
    addToCart: productsActions.addToCart
}

export default connect(null, mapDispatchToProps)(ProductCard)

const styles = StyleSheet.create({
    
    containerCard:{
      flex: 1,
      height:"100%",
      borderColor:"green",
      backgroundColor:"whitesmoke",
      borderColor:"#009387",
      borderWidth: 2,
      overflow:"hidden",
      margin:10,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:30
      
    },
    CardImg:{
      width:150,
      height: 150,
      borderRadius: 20,
      borderColor:"#009387",
      borderWidth: 2,
      
    },
    containerFoto:{
      flex:1,
      justifyContent: "center",
      alignItems:"center",
      marginTop:5
    },
    viewGeneral:{
      flex:1
    },
    viewCard:{
      backgroundColor:"green",
      flex:1
    },
    textInput:{
      backgroundColor: "#009387",
      padding:10,
      fontSize:15,
      color:"whitesmoke",
      width:50,
      borderRadius:100,
      textAlign: "center",
      
  
    },
    inputView:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5,
      flex:1,
      width:"100%"
      
    },
    button:{
      marginLeft:20,
      marginRight:20,
      textAlign: "center",
      
    },
    textButton:{
      color:"whitesmoke",
      fontSize:30,
      textAlign: "center",
      backgroundColor:"#009387",
      width:70,
      paddingHorizontal:10,
      paddingVertical:5,
      borderRadius:100
      
    },
    iconCard:{
      fontSize:50,
      color:"#009387"
    },
    titleCard:{
      textAlign: "center",
      color:"whitesmoke",
      paddingHorizontal:10,
      backgroundColor:"#009387",
      borderRadius:10,
      borderColor:"transparent",
      borderWidth: 1,
      overflow:"hidden"
    },
    priceCard:{
        textAlign:"center",
        color:"#009387"
    },
    iconCart:{
        color:"#009387",
        fontSize:20,
        textAlign:"center",
        borderRadius:10,
        borderColor:"#009387",
        borderWidth: 2,
        overflow:"hidden",
        marginTop:10,
        paddingVertical:10
    }
    
  });