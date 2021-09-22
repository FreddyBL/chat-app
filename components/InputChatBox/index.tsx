import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const InputChatBox = () => {

    const [text, setText] = useState('');

    const isTextEmpty = (text.length == 0);
    const iconToShow = isTextEmpty ? "microphone" : "send";

    const onAttachmentClicked = () => {
        // Attachments
    }
    const onEmoticonClicked = () => {
        // Emoticons
    }
    const onCameraClicked = () => {
        // Camera
    }
    const onMicrophoneHandler = () => {
        // Microphone
    }
    const onSubmitClicked = () => {
        if(isTextEmpty){
            onMicrophoneHandler();
            return;
        }
        console.log(text);

    }
    return (
        <View style={styles.mainContainer}> 
            <View style={styles.innerContainer}>
                <TouchableOpacity onPress={onEmoticonClicked}>
                <MaterialCommunityIcons name="emoticon" size={24} color='gray'/>
                    </TouchableOpacity>
                <TextInput value={text} onChangeText={(text) => setText(text)} multiline={true} style={styles.inputBox} placeholder='Message'/>
                <View style={styles.inputBoxBtns}>
                <TouchableOpacity onPress={onAttachmentClicked}>
                    <MaterialCommunityIcons style={styles.icon} name="paperclip" size={24} color='black'/>
                    </TouchableOpacity>
                    {isTextEmpty && (
                    <TouchableOpacity onPress={onCameraClicked}>
                        <MaterialCommunityIcons style={styles.icon} name="camera" size={24} color='black'/>
                        </TouchableOpacity>
                        )
                    }
                </View>
            </View>
            <TouchableOpacity>
            <MaterialCommunityIcons onPress={onSubmitClicked} style={styles.microphone} name={iconToShow} size={24} color='white'/>
            </TouchableOpacity>
        </View>
    )
}

export default InputChatBox;

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 7,
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: '#d9d9d9',
        padding: 10,
        borderRadius: 30,
        flex: 1,
        marginRight: 5,
    },
    inputBox: {
        fontSize: 17,
        flex: 1, 
        marginLeft: 7,
    },
    inputBoxBtns: {
        flexDirection: 'row',
        width: 60,
        justifyContent: 'flex-end',
    },
    icon: {
        marginHorizontal: 4,
    },
    microphone: {
        borderRadius: 50,
        backgroundColor: '#3c97a3',
        padding: 10, 
    }
})
