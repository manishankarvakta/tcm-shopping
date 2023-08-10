import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Utility/Routes";

import { Home, Login, Category, CategoryGroup } from "../Screens";

import PopularProductStack from "./PopularProductStack";
import FlashsaleProductNav from "./FlashsaleProductNav";
import VegetablesProductStack from "./VegetablesProductStack";
import BiscuitsStack from "./BiscuitsStack";
import FreshFruitsStack from "./FreshFruitsStack";
import OrderScreenNav from "../Navigation/OrderScreenNav";
import OfferScreenstack from "../Navigation/OfferScreenstack";
import CategoryStackNav from "./CategoryStackNav";
import FeaturedProductStack from "./FeaturedProductStack";
import SkinCareStack from "./SkinCareStack";
import DrinksStack from "./DrinksStack";
import OilStack from "./OilStack";
import ProfileStack from "./ProfileStack";
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import UpdateInformation from "../Screens/Profile/UpdateInformation";
import EarnReward from "../Screens/DrawerScreen/EarnReward";
const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HOME} component={Home} />
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen
        name={Routes.CATEGORY_GROUP_TAB}
        component={CategoryStackNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.CART_SCREEN_TAB}
        component={OrderScreenNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.POPULAR_Product}
        component={PopularProductStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.FLASHSALE_TAB}
        component={FlashsaleProductNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.FRESH_VEGETABLES}
        component={VegetablesProductStack}
      />
      <Stack.Screen name={Routes.All_BISCUITS} component={BiscuitsStack} />
      <Stack.Screen name={Routes.SOFT_DRINKS_TAB} component={DrinksStack} />
      <Stack.Screen
        name={Routes.FRESH_FOOD_TAB}
        component={FreshFruitsStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.OIL_TAB}
        component={OilStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SKIN_CARE_TAB}
        component={SkinCareStack}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={Routes.OFFER_PRODUCTS_TAB}
        component={OfferScreenstack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.IMAGE_CAROUSEL_Tab}
        component={FeaturedProductStack}
      />

      <Stack.Screen
        name={Routes.PRFILE_STACK_DRAWER}
        component={ProfileStack}
        options={{ headerShown: false }}
      />

      <Stack.Screen name={Routes.Tt} component={SingleProductsDetailsScreen} />
      <Stack.Screen
        name={Routes.UPDATE_INFORMATION}
        component={UpdateInformation}
      />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
