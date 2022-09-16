import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import GetStartedScreen from '../screens/GetStartedScreen';
import RootNavigator from '.';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName='Onboarding' screenOptions={{headerShown: false,}}>
            <Stack.Screen name="Onboarding" component={GetStartedScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Root" component={RootNavigator} />
        </Stack.Navigator>
    );
};
  
export default AuthStack;