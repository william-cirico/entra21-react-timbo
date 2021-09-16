import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { SplashScreen } from "../screens/SplashScreen";
import { AuthRoutes } from "./AuthRoutes";
import { HomeScreen } from "../screens/HomeScreen";

export function Router() {  
    const { state } = useAuth();
    
    return (
        <NavigationContainer>
            {state.isLoading ? (                
                <SplashScreen />
            ) : state.accessToken == null ? (                
                <AuthRoutes />
            ) : (                
                <HomeScreen />
            )}
        </NavigationContainer>
    );    
}