import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { State } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import ProductCart from '../components/ProductCart';
import { globalStyles } from '../styles/globalStyles'
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import productsActions from '../redux/actions/productsActions';
import { NavigationEvents } from 'react-navigation';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';


const Cart =(props) => {
  
  const [cartContent, setCartContent] = useState(props.cartProducts)
  const [subTotal, setSubTotal] = useState(0)
  
 
  
  useFocusEffect(()=>{
    setCartContent(props.cartProducts)
    var subTot= props.countTotal
    setSubTotal(subTot)
    
  })

  useIsFocused(() =>{
    setCartContent(props.cartProducts)
    var subTot= props.countTotal
    setSubTotal(subTot)
  })
  
  
  
  return(
    
    <View style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.viewCart}>
          
          <View style={styles.viewCart}>
            <FlatList 
            style={styles.list}
            ListEmptyComponent= {() =>(<Text style={{marginTop:80, color:"whitesmoke", fontSize:50, textAlign:"center"}}>El carrito esta vacio :(</Text>)}
            data={cartContent}
            renderItem={(item) => <ProductCart prod={item}/>}
            keyExtractor={item => (item.product._id)}
            
            />
          </View>
        
        </View>
      </View>
      <View style={styles.cartFooter}>
            <View style={styles.containerTotal}>
              <Text style={styles.textTotal}>Total:$ {subTotal} </Text>
              <TouchableOpacity 
              style={styles.deleteBtn}
              onPress={() => props.deleteCart()}>
                <Text style={styles.deleteBtnText}>Vaciar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerFinish}>
            <TouchableOpacity 
              style={styles.finishBtn}
              onPress={() => {if(props.countTotal !== 0){
                
                Alert.alert(
                  'Ya casi es tuyo',
                  'Podrás abonar la compra al recibir el pedido en efectivo o con mercadopago y recibirás un mail de confirmación.',
                  
                  [
                    {
                      text: 'Ir a confirmar',
                      onPress: () => {props.navigation.navigate("FinishBuy")}
                    },
                    { text: 'Cancelar', onPress: () => {/* props.navigation.goBack() */}}
                  ],
                  { cancelable: false }
                );
                
                }}}>
                <Text style={styles.finishBtnText}>Finalizar Compra</Text>
              </TouchableOpacity>
            </View>
              
      </View>
    </View>
  )

  
}


const mapDispatchToProps ={
forceCart: productsActions.forcedCart,
deleteCart: productsActions.deleteAllProducts
}

const mapStateToProps = (state) =>{
  var countTotal = 0
 state.productsRed.cartProducts.map(product =>{
   countTotal += (parseInt(product.quantity) * parseInt(product.product.price))
 })
  
  return {
    cartProducts: state.productsRed.cartProducts,
    countTotal
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#009387"
  },
  
  header: {
    flex:5,
    
    width:"100%"
  },
  containerTotal:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  textTotal:{
    color:"#009387",
    fontSize:20
  },
  cartFooter:{
    flex:1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    overflow:"hidden"
  },
  deleteBtn:{
    backgroundColor:"red",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:20
  },
  deleteBtnText:{
    color:"whitesmoke",
    fontSize:15
  },
  containerFinish:{
    flex:1,
    justifyContent: "center",
    alignItems:"center"
  },
  finishBtn:{
    backgroundColor: "#009387",
    paddingHorizontal:80,
    paddingVertical:15,
    borderRadius: 30,
    marginTop:10

  },
  finishBtnText:{
    color:"whitesmoke",
    fontSize:20
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
    backgroundColor:"#009387",
    padding: 10,
    color: "white"
  },
  
  containerCard:{
    flex: 1,
    height:"100%",
    borderColor:"#009387",
    backgroundColor:"whitesmoke",
    borderColor:"#009387",
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
    borderColor:"#009387",
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
    backgroundColor:"#00544d",
    flex:1
  }
  
});