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

const PersonalScreen = ({navigation}) =>
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
                padding:15,
                marginBottom:10
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
                    >Personal</Text>
                </View>
            </View>
            <View
                style={{
                    flex:1,
                    alignItems:'flex-start',
                    justifyContent:'flex-start',
                    backgroundColor:'#fff',
                }}
            >
                <View
                    style={{
                        height:'30%',
                        width:'100%',
                        borderColor:'#fff',
                        borderWidth:5,
                        backgroundColor:'#000'
                    }}
                >

                </View>
            </View>
        </View>
    )
}

export default PersonalScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});