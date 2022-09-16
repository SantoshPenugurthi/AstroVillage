import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Image
} from 'react-native';
import { FontAwesome5,Ionicons } from '@expo/vector-icons';

const AboutScreen = ({navigation}) =>
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
                    >About Us</Text>
                </View>
            </View>
            <View
                style={{
                    padding:10
                }}
            >
                <View
                    style={{
                        marginTop:20,
                        marginBottom:10,
                        borderWidth:5,
                        borderColor:'#f77000',
                        height:250,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <Image
                        source={require('../assets/logo1.png')}
                        style={{
                            height:200,
                            width:200,
                        }}
                    />
                </View>
                <Text
                    style={{
                        fontWeight:'bold',
                        fontSize:25,
                        color:'#f77000',
                        marginBottom:10
                    }}
                >Suryanarayana Sharma Mantha</Text>
                <Text
                    style={{
                        fontSize:16,
                        textAlign:'justify',
                        color:'#000',
                        fontWeight:'bold'
                    }}
                >
                    {"      "}Suryanarayana Sharma Mantha is citizen of India based in Hyderabad. Since childhood he is devotee of Gaayatri Devi and Shivji. And he is a Srividya Upasak. With the blessings of God he got interested in Astrology and furthermore is blessed with an intuition power for accurate predictions . He says that without the blessings of upasana power and only by just referring to books the predictions will not be accurate . To give accurate predictions we need 90% of sadhana by upasana and 10% of wisdom. The upasana power can only be got by regular worship to God through Gurumukha ( i.e through the channel of Guru-Upadesam). Wisdom can be got through referring the books and practical experience.
                </Text>
            </View>
        </View>
    )
}

export default AboutScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});