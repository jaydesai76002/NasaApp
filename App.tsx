import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNaviagtion from './src/navigation/StackNavigation';

const App = () => {

  return (
    <NavigationContainer>
      <StackNaviagtion />
    </NavigationContainer>
  );
};

export default App;