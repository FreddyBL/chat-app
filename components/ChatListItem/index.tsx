
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ChatRoom } from '../../types';
import { useNavigation } from '@react-navigation/core'
import { graphqlOperation, API, Auth } from 'aws-amplify';
import { useCurrentUser } from './../../hooks/useCurrentUser';
import UserAvatar from 'react-native-user-avatar';
import moment from 'moment';
import { lastMsgByChatRoom } from '../../queries/messages';
import { messagesByChatRoom } from './../../src/graphql/queries';
import { onCreateMessage } from '../../src/graphql/subscriptions';

export type ChatListItemProps = { 
    chatRoom: ChatRoom;
}


const Avatar = ({name}) => {
    const isEmpty = name == "";
    return (<View>

        {!isEmpty && <UserAvatar size={50} name={name} />}
        </View>
    );
}
export default function ChatListItem(props: ChatListItemProps) {

    const [displayedUser, setDisplayedUser] = useState({
        name: "",
        imageUri: null,
    });


    const currentUserID = useCurrentUser();
    const navigation = useNavigation();
    const [lastMessage, setLastMessage] = useState("");
    const [sentTime, setSentTime] = useState("No new messages");
    const users = props.chatRoom.chatRoomUsers.items;

    useEffect(() => {
        for(let i = 0; i < users.length; i++){
            const {user} = users[i];
            if(user.id !== currentUserID){
                setDisplayedUser(user);
                break;
            }
        }
    }, [users, props, currentUserID])
    
    const fetchLastMsg = async () => {
        try {
            
            const {data} = await API.graphql(graphqlOperation(lastMsgByChatRoom, 
                {chatRoomID: props.chatRoom.id}
            ));
            const messages = data.messagesByChatRoom.items;
            let text = "Start a conversation now!"

            if(messages.length > 0){
                text = data.messagesByChatRoom.items[0].content;
            }
            const createdAt = data.messagesByChatRoom.items[0].createdAt;
            setLastMessage(text);
            setSentTime(moment(createdAt).calendar());
        } catch (error) {
        }
    }


    useEffect(() => {
        
        const subscription = API.graphql(
            graphqlOperation(onCreateMessage)
        ).subscribe({
            next: ({ provider, value }) => {
                fetchLastMsg();
            },
            error: error => console.warn(error)
        });
        
        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        fetchLastMsg();
    }, []);



    const onChatSelected = () => {
        navigation.navigate('ChatRoomScreen', {
            id: props.chatRoom.id,
            user: displayedUser,
        });
    }
    return (
        <TouchableOpacity onPress={onChatSelected}>

        <View style={styles.container}>
            {displayedUser.imageUri && 
                <Image style={styles.avatar} source={{ uri: displayedUser.imageUri}}/>
            }
            {!displayedUser.imageUri && 
                <Avatar name={displayedUser.name} />
            }
            
            <View style={styles.contentContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.name}>{displayedUser.name}</Text>
                    <Text style={styles.lastMessageTime}>{sentTime}</Text>
                
                </View>
                <View style={styles.bottomContainer}>
                    <Text numberOfLines={1} style={styles.lastMessage}>{lastMessage}</Text>
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
