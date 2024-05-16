import { View, Text, Image, StyleSheet, Pressable, ScrollView, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const image = require('../img/background.webp')


const Uiscreen = ({ navigation }) => {
  return (

    (<ImageBackground source={require('../img/background.webp')} style={styles.container} >
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.txt}>Let's Get Started!</Text>
          <Image source={require('../img/signup.webp')} style={styles.image} />
          <Pressable style={styles.button} onPress={() => { navigation.navigate("signup"); console.log("signup") }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }} >
              SIGN UP
            </Text>
          </Pressable>
          <Text style={styles.text1}>Already have an account?<Text style={{ color: 'orange' }} onPress={() => navigation.navigate("login")}>Log In</Text></Text>
        </View>
      </ScrollView>
    </ImageBackground>)
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 35,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    paddingTop: 50
  },
  text1: {
    marginTop: 10,
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    lineHeight: 25
  },
  button: {

    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: 'orange',

  },
  image: {
    width: 400,
    height: 500,
    resizeMode: 'contain',
  }
})

export default Uiscreen