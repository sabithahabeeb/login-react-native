import axios from 'axios';
import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const BASE_URL = 'https://api.dev.returnredirect.com'



function Signup({ navigation }) {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPasswrod,setConfirmPassword] = useState('')

    const handleSignup = async ()=>{
        if (!name ||!email || !phoneNumber || !password || !confirmPasswrod) {
            Alert.alert("Please fill in all fields");
            return;
        }
        if (password !== confirmPasswrod) {
            Alert.alert("Passwords do not match");
            return;
        }
        try{
           const response = await fetch(`${BASE_URL}/api/1.0/auth/signup`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'device-id': 'd12121',
                'app-type': 'web'
            },
            body:JSON.stringify({
                name,
                email,
                phoneNumber,
                password,
                confirmPasswrod
            })
           })
           const data = await response.json()
           if(response){
            navigation.navigate("login")
            console.log("signup succesful");
            
           }else{
            console.log("fail");
           }
        }catch(err){
            console.log(err);
        }
    }
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.box}>
                    <View style={styles.header} >
                        <MaterialCommunityIcons name="arrow-left" color={'white'} size={32}  onPress={()=>navigation.navigate("login")} />
                        <Text style={styles.text} > Sign Up</Text>
                    </View>
                    <View style={styles.login}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20 }}>
                            <TextInput placeholder='Name' style={styles.textinput} value={name} onChangeText={setname} />
                            <TextInput placeholder='Email' style={styles.textinput} value={email} onChangeText={setemail} />
                            <TextInput placeholder='PhoneNumber' style={styles.textinput} value={phoneNumber} onChangeText={setPhoneNumber} />
                            <TextInput placeholder='Password' style={styles.textinput} secureTextEntry={true} value={password} onChangeText={setPassword} />
                            <TextInput placeholder='ConfirmPassword' style={styles.textinput} secureTextEntry={true} value={confirmPasswrod} onChangeText={setConfirmPassword} />
                            {/* <Button title='Signup' color={'black'} style={{ padding: 80, fontSize: 40 }}  ></Button> */}
                            <Pressable style={styles.button} onPress={handleSignup} >
                                <Text style={{color:'white',fontSize:15}}>Sign Up</Text>
                            </Pressable>
                            <Text>You have an account?<Text style={{textDecorationLine:'underline'}} onPress={() => navigation.navigate("login")}>Login</Text></Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',

        height: '100%',
        width: '100%'
    },
    box: {
        height: '100%',
        width: '100%',
        top: 0,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 50,
        margin: 30
    },
    text: {
        fontSize: 40,
        color: 'white',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10

    },
    login: {
        width: '160%',
        height: '80%',
        backgroundColor: '#e5eae7',
        marginTop: 80,
        borderWidth: 4,
        borderColor: 'black',
        borderTopLeftRadius: 150,
        alignItems: 'center',
    },
    textinput: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'white',
        backgroundColor: 'white',
        // marginTop:50,
        fontSize: 15,
        color: 'black'

    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 95,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        
      },
})
export default Signup