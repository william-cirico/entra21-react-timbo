import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { SplashScreen } from "../screens/SplashScreen";
import { AuthRoutes } from "./AuthRoutes";
import { AppRoutes } from "./AppRoutes";
import { TodoProvider } from "../contexts/TodoContext";
import { UserProvider } from "../contexts/UserContext";

export function Router() {
    const { state } = useAuth();

    return (
        <NavigationContainer>
            {state.isLoading ? (                
                <SplashScreen />
            ) : state.accessToken == null ? (                
                <AuthRoutes />
            ) : (                
                <UserProvider>
                    <TodoProvider>
                        <AppRoutes />
                    </TodoProvider>
                </UserProvider>                
            )}
        </NavigationContainer>
    );    
}