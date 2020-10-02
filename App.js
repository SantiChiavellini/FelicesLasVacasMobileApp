import "react-native-gesture-handler";
import { AppNavigator } from "./routes/AppNavigator";
import { AppLoading } from "expo";
import { Provider as PaperProvider } from "react-native-paper";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import createStore from "./configureStore";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import Faq from "./screens/Faq";
import Home from "./screens/Home";
import Products from "./screens/Products";
import Product from "./screens/Product"

const getFonts = () =>
  Font.loadAsync({
    "karla-regular": require("./assets/fonts/Karla-Regular.ttf"),
    "karla-bolditalic": require("./assets/fonts/Karla-BoldItalic.ttf"),
  });

const Stack = createStackNavigator();

const store = createStore();
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Faq" component={Faq} />
              <Stack.Screen name="Products" component={Products} />
              <Stack.Screen name="Product" component={Product} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
