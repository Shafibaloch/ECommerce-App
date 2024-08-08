// import React from 'react';
// import Splash from './src/screens/Splash';
// import WelcomeBack from './src/screens/WelcomeBack';
// import Account from './src/screens/Account';
// import Forget from './src/screens/Forget';
// import GetStarted from './src/screens/GetStarted';
// import Home from './src/screens/Home';

// import Indicator from './src/screens/Indicator';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import HomeTwo from './src/screens/HomeTwo';
// import HomeThree from './src/screens/HomeThree';
// import HomeFinal from './src/screens/HomeFinal';
// import HomeFive from './src/screens/HomeFive';
// import HomeSeven from './src/screens/HomeSeven';
// import HomeSix from './src/screens/HomeSix';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const App = () => {
// //   // const {Navigator, Screen} = createNativeStackNavigator();
// //   const Stack = createStackNavigator();
// //   function MyStack(){}
//   return (
//     // <GestureHandlerRootView style={{flex: 1}}>
    
     

//     {/* </GestureHandlerRootView> */}
//     <GestureHandlerRootView style={{flex: 1}}>

//     </GestureHandlerRootView>
    
    

//   );
// };

// export default App;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Account from './src/screens/Account'
import EmailPass from './src/screens/EmailPass'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Home from './src/screens/Home'

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1
  
    }}>
    <EmailPass/>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})
