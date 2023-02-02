import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TasksScreen from "../pages/TaskScreen";
import TaskCreateScreen from "../pages/TaskCreatScreen";
import DrawerNavigation from "../components/Drawer";

import MyProvider from '../contexts/';

const Stack = createStackNavigator();

const RootStack = () => (
  <MyProvider>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  </MyProvider> 
);

export default RootStack;
