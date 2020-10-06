import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput 
} from "react-native";
import { useEffect, useState } from "react";
import { globalStyles } from "../styles/globalStyles";
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from "react-redux";
import productsActions from "../redux/actions/productsActions";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";




const Product = (props, {navigation}) => {


  const [cartProduct, setCartProduct] = useState({
    quantity: "0",
    product:props.route.params
  })

  useEffect(()=>{
    setCartProduct({
      quantity:"0",
      product:props.route.params
    })
  },[props.route.params])

 


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
  console.log(props.route)
    if (cartProduct.quantity > props.route.params.stock){
      alert("NO DISPONEMOS DE LA CANTIDAD SOLICITADA EN STOCK")
    }else{
       
        if (cartProduct.quantity != "0"){
            props.addToCart(cartProduct)  
        }
    }
}



  return (
    /* Contenedor General */
    
    <>

    <View style={styles.header}>
      <View style={styles.containerIcons}>
        <TouchableOpacity
        style={styles.buttond}
        onPress={() => {props.navigation.openDrawer()}} 
        >       
          <Icon style={styles.iconHeader} name="ios-menu"></Icon>
        </TouchableOpacity>
      <Text style={{color:"whitesmoke", fontSize:18, fontWeight:"bold"}}>Información del producto</Text>
      <TouchableOpacity
        style={styles.buttond}
        onPress={() => {props.navigation.goBack()}} 
        >       
          <Icon style={styles.iconHeader} name="ios-close-circle-outline"></Icon>
        </TouchableOpacity>
        </View>
    </View>



    <View style={styles.container}>

      
        
        {/* Header + Banner */}
        {/* <ImageBackground
          source={require("../assets/BANDA.png")}
          style={styles.imageBanner}
        >
          <Image
            style={styles.logo}
            source={{
              uri: "https://i.postimg.cc/y84JL83W/logo.png",
            }}
          />
        </ImageBackground> */}
        {/* <Image
          style={styles.imageBanner}
          source={require("../assets/Images/productos.jpg")}
        /> */}

        
        {/* Producto renderizado */}
        <ScrollView>
        <View style={styles.middleBox}>
          {/* Foto del producto renderizado */}
          <Image
            style={styles.imageBox}
            source={{
              uri: `${props.route.params.photo}`,
            }}
          />

          {/* Características del producto */}
          <View style={styles.caracteristicsBox}>
            {/* Categoría */}
            <View style={styles.categoryBox}>
              {/* Nombre del producto */}
              <Text style={styles.title}>{props.route.params.name}</Text>
              <Text style={styles.text}>
                Categoría: Productos {props.route.params.category}
              </Text>
            </View>
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

          <View style={styles.descriptionBox}>
            <Text style={styles.destacatedText}>Descripción:</Text>
            <Text style={styles.text}>{props.route.params.description}</Text>
          </View>

          {/* Imagen de información nutricional */}
          <View style={styles.nutritionalBox}>
            <Icon />
            <Text style={styles.destacatedText}>Información nutricional:</Text>
            <Image
              style={styles.nutritionalImg}
              source={{
                uri: `${props.route.params.photo1}`,
              }}
            />
          </View>
        </View>
        
        </ScrollView>
    </View>
    
    </>
  );
};


const mapDispatchToProps ={
  addToCart: productsActions.addToCart
}

export default connect(null, mapDispatchToProps)(Product)

const styles = StyleSheet.create({
  container: {
    flex: 8,
  },

  imageBanner: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "flex-start",
    resizeMode: "stretch",
  },

  logo: {
    width: 140,
    height: 140,
    margin: 4,
  },

  middleBox: {
    flex:1,
    margin: 20,
  },

  imageBox: {
    width: "100%",
    height: 250,
    resizeMode:"cover",
    borderColor: "#009387",
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 20,
  },

  title: {
    fontFamily: "karla-regular",
    color: "#009387",
    fontSize: 31,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },

  text: {
    fontFamily: "karla-regular",
    color: "black",
    fontSize: 20,
    marginVertical: 5,
    lineHeight: 20,
    letterSpacing: 0.3,
  },

  destacatedText: {
    fontFamily: "karla-regular",
    color: "#009387",
    fontSize: 23,
    marginVertical: 5,
    lineHeight: 20,
    letterSpacing: 0.3,
    fontWeight: "bold",
    paddingTop: 5,
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

  /* Características del producto */

  caracteristicsBox: {
    width: "100%",
    minHeight: 80,
    flex: 1,
  },

  /* Categoría + Información nutricional */

  /* Categoría */

  categoryBox: {
    width: "90%",
    minHeight: 80,
    flex: 1,
  },

  /* Imagen de información nutricional */

  nutritionalBox: {
    width: "100%",
    height: 230,
    flex: 1,
  },

  nutritionalImg: {
    resizeMode: "stretch",
    height: "100%",
    width: "100%",
    flex: 1,
  },

  descriptionBox: {
    marginTop: 20,
    marginBottom: 20,
  },


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
  }
});

