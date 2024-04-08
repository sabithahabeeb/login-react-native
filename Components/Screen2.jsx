import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Sections from './Sections';



const imageArray = [
  { id: '1', image: require('../img/image1.jpeg'), city: 'Kuching', country: 'Malaysia', place: ' Kuching Division' },
  { id: '2', image: require('../img/image2.jpeg'), city: 'Bali', country: 'Indonesia', place: ' Denpasar' },
  { id: '3', image: require('../img/image3.jpeg'), city: 'London ', country: 'Ingland', place: ' London Tower' },
  { id: '4', image: require('../img/image4.jpeg'), city: 'Paris', country: 'France', place: ' Bordeaux' },
  { id: '5', image: require('../img/image5.jpeg'), city: 'Bangok', country: 'Thailand', place: ' Krung Thep Maha Nakhon' },
  { id: '6', image: require('../img/image6.jpeg'), city: 'Delhi', country: 'Akshardham', place: ' india gate' },
]

const Screen2 = () => {
  return (
    <ImageBackground source={require('../img/background.jpg')} style={styles.background}>
      <View style={styles.top}>
        <View style={styles.icon}>
          <AntDesign name="arrowleft" color={'black'} size={22} />
        </View>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>City Details</Text>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="google-circles-extended" color={'black'} size={22} />

        </View>
      </View>
      <View style={styles.bangok}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
          <View>
            <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>Bangkok</Text>
            <Text style={{ color: 'lightgray' }}>Thailand</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.location}>
              <Entypo name="location-pin" color={'black'} size={30} />
            </View>
            <View style={styles.saved}>
              <AntDesign name="heart" color={'white'} size={22} />
              <Text style={{ color: 'white', marginLeft: 3, fontWeight: 'bold' }}>Saved</Text>
            </View>
          </View >

        </View>
        <View style={{ marginTop: 10, }}>
          <Text style={{ color: '#abb8c3' }}>
            Bangkok, Thailand's capital, is a large city known
          </Text>
          <Text style={{ color: '#abb8c3' }}>
            ornate shrines and street life. The bo<Text style={{ color: 'black', fontWeight: 'bold' }}>Read More</Text>
          </Text>
        </View>
        <View style={styles.line}>

        </View>
        <View style={styles.details}>
          <View style={styles.pop}>
            <Text style={styles.head}>8,305k+</Text>
            <Text>Population</Text>
          </View>
          <View style={styles.hline}></View>
          <View style={styles.pop}>
            <Text style={styles.head}>Thai/Siamese</Text>
            <Text>Language</Text>
          </View>
          <View style={styles.hline}></View>
          <View style={styles.pop}>
            <Text style={styles.head}>Thai Bhat+</Text>
            <Text>Currency</Text>
          </View>
        </View>
        <View>
          <Image source={require('../img/bangkok.jpg')} style={styles.image} />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Things to do</Text>
        <View style={styles.things}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.ticon}>
              <MaterialCommunityIcons name="yoga" color={'white'} size={32} />
            </View>
            <Text style={{ color: 'black', fontSize: 15, marginTop: 5 }}>Yoga</Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.ticon}>
              <MaterialCommunityIcons name="parachute" color={'white'} size={32} />
            </View>
            <Text style={{ color: 'black', fontSize: 15, marginTop: 5 }}>parachute</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.ticon}>
              <FontAwesome6 name="person-skating" color={'white'} size={32} />
            </View>
            <Text style={{ color: 'black', fontSize: 15, marginTop: 5 }}>Skating</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.ticon}>
              <FontAwesome6 name="volleyball" color={'white'} size={32} />
            </View>
            <Text style={{ color: 'black', fontSize: 15, marginTop: 5 }}>volleyball</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.ticon}>
              <FontAwesome6 name="person-running" color={'white'} size={32} />
            </View>
            <Text style={{ color: 'black', fontSize: 15, marginTop: 5 }}>Jogging</Text>
          </View>

        </View>
        <View style={{marginTop:20}}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black',paddingBottom:10 }}>Must Visit</Text>
          <View>
          <FlatList
            data={imageArray}
            renderItem={({ item }) => (<Sections img={item.image} city={item.city} country={item.country} place={item.place} />)}
          />
          <Sections />
        </View>
        </View>
      </View>
      
    </ImageBackground>
  )
}

export default Screen2

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: 10
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center'
  },
  bangok: {
    flex: 0.4,
    backgroundColor: 'white',
    marginTop: 50,
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 15,


  },
  location: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
  },
  saved: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 40,
    justifyContent: 'center',
    marginLeft: 5
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#e9eff4',
    marginTop: 15
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  }
  , pop: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  head: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  hline: {
    width: 1,
    height: 15,
    backgroundColor: '#e9eff4',

  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 100,
    position: 'absolute',
    top: -245
  },
  bottom: {
    flex: 0.7,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 20,
    paddingBottom: 45,
    padding: 15
  },
  things: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  ticon: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
})