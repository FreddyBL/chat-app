import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ChatRoom } from '../types'
import ChatListItem from '../components/ChatListItem'
import { FlatList } from 'react-native-gesture-handler'
import { cRooms } from '../dummy_data/chats'

import { graphqlOperation, API, Auth } from 'aws-amplify';
import { getUser } from '../queries/users'
import { onCreateChatRoom, onCreateChatRoomManager, OnCreateChatRoomManager, onCreateMessage } from './../src/graphql/subscriptions';

export default function ChatScreen() {

    const [chatRooms, setChatRooms] = useState([]);

    const fetchRooms = async () =>
    {
        
        try {
            
            const currentUser = await Auth.currentAuthenticatedUser();
            const data = await API.graphql(graphqlOperation(getUser, 
                {id: currentUser.attributes.sub}
            ));
            setChatRooms(data.data.getUser.chatRoomManager.items);

        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchRooms();
    }, []);

    useEffect(() => {
        
        const subscription = API.graphql(
            graphqlOperation(onCreateChatRoom)
        ).subscribe({
            next: ({ provider, value }) => {
                fetchRooms();
            },
            error: error => console.warn(error)
        });
        
        return () => subscription.unsubscribe();
    }, []);
    
    useEffect(() => {
        
        const subscription = API.graphql(
            graphqlOperation(onCreateChatRoomManager)
        ).subscribe({
            next: ({ provider, value }) => {
                fetchRooms();
            },
            error: error => console.warn(error)
        });
        
        return () => subscription.unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList 
                data={chatRooms}
                renderItem={({item}) => {

                    return (
                        <ChatListItem chatRoom={item.chatRoom}/>
                    )
                }}
                
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
})
