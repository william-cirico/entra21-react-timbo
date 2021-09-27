import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from "../screens/HomeScreen";
import { DrawerMenu } from "../components/DrawerMenu";

const Drawer = createDrawerNavigator();

export function AppRoutes() {
    return (                     
        <Drawer.Navigator            
            drawerContent={props => <DrawerMenu {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>            
    );
}