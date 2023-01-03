import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home/HomeScreen";
import CategoryScreen from "../Screens/Home/CategoryScreen";
import Routes from "../Utility/Routes";
import LoginScreen from "../Screens/Auth/LoginScreen";

const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HOME_TAB} component={HomeScreen} />
      <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Routes.CATEGORY} component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
