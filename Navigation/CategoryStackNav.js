import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Utility/Routes";
import { Category, CategoryProduct } from "../Screens";

const CategoryStackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.CATEGORY_TAB} component={Category} />
      <Stack.Screen
        name={Routes.CATEGORY_PRODUCT}
        component={CategoryProduct}
      />
    </Stack.Navigator>
  );
};

export default CategoryStackNav;

const styles = StyleSheet.create({});
