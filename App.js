import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuTabs from "./navigators/MenuTabs";
import ProviderWrapper from "./components/ProviderWrapper";
import Modal from "./components/Modal";
import PressableItem from "./components/ui/PressableItem";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ProviderWrapper>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            /* headerBackTitle: "back",
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white", */
            contentStyle: { backgroundColor: "white" },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="root"
            component={MenuTabs}
            options={({ navigation }) => ({
              headerTitle: "Expenses Tracker",
              headerRight: () => (
                <PressableItem
                  onPress={() => navigation.navigate("modal")}
                  containerStyle={{
                    marginRight: 10,
                    width: 40,
                  }}
                  pressableStyle={{
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <FontAwesome5 name="plus" size={20} color="black" />
                </PressableItem>
              ),
            })}
          />
          <Stack.Screen
            name="modal"
            component={Modal}
            options={{ headerTitle: "New expense", presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
