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
        {/* <Image
          style={styles.imageBanner}
          source={require("../assets/Images/productos.jpg")}
        /> */}

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
            {/* Categoría */}
            <View style={styles.categoryBox}>
              {/* Nombre del producto */}
              <Text style={styles.title}>{props.route.params.name}</Text>
              <Text style={styles.text}>
                Categoría: Productos {props.route.params.category}
              </Text>
            </View>
          </View>

          <View style={styles.descriptionBox}>
            <Text style={styles.destacatedText}>Descripción:</Text>
            <Text style={styles.text}>{props.route.params.description}</Text>
          </View>

          {/* Imagen de información nutricional */}
          <View style={styles.nutritionalBox}>
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
    alignItems: "flex-start",
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
    width: "100%",
    height: 390,
    resizeMode: "stretch",
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
});

export default Product;
