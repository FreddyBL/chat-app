import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ChatRoom } from '../types'
import ChatListItem from '../components/ChatListItem'
import { FlatList } from 'react-native-gesture-handler'
import { cRooms } from '../dummy_data/chats'
export default function ChatScreen() {

    return (
        <View style={styles.container}>
            <FlatList 
                data={cRooms}
                renderItem={({item}) => (
                    <ChatListItem chatRoom={item}/>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
})
