import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { FontAwesome5,Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RudrakshaluScreen from './Rudrakshalu';
import KunkumaluScreen from './KunkumaluScreen';
import RupuluScreen from './RupuluScreen';
import DhopItemsScreen from './DhopItemsScreen';
import OilGheeScreen from './OilGheeScreen';
import SpecialItemsScreen from './SpecialItemsScreen';

const Top = createMaterialTopTabNavigator();

const ProductsScreen = ({navigation}) =>
{
    return(
        <View
            style={{
                flex:1,
                backgroundColor:'#fff'
            }}
        >
            <View style={{
                flexDirection:'row',
                alignItems:'flex-end',
                backgroundColor:'#f77000',
                justifyContent:'space-between',
                height:'14%',
                padding:15
            }}>
                <View>
                    <TouchableOpacity onPress={()=>navigation.goBack()} style={{alignItems:'center'}}>
                        <Ionicons name="arrow-back" size={28} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        alignItems:'center'
                    }}
                >
                    <Text
                        style={{
                            color:'#fff',
                            fontSize:24,
                            fontWeight:'bold',
                        }}
                    >Products</Text>
                </View>

                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Notification')} style={{alignItems:'center'}}>
                        <FontAwesome5 name="bell" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                    style={{
                        height:"85%",
                        padding:10
                    }}
            >
                <Top.Navigator
                    screenOptions={{
                        tabBarLabelStyle:{fontSize:16,fontWeight:'bold' ,color:'#f77000',textTransform:'none',borderRadius:10,},
                        tabBarScrollEnabled:true,
                        tabBarStyle:{backgroundColor:'#fff',borderRadius:30},
                        tabBarIndicatorStyle:{borderColor:'#000',borderWidth:4,borderRadius:10,width:80,left:'4.15%'},
                        
                    }}
                    
                >
                    <Top.Screen
                        name="Rudrakshalu"
                        component={RudrakshaluScreen}
                    />
                    <Top.Screen
                        name="Kunkumalu"
                        component={KunkumaluScreen}
                    />
                    <Top.Screen
                        name="Rupulu"
                        component={RupuluScreen}
                    />
                    <Top.Screen
                        name="Dhop Items"
                        component={DhopItemsScreen}
                    />
                    <Top.Screen
                        name="Oil & Ghee"
                        component={OilGheeScreen}
                    />
                    <Top.Screen
                        name="Special Items"
                        component={SpecialItemsScreen}
                    />
                </Top.Navigator>
            </View>
        </View>
    )
}

export default ProductsScreen;