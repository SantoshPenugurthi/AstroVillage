import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from '../screens/NotificationScreen';
import HomeScreen from '../screens/HomeScreen';
import PersonalScreen from '../screens/Home/PersonalScreen';
import MatrimonialScreen from '../screens/Home/MatrimonialScreen';
import DailyScreen from '../screens/Home/DailyScreen';
import BusinessScreen from '../screens/Home/BusinessScreen';
import TravelScreen from '../screens/Home/TravelScreen';
import AstrologyScreen from '../screens/Home/AstrologyScreen';
import HomasScreen from '../screens/Home/HomasScreen';
import JapasScreen from '../screens/Home/JapasScreen';
import MuhurthasScreen from '../screens/Home/MuhurthasScreen';
import CalendarsScreen from '../screens/Home/CalendarsScreen';
import PanchangamsScreen from '../screens/Home/PanchangamsScreen';
import NamesScreen from '../screens/Home/NamesScreen';


const Stack = createStackNavigator();

const HomeStack=()=>{
    return(
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen options={{headerShown:false}} name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='Notification' component={NotificationScreen} />
            <Stack.Screen name='Personal' component={PersonalScreen}/>
            <Stack.Screen name='Matrimonial' component={MatrimonialScreen}/>
            <Stack.Screen name='Daily' component={DailyScreen}/>
            <Stack.Screen name='Business' component={BusinessScreen}/>
            <Stack.Screen name='Travel' component={TravelScreen}/>
            <Stack.Screen name='Astrology' component={AstrologyScreen}/>
            <Stack.Screen name='Homas' component={HomasScreen}/>
            <Stack.Screen name='Japas' component={JapasScreen}/>
            <Stack.Screen name='Muhurthas' component={MuhurthasScreen}/>
            <Stack.Screen name='Calendars' component={CalendarsScreen}/>
            <Stack.Screen name='Panchangams' component={PanchangamsScreen}/>
            <Stack.Screen name='Names' component={NamesScreen}/>

        </Stack.Navigator>
    )
}


export default HomeStack;