import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from '../screens/NotificationScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();
const ChatStack=()=>{
    return(
        <Stack.Navigator
            initialRouteName='ChatScreen'
        >
            <Stack.Screen options={{headerShown:false}} name='ChatScreen' component={ChatScreen} />
        </Stack.Navigator>
    )
}

export default ChatStack;