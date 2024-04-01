import { View, Text,TextInput ,StyleSheet} from 'react-native'
import React from 'react'


const Txtinput = ({children , secureTextEntry,value,onChangeText}) => {
  return (
    <View style={styles.text}>
    <Text style={{ color: 'black', fontSize: 20 }}>{children}</Text>
          <TextInput value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} style={styles.textinput} />
          
  </View>
  )
}

const styles = StyleSheet.create({
    text:{
        height: 75,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
    },
    textinput:{
        backgroundColor: 'white',
        fontSize: 15,
        height: 40,
        color: 'black'
    }
})

export default Txtinput