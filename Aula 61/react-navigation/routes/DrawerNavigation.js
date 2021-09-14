import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../screens/DrawerScreens/HomeScreen";
import { UseStateScreen } from "../screens/DrawerScreens/UseStateScreen";
import { UseRefScreen } from "../screens/DrawerScreens/UseRefScreen";
import { UseEffectScreen } from "../screens/DrawerScreens/UseEffectScreen";
import { UseContextScreen } from "../screens/DrawerScreens/UseContextScreen";
import { UseReducerScreen } from "../screens/DrawerScreens/UseReducerScreen";
import { UseCallbackScreen } from "../screens/DrawerScreens/UseCallbackScreen";
import { UseMemoScreen } from "../screens/DrawerScreens/UseMemoScreen";

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
    return (    
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="UseState" component={UseStateScreen} />
            <Drawer.Screen name="UseEffect" component={UseEffectScreen} />
            <Drawer.Screen name="UseRef" component={UseRefScreen} />
            <Drawer.Screen name="UseContext" component={UseContextScreen} />
            <Drawer.Screen name="UseReducer" component={UseReducerScreen} />
            <Drawer.Screen name="UseCallback" component={UseCallbackScreen} />
            <Drawer.Screen name="UseMemo" component={UseMemoScreen} />
        </Drawer.Navigator>
    );
}