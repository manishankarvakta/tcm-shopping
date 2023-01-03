import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from "../Screens/Auth/LoginScreen";
// import OnboardScreen from "../Screens/OnboardScreen";
import ROUTES from "../Utility/Routes";
import OnboardScreen from "../Screens/OnboardScreen";
import LoginScreen from "../Screens/Auth/LoginScreen";
import RegisterScreen from "../Screens/Auth/RegisterScreen";
import ForgotPasswordScreen from "../Screens/Auth/ForgotPasswordScreen";
import TabNav from "./TabNav";
// import RegisterScreen from "../Screens/Auth/RegisterScreen";
// import ForgotPasswordScreen from "../Screens/Auth/ForgotPasswordScreen";

const AuthStackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
      initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen name={ROUTES.ONBOARD} component={OnboardScreen} />
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={ROUTES.HOME_TAB}
        component={TabNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNav;

const styles = StyleSheet.create({});
