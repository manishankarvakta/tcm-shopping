import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Utility/Routes";
import { Category, CategoryGroup, CategoryProduct } from "../Screens";
import PopularProducts from "../Screens/Home/PopularProducts";
import LoginScreen from "../Screens/Auth/LoginScreen";
import CategoryGroupScreen from "../Screens/Home/CategoryGroupScreen";
import CategoryScreen from "../Screens/Home/CategoryScreen";
import SubCategory from "../Screens/Home/SubCategory";
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import HomeScreen from "../Screens/Home/HomeScreen";
import ProductsCategory from "../Screens/Home/ProductsCategory";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const CategoryStackNav = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.CATEGORY_GROUP_SCREEN}
        component={CategoryGroupScreen}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },
          headerBackTitle: "BACK",
          // Add headerLeft option to set custom back arrow
          headerLeft: () => (
            <TouchableOpacity onPress={handleBackPress}>
              <Ionicons
                name="arrow-back" // Replace this with the name of your desired icon
                size={24}
                color="black"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name={Routes.CATEGORY_SCREEN}
        component={CategoryScreen}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },

          headerBackTitle: "BACK",
        }}
      />

      <Stack.Screen
        name={Routes.SUB_CATEGORY}
        component={SubCategory}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },

          headerBackTitle: "BACK",
        }}
      />

      <Stack.Screen
        name={Routes.PRODUCTS_CATEGORY}
        component={ProductsCategory}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },

          headerBackTitle: "BACK",
        }}
      />

      <Stack.Screen
        name={Routes.Tt}
        component={SingleProductsDetailsScreen}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },

          headerBackTitle: "BACK",
        }}
      />

      <Stack.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },

          headerBackTitle: "BACK",
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoryStackNav;

const styles = StyleSheet.create({});
