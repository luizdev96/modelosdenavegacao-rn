import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feather from '@expo/vector-icons/Feather';

import StackRoutes from "./stackRoutes";
import Notificacoes from '../pages/Notificacoes'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(

        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#9999",
        }}
        >

           <Tab.Screen 
           name="HomeStack" 
           component={StackRoutes}
           options={{
            headerShown: false,
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color, size}) => {
              return(
                <Feather name="home" color={color} size={size}/>
              )
            }
           }}
           />

           <Tab.Screen 
           name="Sobre" 
           component={Notificacoes}
           options={{
            headerShown: false,
            tabBarLabel: 'Notificações',
            tabBarBadge: "1",
            tabBarBadgeStyle: "#333",
            tabBarIcon: ({ color, size}) => {
              return(
                <Feather name="bell" color={color} size={size}/>
              )
            }
           }}
           />

        </Tab.Navigator>
    )
}