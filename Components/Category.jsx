import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
    return (
        <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <Text style={[styles.categorytext, selectedCategory === item && styles.selectedColor]} >{item}</Text>
        </TouchableOpacity>
    )
}

export default Category

const styles = StyleSheet.create({
    categorytext: {
        fontSize: 16,
        fontWeight: "600",
        // color:'white',
        color: '#938F8F',
        // backgroundColor:'#bd9660',
        backgroundColor: '#DFDCDC',
        textAlign: 'center',
        borderRadius: 16,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    selectedColor:{
        color:'white',
        backgroundColor:'#bd9660'
    }
})