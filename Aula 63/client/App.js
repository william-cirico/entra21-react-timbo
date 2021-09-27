import React from 'react';
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from './src/theme';
import { Router } from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <Router />        
      </AuthProvider>
    </PaperProvider>
  );
}
