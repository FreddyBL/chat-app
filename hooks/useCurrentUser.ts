import React, {useState, useEffect} from 'react'
import { graphqlOperation, API, Auth } from 'aws-amplify';
import { getUser } from '../queries/users'


export const useCurrentUser = () => {
    const [userID, setUserID] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {

            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                const data = await API.graphql(graphqlOperation(getUser, 
                    {id: currentUser.attributes.sub}
                    ));
                    setUserID(currentUser.attributes.sub);
            } catch (error) {
                return null;
            }
           

            }
            fetchUser();
    }, []);
    return userID;
}
