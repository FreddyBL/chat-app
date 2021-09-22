import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native'

import { Auth, API } from 'aws-amplify';
import { graphqlOperation } from 'aws-amplify';
import { getUser } from './src/graphql/queries';

import { createUser } from './src/graphql/mutations';
Amplify.configure(config)

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {

    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser( {bypassCache: true});
      if(userInfo != null){
        
        const id = userInfo.attributes.sub;

        const userData = await API.graphql(graphqlOperation(
          getUser, {
            id,
          }));

          if(userData.data.getUser){
            console.log("User is already registered")
          }
          else{
            // Register user
            console.log("Trying to register: ...");
            const newUser = {
              id,
              name: userInfo.username,
              email: userInfo.attributes.email
            }
            console.log(newUser);
            await API.graphql(graphqlOperation(createUser, 
            {input: newUser}
            ));
            console.log("User has been registered!");

          }
      }
    }

    fetchUser();
  }, []);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App);