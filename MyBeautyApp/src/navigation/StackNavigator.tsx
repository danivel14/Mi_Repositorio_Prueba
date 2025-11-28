import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import TabsNavigator from './TabsNavigator';
import AppointmentScreen from '../screens/appointments/AppointmentScreen';

export type RootStackParamList = {
    Login: undefined,
    Tabs: {email:string},
    Home: undefined,
    ServiceRegistry: undefined,
}
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return(
        <Stack.Navigator initialRouteName='Login' 
                            screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tabs" component={TabsNavigator} />
        </Stack.Navigator>
    );
}