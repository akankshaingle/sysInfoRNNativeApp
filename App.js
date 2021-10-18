import React from 'react'
import { View, Text, } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import HomeIcon from './assets/home.svg';
// import SettingsIcon from './assets/settings.svg';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator
      // screenOptions={({ route }) => {
      //   return {
      //     tabBarIcon: ({ color, size, focused }) => {
      //       switch (route.name) {
      //         case 'Home':
      //           return <HomeIcon height={size} width={size} fill={color} />;
      //         case 'Settings':
      //           return <SettingsIcon height={size} width={size} fill={color} />;
      //         default:
      //           return null;
      //       }
      //     },
      //   };
      // }}
      screenOptions={{
        // headerTransparent: true,
        // headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: '700',
          color: 'red',
          letterSpacing: 0.4,
        }
      }}>
      <Tab.Screen name='Home' getComponent={() => require('./screens/Home').default} />
      <Tab.Screen name='Settings' getComponent={() => require('./screens/Settings').default} />
    </Tab.Navigator >
  )
}

const App = () => {
  const navigationRef = useNavigationContainerRef();

  const onReady = async () => {
    try {
      const res = await AsyncStorage.getItem('@user_info');
      if (res) {
        const user = JSON.parse(res);
        if (user.accessToken) {
          navigationRef.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        }
      }
    } catch (error) {
      console.warn(error);

    }
  }
  return (
    <NavigationContainer ref={navigationRef} onReady={onReady}>
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
        <Stack.Group screenOptions={{ headerShown: false, }}>
          <Stack.Screen name='Home' component={HomeTabNavigation} />
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
