import 'react-native-gesture-handler';
import { AppLoading } from "expo";
import React, {useState } from "react";
import * as Font from "expo-font";


import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';



import rootReducer from './redux/reducers/rootReducer'
import MainNavigation from './MainNavigation';

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
    </Provider>

   )
  } else {
    return (
      <Provider store={myStore}>
        <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
      </Provider>
    );
  }
}



export default App