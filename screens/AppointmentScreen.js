import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { FontAwesome5,Ionicons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

const AppointmentScreen = ({navigation, route}) =>
{
    return(
        <View
            style={{
                backgroundColor:'#fff'
            }}
        >
            <View style={{
                flexDirection:'row',
                alignItems:'flex-end',
                justifyContent:'space-between',
                backgroundColor:'#f77000',
                height:'14%',
                padding:15
            }}>
                <View
                    style={{
                    
                    }}
                >
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
                    >Appointment</Text>
                </View>

                <View
                    sytle={{
                                            
                    }}
                >
                    <TouchableOpacity onPress={()=>navigation.navigate('Notification')} style={{alignItems:'center'}}>
                        <FontAwesome5 name="bell" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            <View
                style={{
                    margin:20,
                    paddingBottom:20,
                    borderRadius:10,
                    borderWidth:5,
                    borderColor:'#f77000'
                }}
            >
               <SafeAreaView>
                    <View>
                        <View
                            style={{
                                alignItems:'center',
                                justifyContent:'center',
                                margin:10
                            }}
                        >
                            <Text
                                style={{
                                    color:'#f77000',
                                    fontSize:20,
                                    fontWeight:'bold'
                                }}
                            >
                            Book Your Appointment
                            </Text>
                        </View>
                        <TextInput style={{
                            height: 40,
                            marginHorizontal:15,
                            marginVertical:5,
                            padding: 10,
                            borderBottomWidth:3,
                            borderColor:'#f77000',
                            fontWeight:'bold',
                            fontSize:18
                        }}
                        placeholder="Full Name"
                     />
                    </View>
                    <TextInput
                        style={{
                            height: 40,
                            marginHorizontal:15,
                            marginVertical:5,
                            padding: 10,
                            borderBottomWidth:3,
                            borderColor:'#f77000',
                            fontWeight:'bold',
                            fontSize:18
                        }}
                        placeholder="Email Address"
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={{
                            height: 40,
                            marginHorizontal:15,
                            marginVertical:5,
                            padding: 10,
                            borderBottomWidth:3,
                            borderColor:'#f77000',
                            fontWeight:'bold',
                            fontSize:18
                            
                        }}
                        placeholder="Mobile Number"
                        keyboardType="numeric"
                        maxLength={10}
                    />
                    <TextInput
                        style={{
                            height: 40,
                            marginHorizontal:15,
                            marginVertical:5,
                            padding: 10,
                            borderBottomWidth:3,
                            borderColor:'#f77000',
                            fontWeight:'bold',
                            fontSize:18
                        }}
                        placeholder="Gender(M/F)"
                        maxLength={1}
                    />
                    <TextInput
                        style={{
                            height: 40,
                            marginHorizontal:15,
                            marginVertical:5,
                            padding: 10,
                            borderBottomWidth:3,
                            borderColor:'#f77000',
                            fontWeight:'bold',
                            fontSize:18
                        }}
                        placeholder="Time(HH:MM am/pm)"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={{
                            height: 40,
                            marginHorizontal:15,
                            marginVertical:5,
                            padding: 10,
                            borderBottomWidth:3,
                            borderColor:'#f77000',
                            fontWeight:'bold',
                            fontSize:18
                        }}
                        placeholder="Date(DD-MM-YYYY)"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={{
                            height: 40,
                            marginHorizontal:15,
                            marginVertical:5,
                            padding: 10,
                            borderBottomWidth:3,
                            borderColor:'#f77000',
                            fontWeight:'bold',
                            fontSize:18
                        }}
                        placeholder="Address"
                    />
                    <TextInput
                        style={{
                            height: 40,
                            marginHorizontal:15,
                            marginVertical:5,
                            padding: 10,
                            borderBottomWidth:3,
                            borderColor:'#f77000',
                            fontWeight:'bold',
                            fontSize:18
                        }}
                        placeholder="Reason"
                    />
                    <View
                        style={{
                            
                            justifyContent:'center',
                            margin:10,
                            marginTop:30
                        }}
                    >
                        <Text
                            style={{
                                color:'#f77000',
                                fontSize:20,
                                fontWeight:'bold'
                            }}
                        >
                        Payment Methods
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection:'row',
                            marginHorizontal:20,
                            marginVertical:5,
                            alignItems:'center',
                            justifyContent:'space-between'
                        }}
                    >
                            <View
                                style={{
                                    backgroundColor:'#000',
                                    borderRadius:5,
                                    padding:5,
                                    width:'25%',
                                    alignItems:'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight:'bold',
                                        color:'#fff'
                                    }}
                                >RazorPay</Text>
                            </View>
                            <View
                                style={{
                                    backgroundColor:'#000',
                                    borderRadius:5,
                                    padding:5,
                                    width:'25%',
                                    alignItems:'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight:'bold',
                                        color:'#fff'
                                    }}
                                >UPI</Text>
                            </View>
                            <View
                                style={{
                                    backgroundColor:'#000',
                                    borderRadius:5,
                                    padding:5,
                                    width:'25%',
                                    alignItems:'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight:'bold',
                                        color:'#fff'
                                    }}
                                >Paypal</Text>
                            </View>
                    </View>
                    <View
                        style={{
                            flexDirection:'row',
                            marginTop :30,
                            marginHorizontal:"30%",
                            backgroundColor:'green',
                            alignItems: 'center',
                            justifyContent:'center',
                            borderRadius:20,
                            height:35
                        }}
                    >
                            <TouchableOpacity
                            onPress={()=>alert("payment")}
                            >
                                <Text
                                    style={{
                                        color:'#fff',
                                        fontSize:20,
                                        fontWeight:'bold'
                                    }}
                                >Proceed To Pay</Text>
                            </TouchableOpacity>
                    </View>
                </SafeAreaView> 
            </View>
        </View>
    )
}

export default AppointmentScreen;