import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { StyleSheet, 
  Text, 
  View, 
  Image, 
  ImageBackground,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import productsActions from '../redux/actions/productsActions'
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ProductCard from "../components/ProductCard"
import * as Animatable from 'react-native-animatable';
import { ActivityIndicator } from "react-native-paper";


function Home(props, { navigation }) {

  const [topProducts, setTopProducts] = useState([])
  

  useEffect( () => {
    
    async function fetchData() {
      const products = await props.getProducts()
      var ordered =  products.sort((a,b) => b.views-a.views)
      var popular = ordered.slice(0, 6)
      setTopProducts(popular) 
    }
    fetchData()
    
  
  }, [])
  
  return (
    

    <View style={styles.viewGeneral}>
      <ImageBackground source={require('../assets/BANDA.png')} style={styles.image}>
       
       <Animatable.View
        animation={"slideInDown"}
        duration={2000}
       >
          <Image
          style={styles.logo}
          source={{
            uri:'https://i.postimg.cc/y84JL83W/logo.png'
          }}
        />
       </Animatable.View>
       
       
      </ImageBackground>
      <View style={styles.subtitle}>
        <Animatable.Text 
          style={styles.textSub} 
          
          animation={"slideInLeft"}
          duration={2000} 
        >Productos Destacados</Animatable.Text>
      </View>
      <Animatable.View 
        style={styles.viewCart}
        
      >
        {topProducts.length !== 0 ?
          <FlatList 
          style={styles.list}
          data={topProducts}
          renderItem={(item) => <ProductCard prod={item}/>}
          keyExtractor={item => item._id}
          />
          :
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="white"/>
          </View>
        }
      </Animatable.View>
      </View>
  );
}

const mapDispatchToProps ={
  getProducts: productsActions.getProducts
}

const mapStateToProps = (state) =>{
 
  return {
    products: state.productsRed.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home) 

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
    
    backgroundColor:"#009387",
    padding: 10,
    
  },
  textSub:{
    textAlign: "center",
    fontSize:30,
    color: "white"
  },
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
    backgroundColor:"#009387",
    width:70,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:100
    
  },
  iconCart:{
    fontSize:50,
    color:"#009387"
  },
  titleCart:{
    textAlign: "center",
    color:"whitesmoke",
    paddingHorizontal:10,
    backgroundColor:"#009387",
    borderRadius:20,
    borderRadius:10,
    borderColor:"transparent",
    borderWidth: 1,
    overflow:"hidden"
  }
  
});