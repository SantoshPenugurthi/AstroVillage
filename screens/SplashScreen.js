import React, { useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Ionicons ,MaterialCommunityIcons } from '@expo/vector-icons';

const SplashScreen=({navigation})=> {
  const [currentStep, setCurrentStep] = useState(0)
  const [ steps, setSteps] = useState([
    {
      id:1,
      name:'handshake',
      image: require("../assets/logo3.png"),
      title: "Meet with Guruji"
    },
    {
        id:2,
        name:'phone-check',
      image: require("../assets/logo3.png"),
      title: "Phone Call Appointment",
    },
    {
        id:3,
        name:'web',
      image: require("../assets/logo3.png"),
      title: "Online Horoscope Report",
    },
    {
        id:4,
        name:'cart',
        image: require("../assets/logo3.png"),
        title: "Buy Our Products",
    }
  ])
  const nextStep = () => {
    setCurrentStep(currentStep >= 3 ? 3 : currentStep+1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep <= 0 ? 0 : currentStep-1)
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          borderWidth:0,
          borderRadius:0,
          borderColor:'#fff',
          height:200,
          width:300,
          justifyContent:'center',
          alignItems:'center',
          marginTop:120
        }}
      >
        <MaterialCommunityIcons name={steps[currentStep].name} size={200} color='#fff' />
      </View>
      <Text style={styles.title}>{steps[currentStep].title}</Text>
      <View style={styles.IndicatorView}>
        {steps.map(( steps ,index) => {
          return (
            <View style={{
                height: 10,
                marginHorizontal: 5,
                borderRadius: 10,
                width: currentStep === index ? 20 : 10,
                backgroundColor:  currentStep === index ? "#fff" : "#000"
            }} key={index}>
            
            </View>
          )
        }
        )
        }
      </View>
     
      
      <View style={styles.navigationView}>
        {
          currentStep === 0 ? 
            <TouchableOpacity 
                onPress={() => navigation.navigate('Onboarding')}
                style={{...styles.Button, borderTopEndRadius: 20, borderBottomEndRadius:20,}}>
                <Text style={styles.ButtonText}>
                Back</Text>
                </TouchableOpacity>
          :
            <TouchableOpacity 
              onPress={() => prevStep()}
              style={{...styles.Button, borderTopEndRadius: 20, borderBottomEndRadius:20,}}>
              <Text style={styles.ButtonText}>
              <Ionicons name="arrow-back" color="#f77000" size={23} />
              </Text>
            </TouchableOpacity>
        }
        {
            currentStep===3?
                <TouchableOpacity 
                onPress={() => navigation.navigate('Root')}
                style={{...styles.Button, borderTopStartRadius: 20, borderBottomStartRadius:20}}>
                <Text style={styles.ButtonText}>Done</Text>
                </TouchableOpacity>
            :
            <TouchableOpacity 
            onPress={() => nextStep()}
            style={{...styles.Button, borderTopStartRadius: 20, borderBottomStartRadius:20}}>
            <Text style={styles.ButtonText}>
            <Ionicons name="arrow-forward" color="#f77000" size={23} />
            </Text>
            </TouchableOpacity>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:150,
    backgroundColor: '#f77000',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    margin:0
  },
  img: {
    width: 300,
    height: 300,
    marginHorizontal:30,
  },
  IndicatorView: {
    justifyContent:'flex-end',
    alignItems:'flex-end',
    flexDirection: "row",
    marginBottom:50
  },
  Indicator: {
    height: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    color:'#fff',
    fontSize: 30,
    marginTop:0,
    marginBottom:200,
  },
  navigationView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:0,
    width: "90%",
  },
  Button: {
    backgroundColor: "#000",
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center"
  },
  ButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize:20,
    paddingVertical:8,
    paddingHorizontal:25
  }

});

export default SplashScreen;
