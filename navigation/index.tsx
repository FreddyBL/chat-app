/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, TouchableOpacity } from 'react-native';
import { View, Text } from '../components/Themed';
import Colors from '../constants/Colors';
import AppConfig from '../constants/AppConfig';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5} from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBarItem } from 'react-native-tab-view';
import ChatScreen from './../screens/ChatScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ChatRoomHeader from '../components/ChatRoomHeader';
import PeopleScreen from '../screens/PeopleScreen';
import { useState, useEffect } from 'react-native-vector-icons/node_modules/@types/react';
import {Auth} from "aws-amplify"
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint,
      },
      headerTintColor: Colors.light.background,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen 
        name="Root" 
        component={BottomTabNavigator} 
        options={{ 
          headerShown: true,
          title: AppConfig.appName,
          headerRight: () => (
            <View style={{flexDirection: 'row', width: 60, justifyContent: 'space-between', backgroundColor: 'transparent'}}>
              <TouchableOpacity onPress={async () => {
                await Auth.signOut();
              }}>
                <Text style={{color: "white"}}>Logout</Text>
              </TouchableOpacity>
            </View>
          )
        }} 
        />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen}
      options={({ route }) => (
        {
          title: route.params?.user ? route.params?.user.name : "User",
          headerRight: () => (
            <View style={{flexDirection: 'row', width: 100, justifyContent: 'space-between', backgroundColor: 'transparent'}}>
              <MaterialIcons name='call' size={22} color={'white'}/>
              <FontAwesome5 name='video' size={22} color={'white'}/>
            </View>
          )
        }
      ) }
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const ScreensTab = createMaterialTopTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <ScreensTab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarItemStyle: { width: 100 },
      tabBarStyle: { backgroundColor: Colors[colorScheme].tint },
      tabBarActiveTintColor: Colors[colorScheme].background
    }}
      
    >
      <ScreensTab.Screen name="Chats" component={ChatScreen} />
      <ScreensTab.Screen name="People" component={PeopleScreen} />
    </ScreensTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
