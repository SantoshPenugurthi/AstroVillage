import React from 'react';
import{
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    Easing
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState,useEffect } from 'react';

import HomeScreen from './HomeScreen';



const GetStartedScreen = ({navigation}) =>
{

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
        <View style={styles.container}>
            <View style={styles.header}>
                <Animated.Image
                    style={{height: 350, width: 350,position:'absolute', transform: [{rotate: spin}]}}
                    source={require('../assets/logo3.png')}
                />
                <Animated.Image
                    style={{backgroundColor:'#000', height: 150, width: 150,position:'absolute',borderRadius:75,transform: [{rotate: spin2}]}}
                    source={require('../assets/logo4.png')}
                />
                <Animated.Image
                    style={{backgroundColor:'#000', height: 35, width: 35,position:'absolute',borderRadius:20}}
                    source={require('../assets/logo5.png')}
                />
                <Animated.Image
                    style={{height: 350, width: 350,position:'absolute', transform: [{rotate: spin}]}}
                    source={require('../assets/logo3.png')}
                />
                <Animated.Image
                    style={{backgroundColor:'#000', height: 150, width: 150,position:'absolute',borderRadius:75,transform: [{rotate: spin2}]}}
                    source={require('../assets/logo4.png')}
                />
                <Animated.Image
                    style={{backgroundColor:'#000', height: 35, width: 35,position:'absolute',borderRadius:20}}
                    source={require('../assets/logo5.png')}
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.text}>Welcome...</Text>
                <Text style={styles.text2}>Stay Connected with Us</Text>

                <View style={{flexDirection:'row'}}>
                    <View style={{
                        backgroundColor:'#fff',
                        alignItems:'center',
                        marginTop:80,
                        marginLeft:10,
                        height:35,
                        width:70,
                        paddingRight:0,
                        borderRadius:30,
                        justifyContent:'center'
                    
                    }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Splash')}>
                            <Text style={styles.buttonText}>
                                <Ionicons name="arrow-back" color="#f77000" size={23} />
                                Intro{' '}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Root')}>
                            <Text style={styles.buttonText}>Get Started{' '}
                                <Ionicons name="arrow-forward" color="#f77000" size={23} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}

export default GetStartedScreen;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#000'
        },
        header:{
            flex:3,
            justifyContent: 'center',
            alignItems: 'center'
        },
        footer:{
            flex:1,
            backgroundColor:'#f77000',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 100,
            paddingVertical: 20,
            paddingHorizontal: 30,
            borderTopWidth:3,
            borderRightWidth:3,
            borderColor:'#fff'
        },
        logo: {
            width: 350,
            height: 350
        },
        text: {
            color: '#000',
            marginTop:5,
            fontSize:30,
            fontWeight:'bold',
            fontFamily:'Roboto'
        },
        text2:{
            color:'#fff',
            fontSize:20,
            marginTop:10,
            fontWeight:'bold',
            fontFamily:'Roboto'
        },
        button: {
            alignItems:'center',
            marginTop:70,
            marginLeft:100,
            backgroundColor:'#000',
            padding:12,
            borderRadius:30,
            justifyContent:'center'
        },
        buttonText:{
            fontSize:23,
            color:'#f77000',
            justifyContent:'center',
            alignItems:'center',
            fontWeight:'bold',
            fontFamily:'Roboto'
            
        }
    }
)