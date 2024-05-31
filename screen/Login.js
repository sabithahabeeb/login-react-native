import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { Alert, Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Txtinput from '../Components/Txtinput';
import Btn from '../Components/Btn';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

function Login({ navigation }) {
  

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = async ()=>{
        if(email && password ){
            try{
                
                await signInWithEmailAndPassword(auth, email,password)
            //    Alert.alert("Account created")
               navigation.navigate("home")
            
               setPassword('')
               setEmail('')
               Alert.alert("Login succesfull")

            }catch(err){
              console.log(`got error,${err}`)
              Alert.alert("Invalid Password ")
            }
        }
    }
   
    const windowHeight = Dimensions.get('window').height;
    return (
      <ImageBackground  source={require('../img/background.webp')} style={{flex:1}} >
            <ScrollView   >
    
                <View >
    
                    <View style={styles.top}>
                        <Image source={require('../img/loged.png')} style={styles.image}/>
                       
                    </View>
                    <View style={styles.login}>
                        <Text style={{ fontSize: 40, color: 'white', fontWeight: 800, marginTop: 30, textAlign: 'center' }} >Login</Text>
                        <View style={styles.form}>
    
                            <Txtinput placeholder='Email'  value={email}
                              onChangeText={value =>setEmail(value)}/>
    
                            <Txtinput  secureTextEntry={true} placeholder='Password'  value={password}
                              onChangeText={value =>setPassword(value)}/>
                            <Btn onPress={handleSubmit}  >Login</Btn>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'center', marginTop: 20 }}>Don't have any account?<Text style={{ textDecorationLine: 'underline',color:'orange' }} onPress={() => navigation.navigate("signup")}>signup</Text></Text>
                        </View>
    
                    </View>
    
    
                </View>
            </ScrollView>
      </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
       
    },
    top: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        display: 'flex',
        rowGap: 30,
        padding: 30,
        marginTop: 40
    },

    text: {

        fontSize: 20,
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        margin: 40

    },
    login: {
        flex: 7,
        // backgroundColor: '#ececec',
        borderTopStartRadius: 100,
        textAlign: 'center'


    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
   
    image:{
        width: 300,
        height: 250,
        resizeMode: 'contain',
    }
})



export default Login