import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUpScreen } from "../screens/SignUpScreen";
import { SignInScreen } from "../screens/SignInScreen";
import colors from "../theme/colors";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator 
            initialRouteName="SignIn"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 44
                },
                headerTitleAlign: "center"
            }}>
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen} 
                options={{ title: "Cadastro de Usuário" }} />
        </Stack.Navigator>
    );
}