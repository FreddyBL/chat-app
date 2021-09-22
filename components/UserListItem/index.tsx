
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ChatRoom } from '../../types';
import { useNavigation } from '@react-navigation/core'
import UserAvatar from 'react-native-user-avatar';
import { User } from '../../types';
export type UserListItemProps = { 
    user: User;
}
export default function UserListItem(props: UserListItemProps) {

    const {user} = props;
    const navigation = useNavigation();

    const onUserSelected = () => {
        
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
