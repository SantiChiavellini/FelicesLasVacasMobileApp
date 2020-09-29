import 'react-native-gesture-handler';
import { AppNavigator } from "./routes/AppNavigator";
import { AppLoading } from "expo";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";


const getFonts = () =>
  Font.loadAsync({
    "karla-regular": require("./assets/fonts/Karla-Regular.ttf"),
    "karla-bolditalic": require("./assets/fonts/Karla-BoldItalic.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <AppNavigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
