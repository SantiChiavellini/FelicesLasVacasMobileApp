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




const ProductCart = (props) =>{
   
    const [productCart, setProductCart] = useState({
        quantity: props.prod.item.quantity ,
        product: props.prod.item.product
    })
    
    const addOne = (idProduct) =>{
        var quan = productCart.quantity
        setProductCart({
            ...productCart,    
            quantity: quan+1
        })
        props.addProduct(idProduct)
    }
    const removeOne = (idProduct) =>{
        var quan = productCart.quantity
        setProductCart({
            ...productCart,    
            quantity: quan-1
        })
        props.removeProduct(idProduct)
    }
    
    const del = (idProduct) =>{
        props.deleteProduct(idProduct)
    }
      
    return(
    
    <Card style={styles.containerCard}>
      <Card.Content >
        <Title>{props.prod.item.product.name}</Title>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => addOne(props.prod.item.product._id)} 
          >       
            <Icon style={styles.iconCard} name="ios-add-circle-outline"></Icon>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => removeOne(props.prod.item.product._id)} 
          >       
            <Icon style={styles.iconCard} name="ios-remove-circle-outline"></Icon>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => del(props.prod.item.product._id)} 
          >       
            <Icon style={styles.iconCard} name="ios-add-circle-outline"></Icon>
        </TouchableOpacity>
      </Card.Content>
    </Card>
)}

const mapDispatchToProps = {
    addProduct: productsActions.addProducts,
    removeProduct: productsActions.removeProducts,
    deleteProduct: productsActions.deleteProducts
}


export default connect(null, mapDispatchToProps)(ProductCart)

const styles = StyleSheet.create({
    
    containerCard:{
      flex: 1,
      height:"100%",
      borderColor:"green",
      backgroundColor:"whitesmoke",
      borderColor:"#2dbb1e",
      borderWidth: 2,
      overflow:"hidden",
      margin:10,
      justifyContent:"center",
      alignItems:"center",
      
    },
    CardImg:{
      width:150,
      height: 150,
      borderRadius: 20,
      borderColor:"#2dbb1e",
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
      backgroundColor: "#2dbb1e",
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
      backgroundColor:"#2dbb1e",
      width:70,
      paddingHorizontal:10,
      paddingVertical:5,
      borderRadius:100
      
    },
    iconCard:{
      fontSize:50,
      color:"#2dbb1e"
    },
    titleCard:{
      textAlign: "center",
      color:"whitesmoke",
      paddingHorizontal:10,
      backgroundColor:"#2dbb1e",
      borderRadius:10,
      borderColor:"transparent",
      borderWidth: 1,
      overflow:"hidden"
    },
    priceCard:{
        textAlign:"center",
        color:"#2dbb1e"
    },
    iconCart:{
        color:"#2dbb1e",
        fontSize:20,
        textAlign:"center",
        borderRadius:10,
        borderColor:"#2dbb1e",
        borderWidth: 2,
        overflow:"hidden",
        marginTop:10,
        paddingVertical:10
    }
    
  });