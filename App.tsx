import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
// import { Text, View } from 'react-native'
import Login from './screen/Login'
import Signup from './screen/Signup'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='signup' component={Signup}/>
      </Stack.Navigator>

     </NavigationContainer>
  )
}

export default App