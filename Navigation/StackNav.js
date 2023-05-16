import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Utility/Routes";

import { Home, Login, Category, CategoryGroup } from "../Screens";
import PopularProducts from "../Screens/Home/PopularProducts";
import FlashSale from "../Screens/Home/FlashSales";
import FreshVegetables from "../Screens/Home/FreshVegetables";
import AllBiscuits from "../Screens/Home/AllBiscuits";
import SaltSugars from "../Screens/Home/SaltSugars";
import AllFreshFruits from "../Screens/Home/AllFreshFruits";
import AllNoodles from "../Screens/Home/AllNoodles"
import AllOil from "../Screens/Home/AllOil"

const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HOME_TAB} component={Home}  />
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen
        name={Routes.CATEGORY_GROUP_TAB}
        component={CategoryGroup}
      />
      <Stack.Screen name={Routes.POPULAR_Product} component={PopularProducts} />
      <Stack.Screen name={Routes.FLASHSLE} component={FlashSale} />
      <Stack.Screen name={Routes.FRESH_VEGETABLES} component={FreshVegetables} />
      <Stack.Screen name={Routes.All_BISCUITS} component={AllBiscuits} />
      <Stack.Screen name={Routes.SALT_SUGER} component={SaltSugars} />
      <Stack.Screen name={Routes.FRESH_FOOD} component={AllFreshFruits} />
      <Stack.Screen name={Routes.NOODLES} component={AllNoodles} />
      <Stack.Screen name={Routes.ALL_OIL} component={AllOil} />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
