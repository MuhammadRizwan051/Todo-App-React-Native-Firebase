import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../screens/Login';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from '../screens/Splash';
import Todo from '../screens/Todo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

// const Stack = createNativeStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
//   </Stack.Navigator>
// )

const Stack = createNativeStackNavigator();
// const Tab = createMaterialTopTabNavigator();

function AppNavigation() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="Todo" component={Todo} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>




            {/* <NavigationContainer independent='true'>
                <Stack.Navigator>
                    <Stack.Screen name='Splash' component={Splash} />
                </Stack.Navigator>
            </NavigationContainer>

            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    tabBarActiveTintColor: 'black',
                    tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
                    tabBarItemStyle: { width: 100 },
                    tabBarStyle: { backgroundColor: '#B4CDE6', paddingVertical: 20 }
                }}>
                    <Tab.Screen name="SignUp" component={SignUp} />
                    <Tab.Screen name="Login" component={Login} />
                    <Tab.Screen name="Todo" component={Todo} />
                    <Tab.Screen name="Home" component={Home} />
                </Tab.Navigator>
            </NavigationContainer> */}








            {/* <NavigationContainer independent='true'>
                    <Tab.Navigator>
                        <Tab.Screen name="SignUp" component={SignUp} />
                        <Tab.Screen name="Login" component={Login} />
                        <Tab.Screen name="Todo" component={Todo} />
                        <Tab.Screen name="Home" component={Home} />
                    </Tab.Navigator>
                </NavigationContainer> */}


        </>
    )
}














export default AppNavigation
