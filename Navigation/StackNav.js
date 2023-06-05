import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Utility/Routes";

import { Home, Login, Category, CategoryGroup } from "../Screens";

import ProductStacknav from "./ProductStacknav";
import PopularProductStack from "./PopularProductStack";
import FlashsaleProductNav from "./FlashsaleProductNav";
import VegetablesProductStack from "./VegetablesProductStack";
import BiscuitsStack from "./BiscuitsStack"
import SaltSugarStack from "./SaltSugarStack";
import FreshFruitsStack from "./FreshFruitsStack"
import NoodlesStack from "./NoodlesStack";
import OilStacknav from "./OilStacknav";
import OffersScreen from "../Screens/Home/OffersScreen";
import OrderScreenNav from "../Navigation/OrderScreenNav"

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
      <Stack.Screen name={Routes.POPULAR_Product} component={PopularProductStack} />
      <Stack.Screen name={Routes.FLASHSLE} component={FlashsaleProductNav} />
      <Stack.Screen name={Routes.FRESH_VEGETABLES} component={VegetablesProductStack} />
      <Stack.Screen name={Routes.All_BISCUITS} component={BiscuitsStack} />
      <Stack.Screen name={Routes.SALT_SUGER} component={SaltSugarStack} />
      <Stack.Screen name={Routes.FRESH_FOOD} component={FreshFruitsStack} />
      <Stack.Screen name={Routes.NOODLES} component={NoodlesStack} />
      <Stack.Screen name={Routes.ALL_OIL} component={OilStacknav} />
      <Stack.Screen name={Routes.Product_Card} component={ProductStacknav} />
      <Stack.Screen name={Routes.OFFER_PRODUCTS} component={OffersScreen} />
      <Stack.Screen name={Routes.CART_SCREEN} component={OrderScreenNav} />


      
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
