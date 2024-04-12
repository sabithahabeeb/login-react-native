import { StyleSheet, Text, TouchableOpacity, View ,PermissionsAndroid, Image} from 'react-native'
import React, { useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

const Camera = () => {
    const [cameraPhoto,setCameraPhoto] = useState()
    const [galleryPhoto,setGalleryPhoto] = useState()

    const options = {
        saveToPhotos: true,
        mediaType:'photo'
    }

    const openCamera = async()=>{
        console.log('clicked');
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA
        )
        if(granted===PermissionsAndroid.RESULTS.GRANTED){
            const result = await launchCamera(options)
            setCameraPhoto(result.assets[0].uri)
        }
    }

    const openGallery = async()=>{
        const result = await launchImageLibrary(options)
        setGalleryPhoto(result.assets[0].uri)

    }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openCamera}>
        <Text style={styles.text}>
        Open Camera
        </Text>
        </TouchableOpacity>
        {cameraPhoto && (
        <Image style={styles.image} source={{uri:cameraPhoto}}/>

        )}
        <TouchableOpacity style={styles.button} onPress={openGallery}>
        <Text style={styles.text}>
        Open Gallery
        </Text>
        </TouchableOpacity>
        {galleryPhoto && (
            <Image style={styles.image} source={{uri: galleryPhoto}} />
        )}
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        width:'auto',
        paddingVertical:15,
        paddingHorizontal:10,
        backgroundColor:'#da5767',
        borderRadius:10,
        margin:15
    },
    text:{
        fontSize:15,
        fontWeight:'bold',
        color:'white'
    },
    image:{
        height:200,
        width:200,
        resizeMode:'contain'
    }
})