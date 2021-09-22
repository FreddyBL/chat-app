import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ChatRoom } from '../types'
import ChatListItem from '../components/ChatListItem'
import { FlatList } from 'react-native-gesture-handler'
import { cRooms } from '../dummy_data/chats'

import { graphqlOperation, API, Auth } from 'aws-amplify';
import { getUser } from '../queries/users'

export default function ChatScreen() {

    const [chatRooms, setChatRooms] = useState([]);

    useEffect(() => {
       
        const fetchData = async () =>
        {
            
            try {
                
                const currentUser = await Auth.currentAuthenticatedUser();
                const data = await API.graphql(graphqlOperation(getUser, 
                    {id: currentUser.attributes.sub}
                ));
                //console.log(data.data.getUser.chatRoomManager.items);
                setChatRooms(data.data.getUser.chatRoomManager.items);

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

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
