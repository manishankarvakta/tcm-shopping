import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardScreen from "../Screens/OnboardScreen";
import LoginScreen from "../Screens/LoginScreen";
import HomeScreen from "../Screens/HomeScreen";

const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
