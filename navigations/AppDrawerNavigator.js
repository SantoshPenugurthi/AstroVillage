import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import YoutubeScreen from '../screens/YoutubeScreen';
import ShareScreen from '../screens/ShareScreen';
import HomeScreen from '../screens/HomeScreen';
import AppBottomTabNavigator from './AppTabNavigator'; 
import CustomDrawer from '../components/CustomDrawer';
import { FontAwesome5,Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () =>{
    return(
        <Drawer.Navigator initialRouteName='Home' drawerContent={props=><CustomDrawer{...props}/>}
            screenOptions={{
                headerShown:false,
                drawerLabelStyle:{
                    fontSize:15,
                    fontWeight:'bold',
                },
            }}
        >
            <Drawer.Screen 
                options={{
                    headerShown:false,
                    drawerActiveTintColor:'#fff',
                    drawerActiveBackgroundColor:'#f77000',
                    drawerIcon:()=>(
                        <FontAwesome5 name="home" size={25} color="#000" />
                    ),
                }} name=' Home' component={AppBottomTabNavigator}/>
            <Drawer.Screen 
                options={{
                    drawerActiveTintColor:'#fff',
                    drawerActiveBackgroundColor:'#f77000',
                    drawerIcon:()=>(
                        <Ionicons name="person" size={25} color="#000" />
                    ),
                }} name=' About Us' component={AboutScreen}/>
            <Drawer.Screen 
                options={{
                    drawerActiveTintColor:'#fff',
                    drawerActiveBackgroundColor:'#f77000',
                    drawerIcon:()=>(
                        <FontAwesome5 name="phone-alt" size={25} color="#000" />
                    ),
                }} name=' Contact Us' component={ContactScreen}/>
            <Drawer.Screen 
                options={{
                    drawerActiveTintColor:'#fff',
                    drawerActiveBackgroundColor:'#f77000',
                    drawerIcon:()=>(
                        <FontAwesome5 name="youtube" size={23} color="#000" />
                    ),
                }} name='Our Youtube Videos' component={YoutubeScreen}/>
            <Drawer.Screen 
                options={{
                    drawerActiveTintColor:'#fff',
                    drawerActiveBackgroundColor:'#f77000',
                    drawerIcon:()=>(
                        <FontAwesome5 name="share-alt" size={25} color="#000" />
                    ),
                }} name=' Share the App' component={ShareScreen}/>
        </Drawer.Navigator>
    )
}

export default AppDrawerNavigator;
