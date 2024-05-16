import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from './screen/Login'
import Signup from './screen/Signup'
import Uiscreen from './screen/Uiscreen'
import { StyleSheet, View } from 'react-native'
import Home from './screen/Home'
import UseAuth from './hooks/UseAuth'

const Stack = createNativeStackNavigator()
// const {user} = UseAuth()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ui' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='ui' component={Uiscreen} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='signup' component={Signup} />
        <Stack.Screen name='home' component={Home} />
  
       


      </Stack.Navigator>

    </NavigationContainer>

  )
}


const styles = StyleSheet.create({

})

export default App