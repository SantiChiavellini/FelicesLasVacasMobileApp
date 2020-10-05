import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useEffect } from "react";
import { globalStyles } from "../styles/globalStyles";

const Product = (props) => {
  return (
    /* Contenedor General */

    <View style={styles.container}>
      <ScrollView>
        {/* Header + Banner */}
        <ImageBackground
          source={require("../assets/BANDA.png")}
          style={styles.imageBanner}
        >
          <Image
            style={styles.logo}
            source={{
              uri: "https://i.postimg.cc/y84JL83W/logo.png",
            }}
          />
        </ImageBackground>
        <Image
          style={styles.imageBanner}
          source={require("../assets/Images/productos.jpg")}
        />

        {/* Producto renderizado */}
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
            {/* Categoría + Información nutricional */}
            {/* Categoría */}
            <View style={styles.categoryBox}>
              {/* Nombre del producto */}
              <Text style={styles.title}>{props.route.params.name}</Text>
              <Text style={styles.text}>Categoría: Productos {props.route.params.category}</Text>
            </View>

            {/* Imagen de información nutricional */}
            <View style={styles.nutritionalBox}>
              <Image
                style={styles.nutritionalImg}
                source={{
                  uri: `${props.route.params.photo1}`,
                }}
              />
            </View>
          </View>

          <View style={styles.descriptionBox}>
            <Text style={styles.text}>Descripción:</Text>
            <Text style={styles.text}>{props.route.params.description}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageBanner: {
    width: "100%",
    height: 170,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "stretch",
  },

  logo: {
    width: 140,
    height: 140,
    margin: 4,
  },

  middleBox: {
    flex: 1,
    margin: 20,
  },

  imageBox: {
    width: "80%",
    height: 270,
    resizeMode: "stretch",
    borderColor: "black",
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 15,
  },

  title: {
    fontFamily: 'karla-regular',
    color: "black",
    fontSize: 26,
    fontWeight: 'bold'
  },

  text: {
    fontFamily: 'karla-regular',
    color: 'black',
    fontSize: 14,
    marginVertical: 5,
    lineHeight: 20,
    letterSpacing: 1
  },

  /* Características del producto */

  caracteristicsBox: {
    width: "100%",
    minHeight: 130,
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: 10,
    
  },

  /* Categoría + Información nutricional */

  /* Categoría */

  categoryBox: {
    width: "55%",
    height: 140,
    flex: 1,
  },

  /* Imagen de información nutricional */

  nutritionalBox: {
    width: "45%",
    height: 160,
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
  },
  
});

export default Product;
