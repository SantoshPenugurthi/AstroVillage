import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from '../screens/NotificationScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();
const AppointmentStack=()=>{
    return(
        <Stack.Navigator
            initialRouteName='AppointmentScreen'
        >
            <Stack.Screen options={{headerShown:false}} name='AppointmentScreen' component={AppointmentScreen} />
        </Stack.Navigator>
    )
}

export default AppointmentStack;