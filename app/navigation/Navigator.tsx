import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import PropertyOwnersScreen from '../screens/PropertyOwnersScreen';
import RentersScreen from '../screens/RentersScreen';
import { RootStackParamList } from '../types';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeScreen">
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false, tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ tabBarLabel: 'Details', headerShown: false }}
        />
        <Tab.Screen
          name="PropertyOwnersScreen"
          component={PropertyOwnersScreen}
          options={{ tabBarLabel: 'Property Owners', headerShown: false }}
        />
        <Tab.Screen
          name="RentersScreen"
          component={RentersScreen}
          options={{ tabBarLabel: 'Renters', headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
