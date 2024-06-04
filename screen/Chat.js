import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
// import { database } from '../config/firebase'
import { off, onValue, push, ref, set, getDatabase, get, update } from 'firebase/database'


const Chat = ({ route, selectedUser ,username}) => {
  const { email, user, uid, chatRoomId } = route.params
  const [messages, setMessages] = useState([])
  const [uname, setUsername] = useState('')

  useEffect(()=>{

    const loadData = async ()=>{
      const myChatroom = await fetchMessages()
      setMessages(renderMesseges(myChatroom.messages))
    }
    loadData()

    const database = getDatabase()
    const chatroomRef = ref(database,`chatrooms/${chatRoomId}`)
    onValue(chatroomRef,snapshot=>{
      const data = snapshot.val()
      setMessages(renderMesseges(data.messages))
    })
    return ()=>{
      off(chatroomRef)
    }
  },[fetchMessages,renderMesseges,chatRoomId])

  const fetchMessages =async ()=>{
    const database = getDatabase()
    const  snapshot = await get(ref(database,`chats/${chatRoomId}`))

    return snapshot.val()
  }


  const renderMesseges =useCallback( msgs => {
    return  (msgs.reverse().map((msg,index)=>({
      ...msg,
      _id:index,
      user:{
        _id:msg.sender === user.username?user.username : username,
        avatar:msg.sender === user.username?user.avatar : selectedUser.avatar,
        name:msg.sender === user.username?user.username : selectedUser.username,
      }
    })) || [])
  },[user.username,user.avatar,username])
 
      const onSend = useCallback(async(msg=[])=>{
        const database =getDatabase()
        const currentChatroom = await fetchMessages()
        const lastMesseges = currentChatroom.messages || []
        update(ref(database,`Chatrooms${chatRoomId}`),
      {
        messages:[
          ...lastMesseges,
          {
            text:msg[0].text,
            sender:user.username,
            createdAt: new Date()
          }
        ]
      })
  setMessages(prevMesseges => GiftedChat.append(prevMesseges,msg))  
      },[fetchMessages,user.username,chatRoomId])

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={messageArray => onSend(messageArray)}
        user={{
          _id: user.uid,
          name: uname,
        }}
      />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
})