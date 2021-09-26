import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ChatRoom } from '../types'
import UserListItem from '../components/UserListItem'
import { FlatList } from 'react-native-gesture-handler'
import { cRooms } from '../dummy_data/chats'

import { API, graphqlOperation } from 'aws-amplify'
import { listUsers } from '../src/graphql/queries'


import { listUsersExceptID } from '../queries/users'
import { useCurrentUser } from './../hooks/useCurrentUser';
export default function PeopleScreen() {

    const currentUserID = useCurrentUser();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try{
                const fetchedUsers = await API.graphql(graphqlOperation(
                    listUsersExceptID
                , {filterID: currentUserID}));

                setUsers(fetchedUsers.data.listUsers.items);
            }
            catch(e){
            }
        }
        fetchUsers();
    }, [currentUserID])
    return (
        <View style={styles.container}>
            <FlatList 
                data={users}
                renderItem={({item}) => { 
                    return (
                    <UserListItem user={item}/>
                )}}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
})
