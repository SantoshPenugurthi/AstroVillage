import React from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView,DrawerItem,DrawerItemList} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

const CustomDrawer = (props)=>{
    return(
        <View style={{
                flex:1,
                backgroundColor:'#fff',
                borderRightWidth:5,
                borderRightColor:'#fff'
            }}>
            <DrawerContentScrollView{...props}
                contentContainerStyle={{
                    backgroundColor:'#f77000',
                }}
            >
            <View
                style={{
                    alignItems:'flex-start',
                    paddingLeft:25,
                    paddingTop:15
                }}
            >
                    <TouchableOpacity onPress={()=>props.navigation.closeDrawer()} style={{alignItems:'center'}}>
                        <Ionicons name="arrow-back" size={32} color="#fff" />
                    </TouchableOpacity>
            </View>
            <View
            style={{
                flex:1,
                height:200,
                width:200,
                marginTop:0,
                marginLeft:40,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#000',
                borderRadius:100,
                borderColor:'#fff',
                borderWidth:3
            }}
            >
                <Image
                    source={require('../assets/logo3.png')}
                    style={{
                        height:170,
                        width:170,
                    }}
                />
            </View>
            <Text
                style={{
                    color:'#fff',
                    fontWeight:'bold',
                    fontSize:30,
                    marginLeft:65,
                    marginTop:10
                }}
            >Astro Village</Text>
            <Text
                style={{
                    color:'#000',
                    fontWeight:'bold',
                    fontSize:15,
                    marginLeft:62,
                    marginBottom:20,
                    marginTop:0
                }}
            >by Surya Narayana Sharma</Text>
                <View
                    style={{
                        backgroundColor:'#fff'
                    }}
                >
                    <DrawerItemList{...props}/>
                </View>
                
            </DrawerContentScrollView>
            <View 
                style={{
                    alignItems:'center',
                    margin:10
                }}
            >
                <Text>Version 1.0.0(xxxxxx) </Text>
            </View>
        </View>
    )
}

export default CustomDrawer;