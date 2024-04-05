import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageCity = ({img,city,country}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={img} style={styles.image}/>
      <View style={{marginTop:5}}>
        <Text style={{color:'white',textAlign:'center'}}>
            {city},
        </Text>
        <Text style={{color:'#a3b0aa',textAlign:'center'}}>
        {country}
        </Text>
      </View>
    </View>

  )
}

export default ImageCity

const styles = StyleSheet.create({
    imageContainer:{
        height:100,
        width:70,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        margin:10
        
    },
    image:{
        height:70,
        width:70,
       resizeMode:'cover',
       borderWidth:2,
       borderColor:'white',
       borderRadius:100
    }
})