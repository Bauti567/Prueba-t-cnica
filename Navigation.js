import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

// Section Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";



// Variables

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();


function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name = "Bienvenido!"
                component = {HomeScreen}
            />
        </HomeStackNavigator.Navigator>
    )
}


function MyTabs() {
    return (

      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: '#ffd000',
        }}
      >
        <Tab.Screen 
            name="Home" 
            component={MyStack} 
            options={{
            tabBarLabel: 'Inicio',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle" size={size} color={color} />
            ),
        }}
        />
        <Tab.Screen 
            name="Configuración" 
            component={SettingsScreen} 
            options={{
                tabBarLabel: 'Configuracion',
                tabBarIcon: ({color, size}) => (
                <Ionicons name="settings" size={24} color={color} />

                ),

            }}
        />
      </Tab.Navigator>
    );
  }


export default function Navigation() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }