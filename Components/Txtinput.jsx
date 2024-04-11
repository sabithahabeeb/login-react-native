import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'




const Txtinput = ({ control, name, secureTextEntry, placeholder, rules = {} }) => {
  return (

   <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <>
            <View style={[styles.text, {borderColor:error?'red':'white'}]}>
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
                style={styles.textinput}
                name={name}
                placeholder={placeholder} />
            </View>
           {error &&( <Text style={{color:'red' ,alignSelf:'stretch'}}>{error.message  || 'Error'}</Text>)}
          </>
        )}
  
      />
  
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