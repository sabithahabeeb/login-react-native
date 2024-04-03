import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { Alert, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Txtinput from '../Components/Txtinput';
import Btn from '../Components/Btn';


const BASE_URL = 'https://api.dev.returnredirect.com'

function Login({ navigation }) {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Please fill in all fields");
            return;
        }

        try {
            const response = await fetch(`${BASE_URL}/api/1.0/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'device-id': 'd12121',
                    'app-type': 'web'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            if (response) {
                Alert.alert("login successfull")
                console.log("login successfull");
                navigation.navigate("home")
                setemail('')
                setPassword('')
                // AsyncStorage.removeItem('showGetStarted').then(() => {
                //     console.log("item removed");
                //     navigation.navigate('ui')
                // }).catch(err => {
                //     console.log(err);
                // })
            } else {
                console.log("login faild");
            }
        } catch (err) {
            console.log(err);
        }
    }

    const windowHeight = Dimensions.get('window').height;
    return (
        <ScrollView   >

            <View style={styles.container}>

                <View style={styles.top}>
                    <Text style={styles.text} >Company Logo</Text>
                </View>
                <View style={styles.login}>
                    <Text style={{ fontSize: 40, color: 'black', fontWeight: 600, marginTop: 30, textAlign: 'center' }} >Login</Text>
                    <View style={styles.form}>

                        <Txtinput value={email} onChangeText={setemail} >Email</Txtinput>

                        <Txtinput value={password} onChangeText={setPassword} secureTextEntry={true} >Password</Txtinput>
                        <Btn onPress={handleLogin}>Login</Btn>
                    </View>
                    <View>

                        <Text style={{ textAlign: 'center', paddingTop: 10 }}>or Login with</Text>
                        <View style={styles.header} >
                            <AntDesign style={{ margin: 20 }} name="facebook-square" color={'black'} size={50} />
                            <AntDesign style={{ margin: 20 }} name="instagram" color={'black'} size={50} />
                            <AntDesign style={{ margin: 20 }} name="twitter" color={'black'} size={50} />
                        </View>
                        <Text style={{ textAlign: 'center', marginTop: 20 }}>Don't have any account?<Text style={{ textDecorationLine: 'underline' }} onPress={() => navigation.navigate("signup")}>signup</Text></Text>
                    </View>

                </View>


            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'black'
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



export default Login