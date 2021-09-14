import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "../screens/TabScreens/HomeScreen";
import { DetailsScreen } from "../screens/TabScreens/DetailsScreen";
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export function TabNavigation() {
    return (    
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="3e2465"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case "Home":
                            iconName = focused ? "home" : "home-outline";
                            break;
                        case "Details":
                            iconName = focused ? 'list-circle' : 'list-circle-outline';
                            break;
                        default:
                            return
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Details" component={DetailsScreen} />
        </Tab.Navigator>    
    );
}