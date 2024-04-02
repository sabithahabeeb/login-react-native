import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
// import { Text, View } from 'react-native'
import Login from './screen/Login'
import Signup from './screen/Signup'
import Uiscreen from './screen/Uiscreen'
import Home from './screen/Home'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
      <Stack.Screen name='ui' component={Uiscreen} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='signup' component={Signup}/>
        <Stack.Screen name='home' component={Home}/>
      </Stack.Navigator>

     </NavigationContainer>
  )
}

export default App