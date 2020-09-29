import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles'

export default function Products({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Button style={globalStyles.buttons}
        title="Preguntas Frecuentes"
        onPress={() => navigation.navigate("Faq")}
      />
      <Text>Soy Products</Text>
      <StatusBar style="auto" />
    </View>
  );
}


