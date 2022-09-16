import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppBottomTabNavigator from './AppTabNavigator';
import AppDrawerNavigator from './AppDrawerNavigator';
import 'react-native-gesture-handler';
import { useEffect} from 'react';

const AppStack = createStackNavigator();

const RootNavigator =({navigation})=>{
    useEffect(() => {
        const { routes } = navigation.getState();
    
        const filteredRoutes = routes.filter(
          route => route.name !== 'Splash',
        );
    
        navigation.reset({
          index: filteredRoutes.length - 1,
          routes: filteredRoutes,
        });
      },[])
    return(
            <AppStack.Navigator
                initialRouteName='Tab'
                screenOptions={{
                    headerShown:false,
                }}
            >
                <AppStack.Screen name='Drawer' children={AppDrawerNavigator} />
            </AppStack.Navigator>
    )
}

export default RootNavigator;