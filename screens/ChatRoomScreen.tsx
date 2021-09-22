import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/core'
import { cRooms } from '../dummy_data/chats'
import ChatMessage from '../components/ChatMessage'
import InputChatBox from './../components/InputChatBox/index';

const ChatRoomScreen = () => {

    const route = useRoute();
    console.log(route.params);
    return (
        <View style={styles.mainContainer}>
            
        <FlatList style={styles.container}
                data={cRooms[0].messages}
                renderItem={({item}) => (
                    <ChatMessage message={item} loggedUserId={cRooms[0].users[0].id}/>
                    )}
                    keyExtractor={(item) => item.id}
                    inverted
                    />
                    <InputChatBox/>
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
