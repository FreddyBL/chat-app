
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ChatRoom } from '../../types';
import { useNavigation } from '@react-navigation/core'
import UserAvatar from 'react-native-user-avatar';
import { User } from '../../types';


import { graphqlOperation, API, Auth } from 'aws-amplify';
import { createChatRoom, createChatRoomManager } from '../../src/graphql/mutations'
import { useCurrentUser } from './../../hooks/useCurrentUser';

export type UserListItemProps = { 
    user: User;
}
export default function UserListItem(props: UserListItemProps) {

    const {user} = props;
    const navigation = useNavigation();
    const currentUserID = useCurrentUser();

    const onUserSelected = async () => {
        try {

            // 1. Create chat Room
            const newChatRoomData = await API.graphql(graphqlOperation(
                createChatRoom, {input: {}}
            ));
            
            console.log(newChatRoomData);

            if(newChatRoomData){
                const chatRoom = newChatRoomData.data.createChatRoom;
                const roomId = chatRoom.id;
                //Add user to chatRoom
                await API.graphql(graphqlOperation(
                    createChatRoomManager, {input: {userID: user.id, chatRoomID: roomId}}
                ));

                await API.graphql(graphqlOperation(
                    createChatRoomManager, {input: {userID: currentUserID, chatRoomID: roomId}}
                ));
                
                navigation.navigate('ChatRoomScreen', {
                    id: roomId,
                    name: "Some Name"
                })

            }
        } catch (error) {
            
        }
    }
    const avatarComponent = (user.imageUri ? 
        <Image style={styles.avatar} source={{
            uri: user.imageUri,
        }}/> : <UserAvatar size={50} name={user.name} />);


    const statusText= user.status ? user.status: "Hey! I'm new to this app!";
    
    return (
        <TouchableOpacity onPress={onUserSelected}>

        <View style={styles.container}>
            {avatarComponent}
            <View style={styles.contentContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.lastMessageTime}>

                    </Text>
                
                </View>
                <View style={styles.bottomContainer}>
                    <Text numberOfLines={1} style={styles.lastMessage}>
                        {statusText}
                    </Text>
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
