import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';
import AsteroidDetails from '../screen/AsteroidDetails';

const Stack = createNativeStackNavigator();

function StackNaviagtion() {

  return (
    <Stack.Navigator
      initialRouteName={'LoginScreen'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        name="AsteroidDetails"
        component={AsteroidDetails}
      />
    </Stack.Navigator>
  );
}

export default StackNaviagtion;
