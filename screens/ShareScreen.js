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

const ShareScreen = ({navigation}) =>
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
                    >Share the App</Text>
                </View>
            </View>
        </View>
    )
}

export default ShareScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});