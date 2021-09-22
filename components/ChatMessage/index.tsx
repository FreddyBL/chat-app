import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Message, User } from '../../types'

export type ChatMessageProps = {
    message: Message,
    loggedUserId: string,
}

const ChatMessage = (props: ChatMessageProps) => {

    const {message, loggedUserId} = props;
    const isOwnerMessage = message.user.id === loggedUserId;
    const extraStyle =  isOwnerMessage ? {
        alignSelf: 'flex-start'
    } : { alignSelf: 'flex-end', backgroundColor: '#8dc7b4'};
    return (
        <View style={[styles.messageBox, extraStyle]}>
            <Text>{message.content}</Text>
            <Text style={styles.messageCreation}>{message.createdAt}</Text>
        </View>
    )
}

export default ChatMessage;

const styles = StyleSheet.create({

    messageBox: {
        alignSelf: 'flex-start',
        backgroundColor: '#cecece',
        marginTop: 10,
        minWidth: 150,
        maxWidth: 250,
        padding: 10,
        borderRadius: 10,
    },
    messageCreation: {
        alignSelf: 'flex-end',
        fontSize: 10,
        color: '#545454',
    }
})
