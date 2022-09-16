import React from 'react'
import {View, Text, Image,Animated,Easing} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5,Ionicons,MaterialCommunityIcons,Foundation,FontAwesome } from '@expo/vector-icons';
import { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const HomeScreen = ({navigation, route}) => {
    const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    const spin2 = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg'],
    });
    useEffect(() => {
        Animated.loop(
        Animated.timing(spinAnim,{
            toValue: 1,
            duration: 6000,
            easing: Easing.linear,
            useNativeDriver: true,
        }),
        ).start();
    },[]);
    return(
        <View style={{
            backgroundColor:"#fff",
            flex:1
        }}>
            <View style={{
               backgroundColor:"#f77000",
               height:"25%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20,
               marginBottom:120
             }}>
                <View
                    style={{
                        flexDirection:'row',
                        width:'100%',
                        alignItems:'center',
                        marginTop:50,
                    }}
                >   
                    <View
                        style={{
                            width:'20%'
                        }}
                    >    
                        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                            <Ionicons name="menu" size={32} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={{width:"60%",alignItems:"center"}}>
                        <Image
                            source={require('../assets/logo2.png')}
                            style={{height:70,width:140}}
                        />
                   </View>
                   
                    <View
                        style={{
                            width:'20%',
                            alignItems:'flex-end'
                        }}
                    >
                       <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                            <FontAwesome5 name="bell" size={28} color="#fff" />
                       </TouchableOpacity>
                    </View>
                </View>
                
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:10,
                   width:"100%"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontSize:25,
                            color:"#fff",
                            fontWeight:"bold"
                        }}>Hello User,</Text>
                   </View>
               </View>
               <View
                    style={{
                        flexDirection:'row',
                        borderColor:'#f77000',
                        borderWidth:5,
                        marginTop:10,
                        backgroundColor:'#000',
                        paddingVertical:10,
                        paddingHorizontal:10,
                        height:150,
                        borderRadius:20,
                    }}
               >
                    <View style={{width:'40%', justifyContent: 'center', alignItems: 'center'}}>
                        
                        <Animated.Image
                            style={{height: 120, width: 120,position:'absolute', transform: [{rotate: spin}]}}
                            source={require('../assets/logo3.png')}
                        />
                        <Animated.Image
                            style={{backgroundColor:'#000', height: 50, width: 50,position:'absolute',borderRadius:75,transform: [{rotate: spin2}]}}
                            source={require('../assets/logo4.png')}
                        />
                        <Animated.Image
                            style={{backgroundColor:'#000', height: 15, width: 15,position:'absolute',borderRadius:20}}
                            source={require('../assets/logo5.png')}
                        />
                        <Animated.Image
                            style={{height: 120, width: 120,position:'absolute', transform: [{rotate: spin}]}}
                            source={require('../assets/logo3.png')}
                        />
                        <Animated.Image
                            style={{backgroundColor:'#000', height: 50, width: 50,position:'absolute',borderRadius:75,transform: [{rotate: spin2}]}}
                            source={require('../assets/logo4.png')}
                        />
                        <Animated.Image
                            style={{backgroundColor:'#000', height: 10, width: 10,position:'absolute',borderRadius:20}}
                            source={require('../assets/logo5.png')}
                        />
                    </View>
                            
                    <View
                        style={{
                            width:'60%',
                            alignItems:'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize:20,
                                fontWeight:'bold',
                                color:'#f77000'
                            }}
                        >Today{"'"}s Panchangam </Text>
                        <Text
                            style={{
                                fontWeight:'bold',
                                fontSize:15,
                                color:'#fff',
                            }}
                        >
                        • This is Description{'\n'}
                        • This is Description{'\n'}
                        • This is Description{'\n'}
                        • This is Description{'\n'}
                        • This is Description{'\n'}
                        • This is Description{'\n'}
                        </Text>
                    </View>

               </View>
           </View>
           <View
                style={{
                    paddingHorizontal:20,
                    marginTop:10
                }}
           >
                <Text style={{
                    fontSize:24,
                    fontWeight:'bold',
                    color:'#f77000',
                    marginBottom:10
                }}>Horoscope Services</Text>

                <View
                    style={{
                        flexDirection:'row',
                        marginBottom:10,
                        width:'100%'
                    }}
                >
                    <View style={{
                        width:'25%',
                        height:80,
                        borderWidth:0,
                        borderColor:'#f77000',
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Personal')} style={{alignItems:'center'}}>
                            <Foundation name="torso-business" size={40} color="#f77000" />
                            <Text style={{ 
                                color:'#f77000',
                                fontWeight:'bold'
                            }}>Personal</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:'25%',
                        height:80,
                        borderWidth:0,
                        marginLeft:'12.5%',
                        marginRight:'12.5%',
                        borderColor:'#f77000',
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate("Matrimonial")} style={{alignItems:'center'}}>
                            <MaterialCommunityIcons name="calendar-heart" size={38} color="#f77000" />
                            <Text style={{ 
                                color:'#f77000',
                                fontWeight:'bold'
                            }}>Matrimonial</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:'25%',
                        height:80,
                        borderWidth:0,
                        borderColor:'#f77000',
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Daily')} style={{alignItems:'center'}}>
                            <MaterialCommunityIcons name="calendar-clock" size={38} color="#f77000" />
                            <Text style={{ 
                                color:'#f77000',
                                fontWeight:'bold'
                            }}>Daily</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View
                    style={{
                        flexDirection:'row',
                        marginBottom:10,
                        width:'100%'
                    }}
                >
                    <View style={{
                        width:'25%',
                        height:80,
                        borderWidth:0,
                        borderColor:'#f77000',
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Business')} style={{alignItems:'center'}}>
                            <Ionicons name="business" size={38} color="#f77000" />
                            <Text style={{ 
                                color:'#f77000',
                                fontWeight:'bold'
                            }}>Business</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:'25%',
                        height:80,
                        borderWidth:0,
                        marginLeft:'12.5%',
                        marginRight:'12.5%',
                        borderColor:'#f77000',
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Travel')} style={{alignItems:'center'}}>
                            <FontAwesome name="heartbeat" size={36} color="#f77000" />
                            <Text style={{ 
                                color:'#f77000',
                                fontWeight:'bold'
                            }}>Travel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:'25%',
                        height:80,
                        borderWidth:0,
                        borderColor:'#f77000',
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Astrology')} style={{alignItems:'center'}}>
                            <FontAwesome5 name="sun" size={36} color="#f77000" />
                            <Text style={{ 
                                color:'#f77000',
                                fontWeight:'bold'
                            }}>Astrology</Text>
                        </TouchableOpacity>
                    </View>
                </View>
           </View>
           <View
                style={{
                    paddingHorizontal:20,
                    marginTop:10
                }}
           >
                <Text style={{
                    fontSize:24,
                    fontWeight:'bold',
                    color:'#f77000',
                    marginBottom:10
                }}>Other Services</Text>
                <View
                    style={{
                        flexDirection:'row',
                        marginBottom:10,
                        width:'100%'
                    }}
                >
                    <View style={{
                        width:'25%',
                        height:80,
                        borderWidth:0,
                        borderColor:'#f77000',
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Homas')} style={{alignItems:'center'}}>
                            <MaterialCommunityIcons name="campfire" size={40} color="#f77000" />
                            <Text style={{ 
                                color:'#f77000',
                                fontWeight:'bold'
                            }}>Homas</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:'25%',
                        height:80,
                        borderWidth:0,
                        marginLeft:'12.5%',
                        marginRight:'12.5%',
                        borderColor:'#f77000',
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Japas')} style={{alignItems:'center'}}>
                            <MaterialCommunityIcons name="mother-heart" size={40} color="#f77000" />
                            <Text style={{ 
                                color:'#f77000',
                                fontWeight:'bold'
                            }}>Japas</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:'25%',
                        height:80,
                        borderWidth:0,
                        borderColor:'#f77000',
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Muhurthas')} style={{alignItems:'center'}}>
                            <FontAwesome5 name="star-of-david" size={38} color="#f77000" />
                            <Text style={{ 
                                color:'#f77000',
                                fontWeight:'bold'
                            }}>Muhurthas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View
                    style={{
                        flexDirection:'row',
                        marginBottom:10,
                        width:'100%'
                    }}
                >
                    <View style={{
                        width:'25%',
                        height:80,
                        borderWidth:0,
                        borderColor:'#f77000',
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Calendars')} style={{alignItems:'center'}}>
                            <FontAwesome5 name="calendar-alt" size={36} color="#f77000" />
                            <Text style={{ 
                                color:'#f77000',
                                fontWeight:'bold'
                            }}>Calendars</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:'25%',
                        height:80,
                        borderWidth:0,
                        marginLeft:'12.5%',
                        marginRight:'12.5%',
                        borderColor:'#f77000',
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Panchangams')} style={{alignItems:'center'}}>
                            <Ionicons name="book" size={36} color="#f77000" />
                            <Text style={{ 
                                color:'#f77000',
                                fontWeight:'bold'
                            }}>Panchangams</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width:'25%',
                        height:80,
                        borderWidth:0,
                        borderColor:'#f77000',
                        borderRadius:15,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Names')} style={{alignItems:'center'}}>
                            <MaterialCommunityIcons name="mother-nurse" size={40} color="#f77000" />
                            <Text style={{ 
                                color:'#f77000',
                                fontWeight:'bold'
                            }}>Baby Names</Text>
                        </TouchableOpacity>
                    </View>
                </View>

           </View>
        </View>
    )
}
export default HomeScreen;