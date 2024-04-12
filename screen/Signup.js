import axios from 'axios';
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Txtinput from '../Components/Txtinput';
import Btn from '../Components/Btn';
import { useForm } from 'react-hook-form';

const BASE_URL = 'https://api.dev.returnredirect.com'

const EMAIL_REG = /^[a-zA-Z0-9. !#$%&'*+/=?^_`{|}-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/

function Signup({ navigation }) {
    // const [name, setname] = useState('')
    // const [email, setemail] = useState('')
    // const [phoneNumber, setPhoneNumber] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPasswrod, setConfirmPassword] = useState('')

    const {control,handleSubmit,watch} = useForm()
    const pwd = watch('password')

    const handleSignup = async (data) => {
        if (!data.name || !data.email || !data.phoneNumber || !data.password || !data.confirmPassword) {
            Alert.alert("Please fill in all fields");
            return;
        }
        // if (password !== confirmPasswrod) {
        //     Alert.alert("Passwords do not match");
        //     return;
        // }
        try {
            const response = await fetch(`${BASE_URL}/api/1.0/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'device-id': 'd12121',
                    'app-type': 'web'
                },
                body: JSON.stringify({
                   data
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
                        <Txtinput
                         name="name" 
                         control={control}
                          placeholder="Username"
                          rules={{
                            required: 'Username is required',
                            minLength:{
                                value: 3,
                                message: 'Username should be at least 3 charecters long'
                            },
                            maxLength:{
                                value:24,
                                message: 'USername should be max 24 charecters long'
                            }
                          }}
                           />

                        <Txtinput 
                        name="email" 
                        control={control} 
                        placeholder="Email"
                        rules={{
                            required: 'Email is Required',
                            pattern: {value:EMAIL_REG,message:'Email is Invalid'}
                        }}
                        
                        />
                        <Txtinput name="phoneNumber" 
                        control={control}
                         placeholder="PhoneNumber"
                         rules={{
                            required: 'PhoneNumber is required',
                            minLength:{
                                value: 10,
                                message: 'PhoneNumber should be at least 10 charecters long'
                            }
                          }}
                          />
                        <Txtinput 
                        name="password"
                         control={control} 
                         placeholder="Password"
                          secureTextEntry={true} 
                          rules={{
                            required: 'Password is required',
                            minLength:{
                                value: 6,
                                message: 'Password should be at least 6 charecters long'
                            }
                          }}
                          />
                        <Txtinput  name="confirmPassword"
                         control={control}
                          placeholder="ConfirmPassword"
                           secureTextEntry={true} 
                           rules={{
                            validate: value=>value === pwd || 'Password do not match'
                           }}
                           />

                        <Btn onPress={handleSubmit(handleSignup)}>Sign Up</Btn>
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