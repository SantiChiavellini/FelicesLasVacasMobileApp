import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";

const Product = (props) => {

    return(
    <View>
        <Text>
            Hi
            {props.route.params.name}
        </Text>
    </View>
    )

};

const styles = StyleSheet.create({
  titleBox: {
    minHeight: 110,
  },
  slot: {
    minHeight: 30,
    alignItems: 'flex-end',
    marginTop: 10,
    fontSize: 20,

  },
});

export default Product;