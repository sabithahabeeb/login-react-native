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
import Feather from 'react-native-vector-icons/Feather';
import Screen1 from './Components/Screen1'
import Screen2 from './Components/Screen2'
import Screen3 from './Components/Screen3'
import { StyleSheet, View } from 'react-native'




const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#bd9660',
        headerShown: false,
        tabBarStyle:{height:60}

      }}
    
    >
      <Tab.Screen name='u' component={Home} options={{
        tabBarIcon: ({ focused }) => <Foundation name='home' color={focused ? '#bd9660' : 'gray'} size={29} />,
        // tabBarLabel: ({ focused }) => (focused ? <Entypo name='minus' color={focused ? '#bd9660' : 'gray'} size={29} /> : null)
        tabBarLabel:({focused})=>(<View style={focused?styles.focus:styles.nofocus}></View>)
      }} />
      <Tab.Screen name='screen1' component={Screen1} options={{
        tabBarIcon: ({ focused }) => <Ionicons name='heart-half-sharp' color={focused ? '#bd9660' : 'gray'} size={29} />,
        tabBarLabel: ({ focused }) => (focused ? <Feather name='minus' color={focused ? '#bd9660' : 'gray'} size={29} /> : null)


      }} />
      <Tab.Screen name='screen2' component={Screen2} options={{
        tabBarIcon: ({ focused }) => <Ionicons name='bag' color={focused ? '#bd9660' : 'gray'} size={29} />,
        tabBarLabel: ({ focused }) => (focused ? <Feather name='minus' color={focused ? '#bd9660' : 'gray'} size={29} /> : null)

      }} />

      <Tab.Screen name='screen3' component={Screen3} options={{
        tabBarIcon: ({ focused }) => <Octicons name='bell-fill' color={focused ? '#bd9660' : 'gray'} size={29} />,
        tabBarLabel: ({ focused }) => (focused ? <Feather name='minus' color={focused ? '#bd9660' : 'gray'} size={29} /> : null)

      }} />

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


const styles = StyleSheet.create({
focus:{
  height:5,
  width:5,
  backgroundColor:'#bd9660'
},
nofocus:{
  width: 10, // Example width for unfocused state
  height: 3, // Example height for unfocused state
  backgroundColor: 'gray',
}
})

export default App