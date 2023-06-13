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

const CategoryStackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
     
      <Stack.Screen
        name={Routes.CATEGORY_GROUP_SCREEN}
        component={CategoryGroupScreen}
   
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
        name={Routes.T}
        component={PopularProducts}
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
