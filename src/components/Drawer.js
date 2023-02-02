import React from "react";
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TasksScreen from "../pages/TaskScreen";
import TaskCreateScreen from "../pages/TaskCreatScreen";
import TaskDetails from "../pages/TaskDetails";
import EtapasScreen from "../pages/EtapasScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName="Tasks"
    screenOptions={{
      headerShown: true, // mostrar a barra superior
      activeTintColor: "#fff",
      inactiveTintColor: "#999",
      activeBackgroundColor: "#333",
      itemStyle: {
        marginVertical: 10,
      },
      labelStyle: {
        fontSize: 20,
      },
      drawerContentContainerStyle: {
        paddingTop: 30,
      },
    }}
  >
    <Drawer.Screen name="Tasks" component={TasksScreen} options={{ drawerLabel: "Tarefas" }} />
    <Drawer.Screen name="TaskCreate" component={TaskCreateScreen} options={{ drawerLabel: "Criar Tarefa" }} />
    <Drawer.Screen name="TaskDetails" component={TaskDetails} options={{ drawerLabel: "Detalhes da Tarefa" }}/>
    <Drawer.Screen name="Etapas" component={EtapasScreen} options={{ drawerLabel: 'Adicionar Etapas' }} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
