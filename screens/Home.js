import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from "react-redux";

function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Button style={globalStyles.buttons}
        title="Productos"
        onPress={() => navigation.navigate("Products")}
      />
      <Button style={globalStyles.buttons}
        title="Faqs"
        onPress={() => navigation.navigate("Faq")}
      />
      <Button style={globalStyles.buttons}
        title="Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Text style={globalStyles.titleText}>Soy el Home.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const mapDispatchToProps = {
  
}

export default connect(null, mapDispatchToProps) (Home)