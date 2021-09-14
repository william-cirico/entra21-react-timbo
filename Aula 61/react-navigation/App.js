import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
// import { TabNavigation } from './routes/TabNavigation';
// import { StackNavigation } from './routes/StackNavigation';
import { DrawerNavigation } from './routes/DrawerNavigation';


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}


