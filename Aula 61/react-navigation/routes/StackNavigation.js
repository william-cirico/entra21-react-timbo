import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from '../screens/StackScreens/HomeScreen';
import { DetailsScreen } from '../screens/StackScreens/DetailsScreen';
import { ProfileScreen } from '../screens/StackScreens/ProfileScreen';

const Stack = createNativeStackNavigator();

export function StackNavigation() {    
  return (
    <Stack.Navigator 
        initialRouteName="Home"        
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f45112"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 44
          },
          headerTitleAlign: "center"
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "Página Inicial" }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={({ route }) => ({ title: route.params.screenTitle })}
        />
      </Stack.Navigator>
  );
}