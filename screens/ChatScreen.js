import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Button,
    TouchableOpacity,
    TextBase,
    TextInput
} from 'react-native';
import { Modal } from 'react-native-paper';
import ChatWidget from '@papercups-io/chat-widget-native';
import { FontAwesome5,Ionicons,AntDesign } from '@expo/vector-icons';

const ChatScreen = ({navigation, route}) =>
{
    const [isModalVisible, setModalVisible] = React.useState(false);
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
                justifyContent:'space-between',
                backgroundColor:'#f77000',
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
                    >Chat with Guruji</Text>
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
                    borderRadius:10,
                    margin:15,
                    padding:8,
                    borderBottomLeftRadius:0,
                    backgroundColor:'#000',
                    maxWidth:'75%',
                    top:'14%',
                    position:'absolute'
                }}
            >
                    <Text
                        style={{
                            color:'#fff',
                            fontSize:20,
                            fontWeight:'bold'
                        }}
                    >Hiahudsjfuiasjfhashdfuasdhfuhsduifhuishfidshfhsi</Text>
            </View>


            <View
                style={{
                    borderRadius:15,
                    borderBottomRightRadius:0,
                    margin:15,
                    padding:8,
                    backgroundColor:'#f77000',
                    alignItems:'flex-end',
                    top:'22%',
                    right:0,
                    position:'absolute',
                    maxWidth:'75%'
                }}
            >
                    <Text
                        style={{
                            color:'#fff',
                            fontSize:20,
                            fontWeight:'bold'
                        }}
                    >Hellogjfjsdjjfksdjflkdjsflkjdslkjflkdsjflksdjklfjsdkfjlksdjf</Text>
            </View>

            <View
                style={{
                    borderRadius:15,
                    borderBottomLeftRadius:0,
                    margin:15,
                    padding:8,
                    backgroundColor:'#000',
                    alignItems:'flex-end',
                    top:'30%',
                    left:0,
                    position:'absolute',
                    maxWidth:'75%'
                }}
            >
                    <Text
                        style={{
                            color:'#fff',
                            fontSize:20,
                            fontWeight:'bold'
                        }}
                    >• • •</Text>
            </View>

            <TextInput
                style={{
                    height: 50,
                    marginHorizontal:15,
                    marginVertical:5,
                    padding: 10,
                    paddingLeft:50,
                    paddingRight:50,
                    borderWidth:3,
                    borderRadius:30,
                    borderColor:'#f77000',
                    fontWeight:'bold',
                    fontSize:18,
                    position: 'absolute', //Here is the trick
                    bottom: '8%',
                    width:'90%'
                }}
                placeholder='Message here...'
            />  
            <TouchableOpacity onPress={()=>alert('Send')} style={{alignItems:'center',position:'absolute',bottom:'9.5%',right:'10%'}}>
                        <Ionicons name="send" size={28} color="#f77000" />
            </TouchableOpacity>  
            <TouchableOpacity onPress={()=>alert('Add')} style={{alignItems:'center',position:'absolute',bottom:'10%',left:'7%'}}>
                        <AntDesign name="pluscircle" size={24} color="#000" />
            </TouchableOpacity>                      
        </View>
    )
}

export default ChatScreen;