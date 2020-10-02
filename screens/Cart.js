import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ProductCart from '../components/ProductCart';
import { globalStyles } from '../styles/globalStyles'
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Card, Title} from 'react-native-paper';

function Cart(props, { navigation }) {


  useEffect(()=>{
    console.log(props)
  
  })
  
  if (props.cartProducts.length !== 0) {
  return (
    
    <View style={globalStyles.container}>
      <View style={styles.viewCart}>
          <FlatList 
          style={styles.list}
          data={props.cartProducts}
          renderItem={(item) => <ProductCart prod={item}/>}
          keyExtractor={item => (item._id)}
          />
      </View>
    </View>
  );
  }else{
    return(
      <View style={globalStyles.container}>
      <View style={styles.viewCart}>
        <FlatList 
          style={styles.list}
          data={["El carrito esta vacio"]}
          renderItem={(item) => 
          <Card style={styles.containerCard}>
            <Card.Content >
              <Title>"El carrito esta vacio"</Title>
            </Card.Content>
          </Card>
          }
          keyExtractor={item => (item._id)}
          />
      </View>
    </View>
    )
  }
}

const mapStateToProps = (state) =>{
  
  return {
    cartProducts: state.productsRed.cartProducts
  }
}

export default connect (mapStateToProps)(Cart)

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  image: {
    width: "100%",
    height: 170,
    justifyContent:"center",
    alignItems:"center",
    resizeMode: 'stretch',
  },
  title:{
   color:"white",
    fontSize: 0
  },
  logo:{
    width:140,
    height:140,
    margin: 4
  },
  subtitle:{
    textAlign: "center",
    fontSize:30,
    backgroundColor:"#2dbb1e",
    padding: 10,
    color: "white"
  },
  
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
  cartImg:{
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
    marginTop:30
  },
  viewGeneral:{
    flex:1
  },
  viewCart:{
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
    marginTop: 20,
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
  iconCart:{
    fontSize:50,
    color:"#2dbb1e"
  },
  titleCart:{
    textAlign: "center",
    color:"whitesmoke",
    paddingHorizontal:10,
    backgroundColor:"#2dbb1e",
    borderRadius:20,
    borderRadius:10,
    borderColor:"transparent",
    borderWidth: 1,
    overflow:"hidden"
  }
  
});