import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from './screen/Login'
import Signup from './screen/Signup'
import Uiscreen from './screen/Uiscreen'
import { StyleSheet, View } from 'react-native'
import Home from './screen/Home'
import UseAuth from './hooks/UseAuth'
import Chat from './screen/Chat'

const Stack = createNativeStackNavigator()
// const {user} = UseAuth()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ui' >
        <Stack.Screen name='ui' component={Uiscreen} options={{ headerShown: false }}  />
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name='signup' component={Signup}options={{ headerShown: false }} />
        <Stack.Screen name='home' component={Home} options={{
          title:'whats app'
        }} />
        <Stack.Screen name='chat' component={Chat} />

       


      </Stack.Navigator>

    </NavigationContainer>

  )
}


const styles = StyleSheet.create({

})

export default App