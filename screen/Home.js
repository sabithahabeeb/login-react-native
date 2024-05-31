import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Btn from '../Components/Btn'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { getDatabase, onValue, ref, set, push } from 'firebase/database'

const Home = ({ navigation }) => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getCurrentUser = () => {
      const user = auth.currentUser
      if (user) {
        setCurrentUser({ uid: user.uid, email: user.email.toLowerCase() , username: user.displayName })
        // console.log("Current User:", user.email.toLowerCase()) 
        console.log('username', user.displayName ); 
      }
    }
    getCurrentUser()

    const database = getDatabase()
    const usersRef = ref(database, 'users/')

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const userList = Object.keys(data).map(key => ({
          uid: key,
          ...data[key],
          email: data[key].email.toLowerCase(),
          username: data[key].username
        }))
        setUsers(userList)
        // console.log("fetched Users :",userList);
      }
    })
    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
    Alert.alert("Logout successful")
    navigation.navigate("ui")
  }

  const filteredUsers = users.filter(user => user.email !== currentUser?.email)
  // console.log("filteredUser:" ,filteredUsers);


  const createChatRoom = async (selectedUser) => {
    const database = getDatabase()
    const chatroomRef = ref(database, 'chatroom')
    const newChatroomRef = push(chatroomRef)
    const chatRoomId = newChatroomRef.key
    navigation.navigate('chat', { username: selectedUser.username, email: selectedUser.email, user: currentUser, uid: selectedUser.uid, chatRoomId });

  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Home</Text>     */}
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => createChatRoom(item)}>
            <View style={styles.usercontainer}>
              <Image source={require('../img/loged.png')} style={styles.profileImage} />
              <View style={styles.userInfo}>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.useremail}>{item.email}</Text>
              </View>

            </View>
          </TouchableOpacity>


        )}
      />
      <Btn onPress={handleLogout}>Logout</Btn>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent:'center',
    // alignItems:'center'
  },
  // text:{
  //   fontSize:30,

  //   color:'black',
  //   padding:40
  // },
  usercontainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 15
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  useremail: {
    fontSize: 15,
    color: '#777',
  }
})