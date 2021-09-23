
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ChatRoom } from '../../types';
import { useNavigation } from '@react-navigation/core'
import { graphqlOperation, API, Auth } from 'aws-amplify';


export type ChatListItemProps = { 
    chatRoom: ChatRoom;
}
export default function ChatListItem(props: ChatListItemProps) {

    const user = props.chatRoom.chatRoomUsers.items[1].user;
    const navigation = useNavigation();

    const onChatSelected = () => {
        navigation.navigate('ChatRoomScreen', {
            id: props.chatRoom.id,
            name: user.name,
        });
    }
    return (
        <TouchableOpacity onPress={onChatSelected}>

        <View style={styles.container}>
            <Image style={styles.avatar} source={{
                uri: user.imageUri,
            }}/>

            <View style={styles.contentContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    {/* <Text style={styles.lastMessageTime}>{chatRoom?.lastMessage.createdAt}</Text> */}
                
                </View>
                <View style={styles.bottomContainer}>
                    {/* <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom?.lastMessage.content}</Text> */}
                </View>
            </View>
        </View>
            </TouchableOpacity>
            
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
    },
    lastMessageTime: {
        color: 'grey',
    },
    bottomContainer: {

    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    }
})
