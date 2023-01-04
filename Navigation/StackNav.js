import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Utility/Routes";

import { Home, Login, Category, CategoryGroup } from "../Screens";

const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HOME_TAB} component={Home} />
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen
        name={Routes.CATEGORY_GROUP_TAB}
        component={CategoryGroup}
      />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
