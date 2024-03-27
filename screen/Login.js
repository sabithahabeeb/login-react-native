import React from 'react'
import { Button, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';



function Login({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.box}>
                    <View><Text style={styles.text} >Company Logo</Text></View>

                    <View style={styles.login}>
                        <Text style={{ fontSize: 40, color: 'black', fontWeight: 600, marginTop: 40 }} >Login</Text>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <TextInput placeholder='Email' style={styles.textinput} />
                            <TextInput placeholder='Password' style={styles.textinput} secureTextEntry={true} />
                        </View>
                      <View>
                            <Pressable style={styles.button} >
                                <Text style={{ color: 'white', fontSize: 15 }}>Login</Text>
                            </Pressable>
                            <Text style={{textAlign:'center',paddingTop:10}}>or Login with</Text>
                            <View style={styles.header} >
                                <AntDesign style={{ margin: 20 }} name="facebook-square" color={'black'} size={22} />
                                <AntDesign style={{ margin: 20 }} name="instagram" color={'black'} size={22} />
                                <AntDesign style={{ margin: 20 }} name="twitter" color={'black'} size={22} />
                            </View>
                            <Text>Don't have any account?<Text style={{ textDecorationLine: 'underline' }} onPress={() => navigation.navigate("signup")}>signup</Text></Text>
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
        alignItems: 'center',
        padding: 50,
        margin: 30
    },

    text: {
        fontSize: 20,
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10

    },
    login: {
        width: '160%',
        height: '200%',
        backgroundColor: '#e5eae7',
        marginTop: 80,
        borderWidth: 4,
        borderColor: 'black',
        borderTopLeftRadius: 150,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'


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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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

export default Login