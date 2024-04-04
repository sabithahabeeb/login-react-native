import { View, Text, StyleSheet, ScrollView, Image, TextInput, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Category from '../Components/Category';
import Card from '../Components/Card';
import axios from 'axios';
import { HomeTabNavigator } from '../App';



const profile = require('../img/profile.jpg')
const frame = require('../img/Frame.png')
const categories = ['Hot', 'Cappuccino', 'Machiato', 'Latte', 'Americano']
const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState(null)
    const [cards, setCards] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        if (selectedCategory === 'Hot') {
            fetchData('hot')
        } else {
            setCards([])
        }


    }, [selectedCategory])


    const fetchData = async (category) => {
        try {
            const response = await fetch(`https://api.sampleapis.com/coffee/${category}`)
            const data = await response.json()
            setCards(data)
        }
        catch (err) {
            console.log(err);
        }
    }

    const serchCard = (item) => {
        return item.title.toLowerCase().includes(search.toLowerCase())

    }

    return (
        <>
            <View style={styles.container}>
                
                <View style={styles.top}>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: 'gray' }}>Location</Text>
                        <Text style={{ color: 'white', fontSize: 15 }}>Bilzen, Tanjungbalai  <AntDesign style={{ margin: 20 }} name="down" color={'white'} size={12} />
                        </Text>
                    </View>
                    <View style={{ marginRight: 15 }}>
                        <Image source={profile} style={{ height: 70, width: 70, borderRadius: 10 }} />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.search}>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign style={{ margin: 20 }} name="search1" color={'white'} size={22} />
                            <TextInput style={{ fontSize: 20, color: 'white' }} placeholder='search coffee' placeholderTextColor={'gray'} onChangeText={setSearch} value={search}>

                            </TextInput>
                        </View>

                        <View style={styles.slider}>
                            <FontAwesome6 name="sliders" color={'white'} size={22} />
                        </View>
                    </View>
                    <Image source={frame} style={styles.frameImage} />
                    <View style={styles.whiteBckground}>
                        <View style={{ marginTop: 70 }}>
                            <FlatList data={categories}
                                renderItem={({ item }) => (
                                    <Category
                                        item={item}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={setSelectedCategory}
                                    />

                                )


                                }
                                keyExtractor={(item) => item}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />


                        </View>

                    </View>
                </View>


            </View>
            <View style={styles.bottom}>
                <FlatList
                    data={cards.filter(serchCard)}
                    renderItem={({ item }) => <Card title={item.title} image={item.image} details={item.ingredients[0]} />}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />
            </View>

            {/* <HomeTabNavigator /> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    bottom: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        margin: 5,
        marginTop: 120
    },
    top: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 40,
        // paddingHorizontal:40

    },
    search: {

        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#4f4a46',
        borderRadius: 20,
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    slider: {
        padding: 16,
        backgroundColor: '#bd9660',
        borderRadius: 20,
        marginTop: 2,
        marginRight: 4
    },
    frameImage: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        top: -80,
        zIndex: 1,
        marginTop: 50

    },
    whiteBckground: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        height: '50%',
        bottom: 0,
        zIndex: 0,

    },

})

export default Home