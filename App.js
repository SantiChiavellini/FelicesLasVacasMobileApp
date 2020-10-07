import 'react-native-gesture-handler';
import { AppLoading } from "expo";
import React, {useState } from "react";
import * as Font from "expo-font";


import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';



import rootReducer from './redux/reducers/rootReducer'
import MainNavigation from './MainNavigation';
import FlashMessage from "react-native-flash-message";



const myStore = createStore(rootReducer, applyMiddleware(thunk))


const getFonts = () =>
  Font.loadAsync({
    "karla-regular": require("./assets/fonts/Karla-Regular.ttf"),
    "karla-bolditalic": require("./assets/fonts/Karla-BoldItalic.ttf"),
  }) 

const App= (props) => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  
  if (fontsLoaded) {
   
    return(

    <Provider store={myStore}>
      <MainNavigation />
      <FlashMessage position="top" />
    </Provider>

   )
  } else {
    return (

        <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />

    );
  }
}



export default App