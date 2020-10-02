import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Button } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../styles/globalStyles";
import productsActions from "../redux/actions/productsActions";
import CardItem from "../shared/CardItem";
import { color } from "react-native-reanimated";
import { Navigation } from "swiper";

function Products(props, { navigation }) {
  useEffect(() => {
    const bringProducts = async () => {
      await props.getProducts();
    };
    bringProducts();
  }, []);

  console.log(props.products);

  return (
    <>
      <View style={globalStyles.container}>
        <Text>Soy Products</Text>
        <StatusBar style="auto" />

        {/* FlatList con los productos */}
        <View style={styles.container}>
          <FlatList
            key={"#"}
            numColumns={2}
            data={props.products}
            renderItem={({ item }) => (
              <View style={styles.boxItem}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Product', item)}>
                  <CardItem product={item} />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => "#" + item._id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    padding: 7,
    marginTop: StatusBar.currentHeight || 0,
  },
  boxItem: {
    width: "50%",
    height: "50%",
    padding: 7,
  },
  title: {
    fontSize: 32,
  },
  text: {
    fontSize: 20,
    color: "black",
    height: 40,
  },
});

const mapDispatchToProps = {
  getProducts: productsActions.getProducts,
};

const mapStateToProps = (state) => {
  return {
    products: state.productsRed.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
