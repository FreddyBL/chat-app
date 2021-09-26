import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Message, User } from '../../types'
import moment from 'moment'
export type ChatMessageProps = {
    message: Message,
    loggedUserId: string,
}

const ChatMessage = (props: ChatMessageProps) => {

    const {message, loggedUserId} = props;
    const extraStyle =  message.user.id !== loggedUserId ? {
        alignSelf: 'flex-start'
    } : { alignSelf: 'flex-end', backgroundColor: 'rgb(203, 233, 205)'};
    return (
        <View style={[styles.messageBox, extraStyle]}>
            <Text>{message.content}</Text>
            <Text style={styles.messageCreation}>{moment(message.createdAt).calendar()}</Text>
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
