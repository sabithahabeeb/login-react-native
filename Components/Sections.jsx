import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';


const Sections = ({img,city,country,place}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgContent}>
                <Image source={img} style={styles.image} />
                <View style={{ marginLeft: 5 }}>
                    <Text style={{ color: 'black' ,fontSize:15,fontWeight:'bold'}}>{city},{country}</Text>
                    <Text style={{ color: 'gray' }}>{place}</Text>
                </View>
            </View>
            <View style={{justifyContent:'flex-end',alignItems:'flex-end',paddingBottom:18}}>
        
                    <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>
                        $5-$-24
                    </Text>
               
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="star" color={'gold'} size={12} />
                    <Text style={{color:'black'}}>4.3</Text>
                </View>

            </View>
        </View>
    )
}

export default Sections

const styles = StyleSheet.create({

    image: {
        height: 70,
        width: 70,
        resizeMode: 'cover',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 100
    },
    imgContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end'
    }
})