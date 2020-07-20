import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {UserProvider} from './src/context/UserProvider'
export default function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}
