import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { StyleSheet, 
  View, 
  Image, 
  TextInput,
  Text
} from "react-native";
import {TouchableOpacity } from "react-native-gesture-handler";
import { Card, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from "react-redux";
import productsActions from "../redux/actions/productsActions";




const ProductBuy = (props) =>{
   
    

    
      
    return(
    
    <Card style={styles.containerCard}>
      <Card.Content style={{paddingHorizontal:0, paddingVertical:0}} >
        <View style={{flex:1, flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
          <View style={{
            width:"32%",
            marginRight:30, 
          borderRadius:20, 
          borderRadius: 20,
          borderColor:"#009387",
          borderWidth: 2}}>
            <Image style={{width:100, height:100, borderRadius: 20}} source={{uri:props.prod.item.product.photo}}/>
          </View>
          <View style={{width:"60%"}}>
            <Title style={{fontSize:18, margin:0, lineHeight:25,color:"#009387" }}>{props.prod.item.product.name}</Title>
            <Text style={{color:"#009387", fontSize:15, marginVertical:10}}> $ {props.prod.item.product.price} c/u -  ($ {props.prod.item.product.price * props.prod.item.quantity}) </Text>
            <Text style={{color:"#009387", fontSize:15}}> Unidades seleccionadas: {props.prod.item.quantity}</Text>
          </View>
        </View>
        
        
      </Card.Content>
    </Card>
)}

const mapDispatchToProps ={
    addToCart: productsActions.addToCart
}

export default connect(null, mapDispatchToProps)(ProductBuy)

const styles = StyleSheet.create({
    
    containerCard:{
     

      
    margin:10
      
    },
    containerCard:{
        flex: 1,
        height:"100%",
        borderColor:"red",
        backgroundColor:"whitesmoke",
        borderColor:"#009387",
        borderWidth: 2,
        overflow:"hidden",
        margin:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        padding:10
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
      },
      iconBtn:{
        fontSize:40,
        marginVertical:10,
        color:"#009387"
      },
      deleteBtn:{
        color:"#009387",
          fontSize:15,
          textAlign:"center",
          borderRadius:10,
          borderColor:"#009387",
          borderWidth: 2,
          overflow:"hidden",
          paddingVertical:10,
          paddingHorizontal:5,
          marginTop:10
      }
      
    
  });