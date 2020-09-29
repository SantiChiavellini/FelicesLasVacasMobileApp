import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles'

export default function Faq({ navigation }) {
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
      <Text>Preguntas Frecuentes</Text>
      <StatusBar style="auto" />
    </View>
  );
}

