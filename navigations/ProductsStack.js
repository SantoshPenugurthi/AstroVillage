import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from '../screens/NotificationScreen';
import ProductsScreen from '../screens/ProductsScreen';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();
const ProductsStack=()=>{
    return(
        <Stack.Navigator
            initialRouteName='ProductsScreen'
        >
            <Stack.Screen options={{headerShown:false}} name='ProductsScreen' component={ProductsScreen} />
        </Stack.Navigator>
    )
}

export default ProductsStack;