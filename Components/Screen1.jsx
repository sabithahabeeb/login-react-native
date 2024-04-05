import { ImageBackground, StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageCity from './ImageCity';
import Sections from './Sections';



const imageArray = [
  { id: '1', image: require('../img/image1.jpeg'), city: 'Kuching', country: 'Malaysia', place: ' Kuching Division' },
  { id: '2', image: require('../img/image2.jpeg'), city: 'Bali', country: 'Indonesia', place: ' Denpasar' },
  { id: '3', image: require('../img/image3.jpeg'), city: 'London ', country: 'Ingland', place: ' London Tower' },
  { id: '4', image: require('../img/image4.jpeg'), city: 'Paris', country: 'France', place: ' Bordeaux' },
  { id: '5', image: require('../img/image5.jpeg'), city: 'Bangok', country: 'Thailand', place: ' Krung Thep Maha Nakhon' },
  { id: '6', image: require('../img/image6.jpeg'), city: 'Delhi', country: 'Akshardham', place: ' india gate' },
]

const Screen1 = () => {
  return (
    <ImageBackground source={require('../img/background.jpg')} style={styles.background}>
      <View style={styles.top}>
        <Text style={{ color: 'white' }}>Hi,Vetrick!</Text>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', textAlign: 'left' }}>Where do you </Text>
        <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', textAlign: 'left' }}>Want to go?</Text>
        <Text style={{ color: '#dce3df', marginTop: 10 }}>We filter out a best place for your next  vacation</Text>

      </View>
      <View style={styles.search}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign style={{ margin: 10 }} name="search1" color={'black'} size={22} />
          <TextInput style={{ fontSize: 20, color: 'white' }} placeholder='search city...' placeholderTextColor={'gray'}>

          </TextInput>
        </View>

      </View>
      <View >
        <FlatList
          data={imageArray}
          renderItem={({ item }) => (<ImageCity img={item.image} city={item.city} country={item.country} />)}

          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black',paddingBottom:10 }} >
          You might like!
        </Text>
        <View>
          <FlatList
            data={imageArray}
            renderItem={({ item }) => (<Sections img={item.image} city={item.city} country={item.country} place={item.place} />)}
          />
          <Sections />
        </View>
      </View>
    </ImageBackground >
  )
}

export default Screen1

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: 10
  },

  search: {

    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: 30
  },
  bottom: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20,
    padding: 10,

  }
})