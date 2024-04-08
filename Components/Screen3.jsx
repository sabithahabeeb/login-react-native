import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-reanimated';
import { Svg, Circle } from 'react-native-svg'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Progress from 'react-native-progress';




const Screen3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Hey Akram!</Text>
          <Text style={{ color: '#abb8c3' }}>you have <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#140caa' }}>23 tasks </Text>pending.</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={require('../img/profile.jpg')} style={styles.profile} />
        </View>

      </View>
      <View style={styles.middle}>
        <View style={styles.card}>
          <Text style={{ color: '#abb8c3' }}>This week</Text>
          <View>
            <Svg height="100" width="100">
              <Circle
                cx="50"
                cy="50"
                r="40"
                stroke="#d2d7d4"
                strokeWidth="10"
                fill="none"
              />
              <Circle
                cx="50"
                cy="50"
                r="40"
                stroke="#2196f3"
                strokeWidth="10"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40 * 0.73}, ${2 * Math.PI * 40 * (1 - 0.73)}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.73)}`}
              />
              <Text style={{ paddingTop: 40, paddingLeft: 40, color: '#abb8c3' }}>73%</Text>
            </Svg>
          </View>
          <Text style={{ fontSize: 35, color: 'black', fontWeight: 'bold' }}>18</Text>
          <Text>Ongoing Tasks</Text>
        </View>
        <View style={styles.card}>
          <Text style={{ color: '#abb8c3' }}>Projects</Text>
          <View>
            <Svg height="100" width="100">
              <Circle
                cx="50"
                cy="50"
                r="40"
                stroke="#d2d7d4"
                strokeWidth="10"
                fill="none"
              />
              <Circle
                cx="50"
                cy="50"
                r="40"
                stroke="red"
                strokeWidth="10"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40 * 0.67}, ${2 * Math.PI * 40 * (1 - 0.67)}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.67)}`}
              />
              <Text style={{ paddingTop: 40, paddingLeft: 40, color: '#abb8c3' }}>67%</Text>
            </Svg>
          </View>
          <Text style={{ fontSize: 35, color: 'black', fontWeight: 'bold' }}>23</Text>
          <Text>Pending Tasks</Text>
        </View>

      </View>
      <View style={styles.activities}>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
          Recent Activities
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text>This week</Text>
          <AntDesign style={{ margin: 10 }} name="down" color={'black'} size={12} />
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomcard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Pressable style={styles.press}>
                <Text style={{ color: 'white' }}>  Mobile App</Text>
              </Pressable>
            </View>
            <Entypo name="dots-three-horizontal" color={'gray'} size={12} />


          </View>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginTop: 10 }}>Dental App Design</Text>
          <Text style={{ color: '#abb8c3', marginTop: 15 }}>
            Creating mobile application for the Excellgo Clinic.
          </Text>
          <Text style={{ color: '#abb8c3' }}>
            Both android and iOS platform.
          </Text>
          <View style={styles.progress}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>70%</Text>
            <Progress.Bar progress={0.70} width={150} />
          </View>
          <View style={styles.customer}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../img/profile1.png')} style={{ height: 35, width: 30, margin: 2 }} />
              <Image source={require('../img/profile2.png')} style={{ height: 30, width: 30, margin: 2 }} />

              <Image source={require('../img/profile3.png')} style={{ height: 30, width: 30, margin: 2 }} />

            </View>
            <Text style={{color:'#abb8c3'}}>April24, 2022</Text>
          </View>
        </View>



        <View style={styles.bottomcard}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Pressable style={styles.press}>
                <Text style={{ color: 'white' }}>Website</Text>
              </Pressable>
            </View>
            <Entypo name="dots-three-horizontal" color={'gray'} size={12} />


          </View>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', marginTop: 10 }}>Real Estate</Text>
          <Text style={{ color: '#abb8c3', marginTop: 15 }}>
            Creating mobile application for the Excellgo Clinic.
          </Text>
          <Text style={{ color: '#abb8c3' }}>
            Both android and iOS platform.
          </Text>
          <View style={styles.progress}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>65%</Text>
            <Progress.Bar progress={0.65} width={150} />
          </View>
          <View style={styles.customer}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../img/profile1.png')} style={{ height: 35, width: 30, margin: 2 }} />
              <Image source={require('../img/profile2.png')} style={{ height: 30, width: 30, margin: 2 }} />

              <Image source={require('../img/profile3.png')} style={{ height: 30, width: 30, margin: 2 }} />

            </View>
            <Text style={{color:'#abb8c3'}}>April24, 2022</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fbfbfb',
    borderRadius: 50,
    margin: 15,
    
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30
  }, profile: {
    height: 40,
    width: 40,
    borderWidth: 3,
    borderRadius: 100,

  },
  profileContainer: {
    height: 55,
    width: 55,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 20
  },
  card: {
    width: 160,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  activities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 25,
    alignItems: 'center'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20
  },
  bottomcard: {
    width: 240,
    height: 280,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,marginRight:10

  },
  press: {
    height: 30,
    width: 'auto',
    backgroundColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,padding:5
  },
  progress: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center', marginTop: 15
  },
  customer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35
  }

})