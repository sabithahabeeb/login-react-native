import React from 'react'
import { Button, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



function Signup({ navigation }) {
    
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
                            <TextInput placeholder='Name' style={styles.textinput} />
                            <TextInput placeholder='Email' style={styles.textinput} />
                            <TextInput placeholder='Password' style={styles.textinput} secureTextEntry={true} />
                            <TextInput placeholder='ConfirmPassword' style={styles.textinput} secureTextEntry={true} />
                            {/* <Button title='Signup' color={'black'} style={{ padding: 80, fontSize: 40 }}  ></Button> */}
                            <Pressable style={styles.button} >
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