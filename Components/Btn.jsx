import { View, Text, Pressable,StyleSheet } from 'react-native'
import React from 'react'

const Btn = ({children,onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
    <Text style={{color:'white', fontSize:30,fontWeight:'bold'}} >
        {children}
    </Text>
    
   </Pressable>
  )
}

const styles = StyleSheet.create({
    button:{
        height: 70,
        backgroundColor: 'orange',
        borderRadius: 10,
        fontWeight:'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding:10
    }
})

export default Btn