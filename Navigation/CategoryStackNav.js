import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Utility/Routes";
import CategoryScreen from "../Screens/Home/CategoryScreen";
import CategoryProductScreen from "../Screens/Home/CategoryProductScreen";
import HomeScreen from "../Screens/Home/HomeScreen";

const CategoryStackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      <Stack.Screen name={Routes.CATEGORY} component={CategoryScreen} />
      <Stack.Screen
        name={Routes.CATEGORY_PRODUCT}
        component={CategoryProductScreen}
      />
    </Stack.Navigator>
  );
};

export default CategoryStackNav;

const styles = StyleSheet.create({});
