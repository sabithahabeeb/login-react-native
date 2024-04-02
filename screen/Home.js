import { View, Text, StyleSheet, ScrollView, Image, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Category from '../Components/Category';



const profile = require('../img/profile.jpg')
const frame = require('../img/Frame.png')
const categories = ['Cappuccino', 'Macchiato', 'Latte', 'Americano']
const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState(null)

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <View>
                        <Text style={{ color: 'gray' }}>Location</Text>
                        <Text style={{ color: 'white', fontSize: 15 }}>Bilzen, Tanjungbalai  <AntDesign style={{ margin: 20 }} name="down" color={'white'} size={12} />
                        </Text>
                    </View>
                    <View>
                        <Image source={profile} style={{ height: 70, width: 70, borderRadius: 10 }} />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.search}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign style={{ margin: 20 }} name="search1" color={'white'} size={22} />
                            <TextInput style={{ fontSize: 20 }} placeholder='search coffee' placeholderTextColor={'gray'}>

                            </TextInput>
                        </View>

                        <View style={styles.slider}>
                            <FontAwesome6 name="sliders" color={'white'} size={22} />
                        </View>
                    </View>
                    <Image source={frame} style={styles.frameImage} />
                    <View style={styles.whiteBckground}>
                        <View style={{ marginTop: 100 }}>
                            <FlatList data={categories}
                                renderItem={({ item }) => (
                                    <Category
                                        item={item}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={setSelectedCategory}
                                    />
                                )}
                                keyExtractor={(item) => item}
                                horizontal={true}
                            />
                            {/* <Category/> */}

                        </View>

                    </View>
                </View>


            </View>
            <View styles={styles.bottom}>
                <Text>sdfgn</Text>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    bottom: {
        flex: 3,
        backgroundColor: 'white'
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        margin: 20
    },
    search: {
        padding: 1,
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#4f4a46',
        borderRadius: 20,
        alignItems: 'baseline',
        justifyContent: 'space-between',
        margin: 30
    },
    slider: {
        padding: 18,
        backgroundColor: '#bd9660',
        borderRadius: 20,
        marginTop: 2,
        marginEnd: 2
    },
    frameImage: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        top: -80,
        zIndex: 1,
        marginTop: 40

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