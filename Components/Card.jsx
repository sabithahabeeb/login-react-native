import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Card = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../img/profile.jpg')} style={styles.coverImage} />
            <View style={styles.heading}>
                <Text style={styles.title}>Cappucino</Text>
                <Text style={{ color: 'gray' }}>with choclate</Text>
            </View>
            <View style={styles.rate}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>$4.53</Text>
                <View style={styles.plus}><Entypo name="plus" color={'white'} size={22} /></View>
            </View>
            <View style={styles.star}>
                <AntDesign name="star" color={'orange'} size={12} />
                <Text >4.8</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        position:'relative'

    },
    coverImage: {
        height: 150,
        borderRadius: 20,
        width: "80%",
        marginVertical: 10,
        marginRight: 10,
        marginLeft: 10
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',

    },
    heading: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
        marginLeft: 20
    },
    plus: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: '#bd9660',
        borderRadius: 5,
        //   margin:10,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rate: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    star: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position:'absolute',
        top:15,
        left:13,
        // borderWidth:1,
        borderBottomRightRadius:10,
        backgroundColor:'transparent',
        
        
    }
    
})