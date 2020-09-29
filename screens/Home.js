import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Button style={globalStyles.buttons}
        title="Productos"
        onPress={() => navigation.navigate("Products")}
      />
      <Text style={globalStyles.titleText}>Soy el Home.</Text>
      <StatusBar style="auto" />
    </View>
  );
}
