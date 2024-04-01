import { View, Text, Pressable,StyleSheet } from 'react-native'
import React from 'react'

const Btn = ({children,onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
    <Text style={{color:'white', fontSize:25}} >
        {children}
    </Text>
    
   </Pressable>
  )
}

const styles = StyleSheet.create({
    button:{
        height: 70,
        backgroundColor: 'black',
        borderRadius: 10,
        borderTopEndRadius: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Btn