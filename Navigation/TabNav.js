import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Routes from "../Utility/Routes";
import HomeScreen from "../Screens/Home/HomeScreen";
import SearchScreen from "../Screens/Home/SearchScreen";
import CategoryScreen from "../Screens/Home/CategoryScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const TabNav = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          let IconName;
          if (route.name === Routes.HOME_TAB) {
            IconName = focused ? "ios-home-outline" : "ios-home-sharp";
          } else if (route.name === Routes.CATEGORY_TAB) {
            IconName = focused ? "ios-apps-outline" : "ios-apps-sharp";
          } else if (route.name === Routes.SERARCH_TAB) {
            IconName = focused ? "ios-search-outline" : "ios-search-sharp";
          }
          return <Icon name={IconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name={Routes.HOME_TAB} component={HomeScreen} />
      <Tab.Screen name={Routes.CATEGORY_TAB} component={CategoryScreen} />
      <Tab.Screen name={Routes.SERARCH_TAB} component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
