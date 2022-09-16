import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';


const RupuluScreen = () =>
{
    return(
        <View
            style={{
                alignItems:'center',
                height:'100%',
                backgroundColor:'#fff'
            }}
        >
            <View
                style={{
                    height:'24%',
                    width:'95%',
                    borderWidth:3,
                    borderColor:'#f77000',
                    margin:10,
                    flexDirection:'row',
                    padding:5
                }}
            >
                <View
                    style={{
                        width:'40%',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Image
                        source={require('../assets/logo1.png')}
                        style={{
                            height:140,
                            width:140,
                        }}
                    />
                </View>
                <View>
                        <Text
                            style={{
                                fontSize:22,
                                padding:8,
                                fontWeight:'bold',
                                color:'#f77000'
                            }}
                        >Name of the Product</Text>
                        <Text
                            style={{
                                fontWeight:'bold',
                                padding:8,
                                fontSize:15,
                                marginBottom:15
                            }}
                        >This is the Description........{'\n'}This is the Description........</Text>
                        <View
                            style={{flexDirection:'row',alignItems:'flex-end'}}
                        >
                            <View style={{padding:8}}>
                                <Text style={{fontSize:18,fontWeight:'bold',color:'#f77000',marginRight:20}}>$100/₹7500</Text>
                            </View>
                            <View
                                style={{
                                    paddingHorizontal:8,
                                    backgroundColor:'#000',
                                    alignItems: 'center',
                                    justifyContent:'center',
                                    borderRadius:10,
                                    padding:4,
                                    marginBottom:5
                                }}
                            >
                                <TouchableOpacity
                                onPress={()=>alert("Order Now")}
                                >
                                    <Text
                                        style={{
                                            color:'#fff',
                                            fontSize:18,
                                            fontWeight:'bold'
                                        }}
                                    >Order Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </View>



            <View
                style={{
                    height:'24%',
                    width:'95%',
                    borderWidth:3,
                    borderColor:'#f77000',
                    margin:10,
                    flexDirection:'row',
                    padding:5
                }}
            >
                <View
                    style={{
                        width:'40%',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Image
                        source={require('../assets/logo1.png')}
                        style={{
                            height:140,
                            width:140,
                        }}
                    />
                </View>
                <View>
                        <Text
                            style={{
                                fontSize:22,
                                padding:8,
                                fontWeight:'bold',
                                color:'#f77000'
                            }}
                        >Name of the Product</Text>
                        <Text
                            style={{
                                fontWeight:'bold',
                                padding:8,
                                fontSize:15,
                                marginBottom:15
                            }}
                        >This is the Description........{'\n'}This is the Description........</Text>
                        <View
                            style={{flexDirection:'row',alignItems:'flex-end'}}
                        >
                            <View style={{padding:8}}>
                                <Text style={{fontSize:18,fontWeight:'bold',color:'#f77000',marginRight:20}}>$100/₹7500</Text>
                            </View>
                            <View
                                style={{
                                    paddingHorizontal:8,
                                    backgroundColor:'#000',
                                    alignItems: 'center',
                                    justifyContent:'center',
                                    borderRadius:10,
                                    padding:4,
                                    marginBottom:5
                                }}
                            >
                                <TouchableOpacity
                                onPress={()=>alert("Order Now")}
                                >
                                    <Text
                                        style={{
                                            color:'#fff',
                                            fontSize:18,
                                            fontWeight:'bold'
                                        }}
                                    >Order Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </View>


            <View
                style={{
                    height:'24%',
                    width:'95%',
                    borderWidth:3,
                    borderColor:'#f77000',
                    margin:10,
                    flexDirection:'row',
                    padding:5
                }}
            >
                <View
                    style={{
                        width:'40%',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Image
                        source={require('../assets/logo1.png')}
                        style={{
                            height:140,
                            width:140,
                        }}
                    />
                </View>
                <View>
                        <Text
                            style={{
                                fontSize:22,
                                padding:8,
                                fontWeight:'bold',
                                color:'#f77000'
                            }}
                        >Name of the Product</Text>
                        <Text
                            style={{
                                fontWeight:'bold',
                                padding:8,
                                fontSize:15,
                                marginBottom:15
                            }}
                        >This is the Description........{'\n'}This is the Description........</Text>
                        <View
                            style={{flexDirection:'row',alignItems:'flex-end'}}
                        >
                            <View style={{padding:8}}>
                                <Text style={{fontSize:18,fontWeight:'bold',color:'#f77000',marginRight:20}}>$100/₹7500</Text>
                            </View>
                            <View
                                style={{
                                    paddingHorizontal:8,
                                    backgroundColor:'#000',
                                    alignItems: 'center',
                                    justifyContent:'center',
                                    borderRadius:10,
                                    padding:4,
                                    marginBottom:5
                                }}
                            >
                                <TouchableOpacity
                                onPress={()=>alert("Order Now")}
                                >
                                    <Text
                                        style={{
                                            color:'#fff',
                                            fontSize:18,
                                            fontWeight:'bold'
                                        }}
                                    >Order Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </View>
            

            <View
                style={{
                    height:'24%',
                    width:'95%',
                    borderWidth:3,
                    borderColor:'#f77000',
                    margin:10,
                    flexDirection:'row',
                    padding:5
                }}
            >
                <View
                    style={{
                        width:'40%',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Image
                        source={require('../assets/logo1.png')}
                        style={{
                            height:140,
                            width:140,
                        }}
                    />
                </View>
                <View>
                        <Text
                            style={{
                                fontSize:22,
                                padding:8,
                                fontWeight:'bold',
                                color:'#f77000'
                            }}
                        >Name of the Product</Text>
                        <Text
                            style={{
                                fontWeight:'bold',
                                padding:8,
                                fontSize:15,
                                marginBottom:15
                            }}
                        >This is the Description........{'\n'}This is the Description........</Text>
                        <View
                            style={{flexDirection:'row',alignItems:'flex-end'}}
                        >
                            <View style={{padding:8}}>
                                <Text style={{fontSize:18,fontWeight:'bold',color:'#f77000',marginRight:20}}>$100/₹7500</Text>
                            </View>
                            <View
                                style={{
                                    paddingHorizontal:8,
                                    backgroundColor:'#000',
                                    alignItems: 'center',
                                    justifyContent:'center',
                                    borderRadius:10,
                                    padding:4,
                                    marginBottom:5
                                }}
                            >
                                <TouchableOpacity
                                onPress={()=>alert("Order Now")}
                                >
                                    <Text
                                        style={{
                                            color:'#fff',
                                            fontSize:18,
                                            fontWeight:'bold'
                                        }}
                                    >Order Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </View>

        </View>
    )
    
}

export default RupuluScreen;