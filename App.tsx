import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from './screen/Login'
import Signup from './screen/Signup'
import Uiscreen from './screen/Uiscreen'
import Home from './screen/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';



const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#bd9660',
        // tabBarInactiveTintColor: 'gray',
        headerShown:false
        
      }}
    >
      <Tab.Screen name='u' component={Home} options={{
        tabBarIcon: () => <Foundation name='home' color={'#bd9660'} size={29} />
      }} />
      <Tab.Screen name='log' component={Login} options={{
        tabBarIcon: () => <Ionicons name='heart-half-sharp' color={'gray'} size={29} />
      }} />
      <Tab.Screen name='sign' component={Signup} options={{
        tabBarIcon: () => <Ionicons name='bag' color={'gray'} size={29} />
      }} />

      <Tab.Screen name='hm' component={Uiscreen} options={{
        tabBarIcon:()=><Octicons name='bell-fill' color={'gray'} size={29}/>
      }}  />

    </Tab.Navigator>
  )

}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ui' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='ui' component={Uiscreen} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='signup' component={Signup} />
        <Stack.Screen name='home' component={HomeTabNavigator} />
      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default App