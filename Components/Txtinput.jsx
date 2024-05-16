import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'




const Txtinput = ({ name, secureTextEntry, placeholder, value,onChangeText }) => {
  return (

   <>
      <View style={styles.text}>
              <TextInput
                onChangeText={onChangeText}
                
               value={value}
                secureTextEntry={secureTextEntry}
                style={styles.textinput}
                name={name}
                placeholder={placeholder} />
            </View>
  
   </>

  )
}

const styles = StyleSheet.create({
  text: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    // borderColor:'red',
    borderWidth:1
  },
  // textinput:{
  //     backgroundColor: 'white',
  //     fontSize: 15,
  //     height: 40,
  //     color: 'black'
  // }
})

export default Txtinput