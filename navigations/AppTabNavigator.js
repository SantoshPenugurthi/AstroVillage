import React from 'react';
import { StyleSheet, Image,Text,View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5,Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

import ChatScreen from '../screens/ChatScreen';
import { TabBarIndicator } from 'react-native-tab-view';
import HomeStack from './HomeStack';
import ProductsStack from './ProductsStack';
import AppointmentStack from './AppointmentStack';
import ChatStack from './ChatStack';

const Tab = createMaterialBottomTabNavigator();


const AppBottomTabNavigator = () =>{
    return(
        <Tab.Navigator
            initialRouteName='Home2'
            barStyle={{
                backgroundColor: '#f77000',
                position: 'absolute',
                overflow: 'hidden',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                height:55,
            }} 
        >
            <Tab.Screen 
                name="Home2" 
                component={HomeStack}
                options={{
                    headerShown:false,
                    tabBarLabel:"",
                    tabBarIcon:({focused})=>(
                        <View style={{
                            borderRadius:20,
                            borderColor:focused ? '#fff' : '#f77000',
                            borderWidth:2,
                            backgroundColor:focused ? '#000' : '#f77000',
                            height:40,
                            width:80,
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                            <FontAwesome5 name="home" size={focused ? 18 : 22} color={focused ? "#f77000" : "#000"}  />
                            <Text
                                style={{
                                    color:'#f77000',
                                    fontSize:10,
                                    fontWeight:'bold'
                                }}
                            >Home</Text>
                        </View>
                        
                    )
                }}
            />

            <Tab.Screen 
                name="Products" 
                component={ProductsStack}
                options={{
                    headerShown:false,
                    tabBarLabel:"",
                    tabBarIcon:({focused})=>(
                        <View style={{
                            borderRadius:20,
                            borderColor:focused ? '#fff' : '#f77000',
                            borderWidth:2,
                            backgroundColor:focused ? '#000' : '#f77000',
                            height:40,
                            width:80,
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                            <FontAwesome5 name="shopping-cart" size={focused ? 18 : 22} color={focused ? "#f77000" : "#000"} />
                            <Text
                                style={{
                                    color:'#f77000',
                                    fontSize:10,
                                    fontWeight:'bold'
                                }}
                            >Products</Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen 
                name="Appointment" 
                component={AppointmentStack}
                options={{
                    headerShown:false,
                    tabBarLabel:"",
                    tabBarIcon:({focused})=>(
                        <View style={{
                            borderRadius:20,
                            borderColor:focused ? '#fff' : '#f77000',
                            borderWidth:2,
                            backgroundColor:focused ? '#000' : '#f77000',
                            height:40,
                            width:80,
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <FontAwesome5 name="calendar-check" size={focused ? 18 : 22} color={focused ? "#f77000" : "#000"} />
                            <Text
                                style={{
                                    color:'#f77000',
                                    fontSize:10,
                                    fontWeight:'bold'
                                }}
                            >Appointment</Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen 
                name="Chat" 
                component={ChatStack}
                options={{
                    headerShown:false,
                    tabBarLabel:"",
                    tabBarBadge:false,
                    tabBarIcon:({focused})=>(
                        <View style={{
                            borderRadius:20,
                            borderColor:focused ? '#fff' : '#f77000',
                            borderWidth:2,
                            backgroundColor:focused ? '#000' : '#f77000',
                            height:40,
                            width:80,
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                            <Ionicons name="ios-chatbox-ellipses" size={focused ? 18 : 22} color={focused ? "#f77000" : "#000"} />
                            <Text
                                style={{
                                    color:'#f77000',
                                    fontSize:10,
                                    fontWeight:'bold'
                                }}
                            >Chat</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

 export default AppBottomTabNavigator;

 const styles=StyleSheet.create({
     image:{
         height:30,
         width:30
     }
 })
