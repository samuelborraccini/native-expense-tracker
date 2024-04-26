import { View, Text, Button } from "react-native";
import React, { useLayoutEffect, useState } from "react";

import HomeScreen from "../screens/HomeScreen";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import AllExpensesScreen from "../screens/AllExpensesScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Modal } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

const MenuTabs = ({ navigation }) => {
  return (
    <>
      <Tab.Navigator
        activeIndicatorStyle={{ backgroundColor: "#FDDA0D", width: 100 }}
        inactiveColor="gray"
        activeColor="black"
        shifting={true}
        barStyle={{ backgroundColor: "transparent" }}
      >
        <Tab.Screen
          name="Recent"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="clock-time-eight-outline"
                size={26}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="All"
          component={AllExpensesScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MenuTabs;
