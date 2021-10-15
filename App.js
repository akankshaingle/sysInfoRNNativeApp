import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{
          headerTransparent: true,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: '700',
            color: 'red',
            letterSpacing: 0.4,
          }
        }}>
          <Stack.Screen name='Login' getComponent={() => require('./screens/Login').default} />
          <Stack.Screen name='Register' getComponent={() => require('./screens/Register').default} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
