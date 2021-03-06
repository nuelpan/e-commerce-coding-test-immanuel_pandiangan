import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "react-native-vector-icons";
import HomeStackNavigation from "../navigations/HomeStackNavigation";
import ProfileStackNavigation from "../navigations/ProfileStackNavigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={20} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigation}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={20} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
