import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Utility/Routes";
import { Category, CategoryProduct } from "../Screens";
import PopularProducts from "../Screens/Home/PopularProducts";
import LoginScreen from "../Screens/Auth/LoginScreen";

const CategoryStackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.CATEGORY_TAB} component={Category} />
      <Stack.Screen
        name={Routes.CATEGORY_PRODUCT}
        component={CategoryProduct}
      />

      <Stack.Screen
        name={Routes.LOGIN}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default CategoryStackNav;

const styles = StyleSheet.create({});
