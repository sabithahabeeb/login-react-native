import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Card = ({image,title,details}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri : image}} style={styles.coverImage} />
            <View style={styles.heading}>
                <Text style={styles.title}>{title}</Text>
                <Text style={{ color: 'gray' }}>with {details}</Text>
            </View>
            <View style={styles.rate}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>$4.53</Text>
                <View style={styles.plus}><Entypo name="plus" color={'white'} size={22} /></View>
            </View>
            <View style={styles.star}>
                <AntDesign name="star" color={'gold'} size={12} />
                <Text style={{fontSize:15,fontWeight:800,color:'white'}} >4.8</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        margin:5,
       backgroundColor:'#f8faf9',
       justifyContent:'center',
       alignItems:'center',
       padding:5,
       width:'50%',
       borderRadius:20
       


    },
    coverImage: {
        height: 150,
        borderRadius: 20,
        width: "100%",
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
        height: 60,
        padding: 5,
        width:'100%',
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start'
        
    },
    plus: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: '#bd9660',
        borderRadius: 5,
        //   margin:10,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rate: {
        // flex:1,
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    star: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position:'absolute',
        top:15,
        left:5,
        // borderWidth:1,
        borderBottomRightRadius:10,
        borderTopLeftRadius:20,
        backgroundColor: '#00000080',
        padding:3
        
        
    }
    
})