import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Message from '../screens/message';
import Call from '../screens/call';
import Status from '../screens/status';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
    const icon1 = () => {
        return <AntDesign name="message1" size={25} color="black" />
    }
    const icon2 = () => {
        return <Ionicons name="heart" size={25} color="black" />
    }
    const icon3 = () => {
        return <MaterialIcons name="add-ic-call" size={25} color="black" />
    }
    return(
        // #1
        // <Stack.Navigator>
        //     <Stack.Screen name="Message" component={Message}/>
        //     <Stack.Screen name="Call" component={Call}/>
        //     <Stack.Screen name="Status" component={Status}/>
        // </Stack.Navigator>
        // 2#

        // <Tab.Navigator>
        //     <Tab.Screen name="Message" component={Message} options={{tabBarBadge: 3, tabBarIcon: icon1, tabBarActiveTintColor: 'tomato', tabBarActiveBackgroundColor: 'yellow',}}/>
        //     <Tab.Screen name="Status" component={Status} options={{tabBarIcon: icon2}}/>
        //     <Tab.Screen name="Call" component={Call} options={{tabBarBadge: 3, tabBarIcon: icon3}}/>
        // </Tab.Navigator>

        // 3#
        <Drawer.Navigator initialRouteName="Message">
        <Drawer.Screen name="Message" component={Message} />
        <Drawer.Screen name="Call" component={Call} />
        <Drawer.Screen name="Status" component={Status} />
        </Drawer.Navigator>
    )
}
export default App