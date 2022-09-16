import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput
} from 'react-native';
import { FontAwesome5,Ionicons } from '@expo/vector-icons';

const ContactScreen = ({navigation}) =>
{
    return(
        <View
            style={{
                flex:1
            }}
        >
            <View style={{
                flexDirection:'row',
                alignItems:'flex-end',
                backgroundColor:'#f77000',
                height:'14%',
                padding:15
            }}>
                <View
                    style={{
                    
                    }}
                >
                    <TouchableOpacity onPress={()=>navigation.toggleDrawer()} style={{alignItems:'center'}}>
                        <Ionicons name="menu" size={32} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginLeft:20
                    }}
                >
                    <Text
                        style={{
                            color:'#fff',
                            fontSize:24,
                            fontWeight:'bold',
                            paddingBottom:4
                        }}
                    >Contact Us</Text>
                </View>
            </View>

            <View
                style={{
                    backgroundColor:'#000',
                    margin:20,
                    paddingVertical:40,
                    padding:20,
                }}
            >
                <View
                    style={{
                        marginBottom:10,
                        flexDirection:'row',
                        paddingVertical:20,
                        borderBottomWidth:3,
                        borderColor:'#fff',
                        alignItems:'center'
                    }}
                >
                    <View
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                            padding:10,
                            borderWidth:3,
                            borderRadius:25,
                            borderColor:'#fff',
                            marginRight:25,
                            width:50,
                            height:50
                        }}
                    >
                        <FontAwesome5 name="phone" size={24} color="#f77000" />
                    </View>
                    <View>
                        <Text
                            style={{
                                color:'#f77000',
                                fontSize:25,
                                paddingRight:50
                            }}
                        >+91 8885559147</Text>
                        <Text
                                style={{
                                    color:'#f77000',
                                    fontSize:25,
                                    paddingRight:50
                                }}
                        >+91 8885559148</Text>
                    </View>
                </View>
               <View
                    style={{
                        marginBottom:10,
                        flexDirection:'row',
                        paddingVertical:20,
                        borderBottomWidth:3,
                        borderColor:'#fff',
                        alignItems:'center',
                    }}
                >
                    <View
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                            padding:10,
                            borderWidth:3,
                            borderRadius:25,
                            borderColor:'#fff',
                            marginRight:25,
                            width:50,
                            height:50
                        }}
                    >
                        <Ionicons name="mail" size={24} color="#f77000" />
                    </View>
                    <View>
                        <Text
                            style={{
                                color:'#f77000',
                                fontSize:25,
                                paddingRight:50
                            }}
                        >support@gmail.com</Text>
                        <Text
                                style={{
                                    color:'#f77000',
                                    fontSize:25,
                                    paddingRight:50
                                }}
                        >info@gmail.com</Text>
                    </View>
                </View>
                <View
                    style={{
                        marginBottom:10,
                        flexDirection:'row',
                        alignItems:'center',
                        paddingVertical:20,
                        borderBottomWidth:3,
                        borderColor:'#fff'
                    }}
                >
                    <View
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                            padding:10,
                            borderWidth:3,
                            borderRadius:25,
                            borderColor:'#fff',
                            marginRight:25,
                            width:50,
                            height:50
                        }}
                    >
                        <Ionicons name="location-sharp" size={24} color="#f77000" />
                    </View>
                    <View>
                        <Text
                            style={{
                                color:'#f77000',
                                fontSize:22,
                                textAlign:'justify',
                                paddingRight:50
                            }}
                        >Astro Village, Sreenilaya Apartments, Flat. No. 101, 1st Floor, Chitrapuri Colony,Near Nanakramguda,Khajaguda hyderabad-500 008</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                        flexDirection:'row',
                        marginTop :30,
                        marginHorizontal:25,
                        backgroundColor:'#f77000',
                        alignItems: 'center',
                        justifyContent:'center',
                        borderRadius:5,
                        height:45
                    }}
                >
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('Appointment') }
                    >
                        <Text
                            style={{
                                color:'#fff',
                                fontSize:20,
                                fontWeight:'bold'
                            }}
                        >Make an Appointment</Text>
                    </TouchableOpacity>
             </View>
        </View>
    )
}

export default ContactScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});