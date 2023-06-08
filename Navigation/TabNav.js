import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Routes from "../Utility/Routes";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Home, Category, Search, Chats, CategoryGroup } from "../Screens";
import StackNav from "./StackNav";
import CategoryStackNav from "./CategoryStackNav";

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
            IconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === Routes.CATEGORY_GROUP_TAB) {
            IconName = focused ? "ios-apps-sharp" : "ios-apps-outline";
          } else if (route.name === Routes.SERARCH_TAB) {
            IconName = focused ? "ios-search-sharp" : "ios-search-outline";
          } else if (route.name === Routes.CHATS_TAB) {
            IconName = focused
              ? "ios-chatbubble-ellipses-sharp"
              : "ios-chatbubble-ellipses-outline";
          }
          return <Icon name={IconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name={Routes.HOME_TAB} component={StackNav} />
      <Tab.Screen name={Routes.CATEGORY_GROUP_TAB} component={CategoryStackNav} />
      <Tab.Screen name={Routes.CHATS_TAB} component={Chats} />
      <Tab.Screen name={Routes.SERARCH_TAB} component={Search} />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
