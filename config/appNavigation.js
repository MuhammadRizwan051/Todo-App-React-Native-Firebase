import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../screens/Login';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();



function AppNavigation() {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Login" component={Login} />
                    <Tab.Screen name="SignUp" component={SignUp} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppNavigation

