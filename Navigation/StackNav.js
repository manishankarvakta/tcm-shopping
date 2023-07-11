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
import OrderScreenNav from "../Navigation/OrderScreenNav"
import OfferScreenstack from "../Navigation/OfferScreenstack"
import CategoryStackNav from "./CategoryStackNav";
import FeaturedProductStack from "./FeaturedProductStack";
const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HOME} component={Home}  />
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen
        name={Routes.CATEGORY_GROUP_TAB}
        component={CategoryStackNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.CART_SCREEN_TAB} component={OrderScreenNav}  options={{ headerShown: false }}/>
      <Stack.Screen name={Routes.POPULAR_Product} component={PopularProductStack} options={{ headerShown: false }}/>
      <Stack.Screen name={Routes.FLASHSALE_TAB} component={FlashsaleProductNav} options={{ headerShown: false }}/>
      <Stack.Screen name={Routes.FRESH_VEGETABLES} component={VegetablesProductStack} />
      <Stack.Screen name={Routes.All_BISCUITS} component={BiscuitsStack} />
      <Stack.Screen name={Routes.SALT_SUGER} component={SaltSugarStack} />
      <Stack.Screen name={Routes.FRESH_FOOD_TAB} component={FreshFruitsStack} options={{ headerShown: false }} />
      <Stack.Screen name={Routes.NOODLES_TAB} component={NoodlesStack} options={{ headerShown: false }}/>
      <Stack.Screen name={Routes.ALL_OIL_TAB} component={OilStacknav} options={{ headerShown: false }}/>
      <Stack.Screen name={Routes.Product_Card} component={ProductStacknav} options={{ headerShown: false }}/>
      <Stack.Screen name={Routes.OFFER_PRODUCTS_TAB} component={OfferScreenstack} options={{ headerShown: false }} />
      <Stack.Screen name={Routes.IMAGE_CAROUSEL_Tab} component={FeaturedProductStack} />
      
      


      
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
