import axios from 'axios';
import React, { useState } from 'react'
import { Alert, ImageBackground, ScrollView, StyleSheet, Text, View ,Image} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Txtinput from '../Components/Txtinput';
import Btn from '../Components/Btn';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import{getDatabase,ref,set} from 'firebase/database'

// import auth from '@react-native-firebase/auth';

function Signup({ navigation }) {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = async ()=>{
        if(email && password ){
            try{
             const userCredential= await createUserWithEmailAndPassword(auth, email,password)
              const userId = userCredential.user.uid
            //   store user data in the firebase realtime Database
            const database = getDatabase()
            await set(ref(database, 'users/'+ userId),{
                username: name,
                email: email
            })
            
            //    Alert.alert("Account created")
               navigation.navigate("login")
               setName('')
               setPassword('')
               setEmail('')

            }catch (err) {
                console.log(`got error, ${err}`);
                if (err.code === 'auth/email-already-in-use') {
                  Alert.alert('Email already exists');
                } else {
                  Alert.alert('Error creating account', err.message);
                }
              }
        }
    }
    return (

    <ImageBackground source={require('../img/background.webp')} style={{flex:1}} >
            <ScrollView   >
    
                <View style={styles.container}>
    
                    <View style={styles.top}>
                        <MaterialCommunityIcons name="arrow-left" color={'white'} size={32} onPress={() => navigation.navigate("ui")} />
                        <Image source={require('../img/loged.png')} style={styles.image}/>
                    </View>
                    <View style={styles.login}>
    
                        <View style={styles.form}>
                            <Txtinput
                             name="name" 
                              placeholder="Username"
                              value={name}
                              onChangeText={value =>setName(value)}
                              />
                            <Txtinput 
                            name="email" 
                            placeholder="Email"
                            value={email}
                              onChangeText={value =>setEmail(value)}
                            />
                            <Txtinput 
                            name="password"
                             placeholder="Password"
                              secureTextEntry={true}
                              value={password}
                              onChangeText={value =>setPassword(value)}
                              />
                           
    
                            <Btn onPress={handleSubmit} >Sign Up</Btn>
                        </View>
                        <View>
    
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>You have an account?<Text style={{ textDecorationLine: 'underline' ,color:'orange'}} onPress={() => navigation.navigate("login")}>Login</Text></Text>
                        </View>
    
                    </View>
    
    
                </View>
            </ScrollView>
    </ImageBackground >
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    top: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'


    },
    form: {
        display: 'flex',
        rowGap: 20,
        padding: 20,
        marginTop: 30
    },

    text: {

        fontSize: 40,
        color: 'white',

        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        margin: 40

    },
    login: {
        flex: 7,
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
export default Signup