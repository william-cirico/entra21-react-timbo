import React from 'react';
import { AuthRoutes } from './routes/AuthRoutes';
import { NavigationContainer } from "@react-navigation/native";
// import { SignInScreen } from './screens/SignInScreen';
import { AuthProvider } from './contexts/AuthContext';
import { Router } from './routes/Router';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}


