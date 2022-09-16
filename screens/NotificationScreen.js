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

const NotificationScreen = ({navigation}) =>
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
                    <TouchableOpacity onPress={()=>navigation.goBack()} style={{alignItems:'center'}}>
                        <Ionicons name="arrow-back" size={28} color="#fff" />
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
                    >Notification</Text>
                </View>
            </View>
        </View>
    )
}

export default NotificationScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

