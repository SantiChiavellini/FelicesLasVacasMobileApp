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
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import { color } from "react-native-reanimated";
import ProductCard from "../components/ProductCard"

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
       
       <Image
          style={styles.logo}
          source={{
            uri:'https://i.postimg.cc/y84JL83W/logo.png'
          }}
        />
       
      </ImageBackground>
      <View>
        <Text style={styles.subtitle}>Productos Destacados</Text>
      </View>
      <View style={styles.viewCart}>
        {topProducts.length !== 0 ?
          <FlatList 
          style={styles.list}
          data={topProducts}
          renderItem={(item) => <ProductCard prod={item}/>}
          keyExtractor={item => item._id}
          />
          :
          <Text>Loading</Text>
        }
      </View>
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