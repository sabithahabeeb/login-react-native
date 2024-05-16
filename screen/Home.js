import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Btn from '../Components/Btn'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

const Home = ({navigation}) => {
  const handleLogout= async()=>{
    await signOut(auth)
    Alert.alert("Logout successful")
    navigation.navigate("ui")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>      
      <Btn onPress={handleLogout}>Logout</Btn>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
      fontSize:30,
     
      color:'black',
      padding:40
    }
})