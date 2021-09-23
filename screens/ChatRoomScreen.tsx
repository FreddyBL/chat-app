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

const ChatRoomScreen = () => {

    const [chatRooms, setChatRooms] = useState([]);
    const [messages, setMessages] = useState([]);
    const route = useRoute();
    const currentUserID = useCurrentUser();

    useEffect(() => {
        const fetchMessages = async () => {
            const messagesData = await API.graphql(
              graphqlOperation(
                messagesByChatRoom, {
                  chatRoomID: route.params.id,
                  sortDirection: "ASC",
                }
              )
            )
        
            setMessages(messagesData.data.messagesByChatRoom.items);
        }
        fetchMessages();
    }, []);
    return (
        <View style={styles.mainContainer}>
        <FlatList style={styles.container}
                data={messages}
                renderItem={({item}) => { 
                        console.log("\n\n=====================================================");
                        console.log(item);
                        console.log(currentUserID);
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
