import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const image = require('../img/image.png')


const Uiscreen = ({ navigation ,}) => {
  const [showGetStarted, setShowgetStarted] = useState(true)


  useEffect(() => {
    AsyncStorage.getItem('showGetStarted').then((value) => {
      if (value != null && value === 'false') {
        setShowgetStarted(false)
        navigation.navigate("login")
      }
    })
  }, [])

  const handleGetStarted = () => {
    AsyncStorage.setItem('showGetStarted', 'false').then(() => {
      setShowgetStarted(false)
      navigation.navigate('login')
    })
  }

  return (
showGetStarted?
   ( <View style={styles.container} >
      <ScrollView>
        <Image source={image} style={{ width: 400, height: 400 }} />
        <Text style={styles.txt} >Coffee so good,{"\n"}your taste buds{"\n"}  will love it. </Text>
        <Text style={styles.text1} >The best grain, the finest roast, the {"\n"}powerful flavor.</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Pressable style={styles.button} onPress={handleGetStarted} >
            <Text style={{ color: 'white' }}>
              Get Started
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>):<View>
    <Text>null</Text>
    </View>
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
    fontSize: 45,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  },
  text1: {
    marginTop: 10,
    fontSize: 15,
    color: 'gray',
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
    backgroundColor: '#bd9660',

  },
})

export default Uiscreen