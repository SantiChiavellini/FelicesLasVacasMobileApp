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

const FinishBuy = (props) =>{



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
                <Text style={{color:"whitesmoke", fontSize:18, fontWeight:"bold"}}>Finalizar compra</Text>
                <TouchableOpacity
                style={styles.buttond}
                onPress={() => {props.navigation.goBack()}} 
                >       
                    <Icon style={styles.iconHeader} name="ios-close-circle-outline"></Icon>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                
                <ImageBackground source={require('../assets/Images/productos.jpg')} style={styles.image}>
                
                
                </ImageBackground>
                <Text style={styles.title}>Resumen de tu compra</Text>
                <View style={{height:"50%"}}>
                <Text style={styles.stract}>Total a pagar: $ {props.countTotal}</Text>
                <FlatList 

                horizontal={false}
                style={styles.list}
                data={props.products}
                renderItem={(item) => <ProductBuy prod={item}/>}
                keyExtractor={item => item._id}
                />
                </View>
                
                <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:20}}> 
                <TouchableOpacity
                onPress={() => {props.navigation.navigate("Products")}}>
                    <Text style={styles.backBtn}>Volver a Productos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {props.navigation.goBack()}}>
                    <Text style={styles.backBtn}>Volver al carrito</Text>
                </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:20}}>
                <TouchableOpacity
                onPress={async () => {
                    if (props.countTotal !== 0){
                    const res = await props.confirm(props.products, props.token)
                    Alert.alert(
                        'Muchas gracias por tu compra',
                        'Podrás abonarlas al recibir el pedido y recibirás un mail de confirmación.',
                        
                        [
                          {
                            text: 'Ver formas de pago(como comprar)',
                            onPress: () => {props.navigation.navigate("Faqs")}
                          },
                          { text: 'Volver a inicio', onPress: () => {props.navigation.navigate("Home")}}
                        ],
                        { cancelable: false }
                      );
                    }}
                    }>
                    
                    <Text style={styles.confirmBtn}>Confirmar Compra</Text>
                </TouchableOpacity>
                </View>   
            </View>
        </>
    )


}

const mapDispatchToProps ={
    confirm: productsActions.confirm
}

const mapStateToProps = (state) =>{
    var countTotal = 0
    state.productsRed.cartProducts.map(product =>{
        countTotal += (parseInt(product.quantity) * parseInt(product.product.price))
    })
    return{
        products: state.productsRed.cartProducts,
        token: state.usersRed.token,
        countTotal
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(FinishBuy)

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
}
})