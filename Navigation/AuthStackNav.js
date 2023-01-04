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

import { Onbording, Login, Register, ForgotPassword } from "../Screens";

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
      <Stack.Screen name={ROUTES.ONBOARD} component={Onbording} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
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
