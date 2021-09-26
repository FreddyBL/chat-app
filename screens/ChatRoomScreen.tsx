import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/core'
import { cRooms } from '../dummy_data/chats'
import ChatMessage from '../components/ChatMessage'
import InputChatBox from './../components/InputChatBox/index';
import { graphqlOperation, API, Auth } from 'aws-amplify';
import { getUser } from '../queries/users'
import { messagesByChatRoom } from '../src/graphql/queries'
import { useCurrentUser } from './../hooks/useCurrentUser';


import { onCreateMessage } from '../src/graphql/subscriptions'
const ChatRoomScreen = () => {

    const [chatRooms, setChatRooms] = useState([]);
    const [messages, setMessages] = useState([]);
    const route = useRoute();
    const currentUserID = useCurrentUser();

    const fetchMessages = async () => {
        const messagesData = await API.graphql(
          graphqlOperation(
            messagesByChatRoom, {
              chatRoomID: route.params.id,
              sortDirection: "DESC",
            }
          )
        )
    
        setMessages(messagesData.data.messagesByChatRoom.items);
    }

    useEffect(() => {
        fetchMessages();
    }, []);

    useEffect(() => {
        const subscription = API.graphql(
            graphqlOperation(onCreateMessage)
        ).subscribe({
            next: ({ provider, value }) => {
                if(value.data.onCreateMessage.chatRoom.id === route.params.id){
                    fetchMessages();
                }
            },
            error: error => console.warn(error)
        });
        
        return () => subscription.unsubscribe();
    }, []);
    return (
        <View style={styles.mainContainer}>
        <FlatList style={styles.container}
                data={messages}
                renderItem={({item}) => { 
                    return (
                    <ChatMessage message={item} loggedUserId={currentUserID}/>
                    )}}
                    keyExtractor={(item) => item.id}
                    inverted
                    />
                    <InputChatBox chatRoomID={route.params.id}/>
        </View>
    )
}

export default ChatRoomScreen

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
    },
    container: {
        padding: 17,
    }
})
