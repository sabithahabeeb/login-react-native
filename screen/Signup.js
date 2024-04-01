import axios from 'axios';
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Txtinput from '../Components/Txtinput';
import Btn from '../Components/Btn';

const BASE_URL = 'https://api.dev.returnredirect.com'



function Signup({ navigation }) {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPasswrod, setConfirmPassword] = useState('')

    const handleSignup = async () => {
        if (!name || !email || !phoneNumber || !password || !confirmPasswrod) {
            Alert.alert("Please fill in all fields");
            return;
        }
        if (password !== confirmPasswrod) {
            Alert.alert("Passwords do not match");
            return;
        }
        try {
            const response = await fetch(`${BASE_URL}/api/1.0/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'device-id': 'd12121',
                    'app-type': 'web'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phoneNumber,
                    password,
                    confirmPasswrod
                })
            })
            const data = await response.json()
            if (response) {
                Alert.alert("signup successfull")
                navigation.navigate("login")
                console.log("signup succesful");

            } else {
                console.log("fail");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (

        <ScrollView   >

            <View style={styles.container}>

                <View style={styles.top}>
                    <MaterialCommunityIcons name="arrow-left" color={'white'} size={32} onPress={() => navigation.navigate("login")} />
                    <Text style={styles.text} >Sign Up</Text>
                </View>
                <View style={styles.login}>

                    <View style={styles.form}>
                        <Txtinput value={name} onChangeText={setname} >Name</Txtinput>

                        <Txtinput value={email} onChangeText={setemail} >Email</Txtinput>
                        <Txtinput value={phoneNumber} onChangeText={setPhoneNumber} >Phone Number</Txtinput>
                        <Txtinput value={password} onChangeText={setPassword} secureTextEntry={true} >Password</Txtinput>
                        <Txtinput value={confirmPasswrod} onChangeText={setConfirmPassword} secureTextEntry={true} >Confirm Password</Txtinput>

                        <Btn onPress={handleSignup}>Sign Up</Btn>
                    </View>
                    <View>

                        <Text style={{ textAlign: 'center', marginTop: 10 }}>You have an account?<Text style={{ textDecorationLine: 'underline' }} onPress={() => navigation.navigate("login")}>Login</Text></Text>
                    </View>

                </View>


            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'black'
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
        backgroundColor: '#ececec',
        borderTopStartRadius: 100,
        textAlign: 'center'


    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})
export default Signup